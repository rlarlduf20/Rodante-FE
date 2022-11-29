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
  const [index, setIndex] = useState(0);

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
        episode: index,
      });
      alert("영상등록에 성공했습니다.");
      window.location.replace("/mypage");
    } catch (e) {
      console.error(e);
      alert("다시한번 시도해주세요.");
      window.location.replace("/mypage");
    }
  };
  // const getEachWork = async () => {
  //   const work = window.location.pathname.split("/")[2];
  //   try {
  //     const res = await axios.get(`http://localhost:8080/work/${work}`);
  //     setVideoInfo(res.data);
  //     console.log(res.data);
  //   } catch (e) {
  //     console.error(e);
  //   }
  //   try {
  //     const res = await axios.get(
  //       `http://localhost:8080/work/videoList/${work}`
  //     );
  //     setVideoList(res.data);
  //     console.log(res.data);
  //     setLoading(false);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  useEffect(() => {
    (async () => {
      const work = window.location.pathname.split("/")[2];
      try {
        const res = await axios.get(`http://localhost:8080/work/${work}`);
        setVideoInfo(res.data);
        console.log(res.data);
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
      try {
        const res = await axios.get(`http://localhost:8080/work/${work}`);
        setVideoInfo(res.data);
        console.log(res.data);
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
  }, []);
  // useEffect(() => {
  //   setWorkId(window.location.pathname.split("/")[2]);
  // }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <EachWorkContainer>
          <TitleBox url={videoInfo.coverImg}>
            <div className="infoBox">
              <p className="title">{videoInfo.title}</p>
              <p className="content">{videoInfo.description}</p>
            </div>
            <div className="thumbnail"></div>
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
                    uri={videoInfo.coverImg}
                    key={item.id}
                    onClick={() => setVideoModal(true)}
                    // onClick={() => window.open(item.videoUrl, "_blank")}
                  >
                    <div className="cover">
                      <div className="blur">
                        <PlayArrowIcon color="info" fontSize="large" />
                      </div>
                    </div>
                    <p className="title">{item.episode}화</p>
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
                type="number"
                placeholder="몇화"
                className="titleInput"
                onChange={(e: any) => setIndex(e.target.value)}
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
