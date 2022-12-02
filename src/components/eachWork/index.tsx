import Image from "next/image";
import { useRouter } from "next/router";
import {
  EachWorkContainer,
  TitleBox,
} from "../../styles/eachWorkPage/eachWorkBox";
import { VideoBox, VideoList } from "../../styles/eachWorkPage/eachWorkBox";
import EditIcon from "@mui/icons-material/Edit";
import { Modal } from "@mui/material";
import { useState, useEffect } from "react";
import { ModalBox } from "../../styles/modal";
import ReactS3Client from "react-aws-s3-typescript";
import axios from "axios";
import Loading from "../common/etc/Loading";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VideoModal from "./VideoModal";

const EachWorkMain = () => {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoModal, setVideoModal] = useState(false);
  const [imgFile, setImgFile] = useState<any>();
  const [videoFile, setVideoFile] = useState<any>();
  const [uploadDelay, setUploadDelay] = useState(false);
  const [videoList, setVideoList] = useState<any>();
  const [videoInfo, setVideoInfo] = useState<any>();
  const [title, setTitle] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [myId, setMyId] = useState<any>();

  const router = useRouter();
  const params = router.query.regi;
  const [workId, setWorkId] = useState<any>(router.query.workId);
  const s3config = {
    bucketName: "rodanthe-s3",
    dirName: "DramaVideo",
    region: "ap-northeast-2",
    accessKeyId: `${process.env.NEXT_PUBLIC_S3_ACCESS}`,
    secretAccessKey: `${process.env.NEXT_PUBLIC_S3_SECRET}`,
  };
  const s3configImg = {
    bucketName: "rodanthe-s3",
    dirName: "UserImg",
    region: "ap-northeast-2",
    accessKeyId: `${process.env.NEXT_PUBLIC_S3_ACCESS}`,
    secretAccessKey: `${process.env.NEXT_PUBLIC_S3_SECRET}`,
  };
  const onChangeImg = (e: any) => {
    setImgFile(e.target.files[0]);
  };
  const onClickEdit = async () => {
    const work = Number(workId);
    console.log("work", work);
    const s3 = new ReactS3Client(s3configImg);
    const filename = `${work}/${work}`;
    console.log("filename", filename);
    try {
      await s3.deleteFile(filename);
      await s3.uploadFile(imgFile, filename);
      alert("썸네일 변경 성공");
      window.location.replace("/");
    } catch (e) {
      console.error(e);
    }
  };
  const onClickVideo = async () => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      setVideoModal(true);
    } else {
      alert("로그인이 필요한 서비스입니다.");
      window.location.replace("/signin");
    }
  };
  const onClickVideoRegi = async () => {
    const work = window.location.pathname.split("/")[2];
    console.log(typeof work);
    const id = videoList.length + 1;
    const filename = `${work}/${id}`;
    const s3 = new ReactS3Client(s3config);
    setUploadDelay(true);
    try {
      await s3.uploadFile(videoFile, filename);
      window.location.replace("/mypage");
    } catch (e) {
      window.location.replace("/mypage");
    }
    try {
      await axios.post("http://localhost:8080/video/getInfo", {
        workId: work,
        episode: id,
        episodeTitle: title,
      });
      alert("영상등록에 성공했습니다.");
      window.location.replace(`/eachWork/${work}?regi=true`);
    } catch (e) {
      console.error(e);
      alert("다시한번 시도해주세요.");
      window.location.replace(`/eachWork/${work}?regi=true`);
    }
  };

  useEffect(() => {
    (async () => {
      const work = window.location.pathname.split("/")[2];
      const access = localStorage.getItem("access_token");
      try {
        const res = await axios.get(`http://localhost:8080/work/${work}`);
        setVideoInfo(res.data);
        const myRes = await axios.get("http://localhost:8080/user/me", {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });
        setMyId(myRes.data.id);
        console.log("마이 id", myRes.data.id);
        const res2 = await axios.get(
          `http://localhost:8080/user/jjim/work/get/${myRes.data.id}/${res.data.workId}`
        );
        setFavorite(res2.data);
        console.log("찜", res2.data);
      } catch (e) {
        console.error(e);
      }
      try {
        const res = await axios.get(
          `http://localhost:8080/work/videoList/${work}`
        );
        setVideoList(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [myId]);
  // useEffect(() => {
  //   setWorkId(window.location.pathname.split("/")[2]);
  // }, []);
  const onClickJJim = async () => {
    const access = localStorage.getItem("access_token");
    let body = {
      id: myId,
      workId: videoInfo.workId,
    };
    try {
      const res = await axios.post(
        "http://localhost:8080/user/jjim/work",
        body,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );
      console.log(res);
    } catch (e) {
      console.error(e);
    }
    setFavorite((prev) => !prev);
  };
  const onDelJJim = async () => {
    const access = localStorage.getItem("access_token");
    let body = {
      id: myId,
      workId: videoInfo.workId,
    };
    try {
      const res = await axios.post(
        "http://localhost:8080/user/jjim/work/delete",
        body,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      );
      console.log(res);
    } catch (e) {
      console.error(e);
    }
    setFavorite((prev) => !prev);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <EachWorkContainer>
          <TitleBox url={videoInfo?.coverImg}>
            <div className="infoBox">
              <p className="title">{videoInfo?.title}</p>
              <p className="content">{videoInfo?.description}</p>
            </div>
            <div className="thumbnail"></div>

            {favorite ? (
              <div className="jjim" onClick={onDelJJim}>
                <FavoriteIcon fontSize="large" color="warning" />
              </div>
            ) : (
              <div className="jjim" onClick={onClickJJim}>
                <FavoriteBorderIcon fontSize="large" color="warning" />
              </div>
            )}

            {params === "true" && (
              <>
                <label className="file" onClick={onClickEdit}>
                  <FileUploadIcon />
                  <input
                    type="file"
                    accept="image/png"
                    className="fileImg"
                    onChange={onChangeImg}
                  />
                </label>
                <div className="edit" onClick={onClickEdit}>
                  <EditIcon />
                </div>
              </>
            )}
          </TitleBox>
          {videoList.length !== 0 ? (
            <VideoBox>
              {videoList.map((item: any) => (
                <>
                  <VideoList
                    uri={videoInfo?.coverImg}
                    key={item.id}
                    onClick={onClickVideo}
                    // onClick={() => window.open(item.videoUrl, "_blank")}
                  >
                    <div className="cover">
                      <div className="blur">
                        <PlayArrowIcon color="info" fontSize="large" />
                      </div>
                    </div>
                    <p className="title">{item.episode}화</p>
                    <p>{item.episodeTitle}</p>
                  </VideoList>
                  <VideoModal
                    videoModal={videoModal}
                    setVideoModal={() => setVideoModal(false)}
                    item={item}
                  />
                </>
              ))}
            </VideoBox>
          ) : (
            <div className="noVideoText">곧 영상등록 예정인 작품입니다.</div>
          )}

          {params === "true" && (
            <div className="addCircle" onClick={() => setModalOpen(true)}>
              +
            </div>
          )}
          <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <ModalBox>
              <input
                type="file"
                accept="video/mp4"
                onChange={(e: any) => setVideoFile(e.target.files[0])}
              />
              <input
                type="text"
                placeholder="제목"
                className="titleInput"
                onChange={(e: any) => setTitle(e.target.value)}
              />
              <button
                className="btn"
                onClick={onClickVideoRegi}
                disabled={uploadDelay}
              >
                {uploadDelay ? "등록 진행중" : "등록하기"}
              </button>
            </ModalBox>
          </Modal>
        </EachWorkContainer>
      )}
    </>
  );
};

export default EachWorkMain;
