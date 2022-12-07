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
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
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
  const [textEditState, setTextEditState] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDes, setEditDes] = useState("");
  const [editGenre, setEditGenre] = useState("");
  const [editDOW, setEditDOW] = useState("");

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
  useEffect(() => {
    setEditTitle(videoInfo?.title);
    setEditDes(videoInfo?.description);
    setEditDOW(videoInfo?.dayOfWeek);
    setEditGenre(videoInfo?.genre);
  }, [videoInfo]);
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
  const onClickDelWork = async () => {
    const access = localStorage.getItem("access_token");
    const work = window.location.pathname.split("/")[2];
    try {
      await axios.delete(`http://localhost:8080/user/work/delete/${work}`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      alert("작품 삭제 완료");
      window.location.replace("/mypage");
    } catch (e) {
      console.error(e);
      alert("작품 삭제 권한이 없습니다.");
    }
  };
  const onClickTextEdit = async () => {
    const access = localStorage.getItem("access_token");
    const work = window.location.pathname.split("/")[2];
    let data = {
      title: editTitle,
      genre: editGenre,
      description: editDes,
      dayOfWeek: editDOW,
    };
    if (
      editTitle === "" ||
      editGenre === "" ||
      editDes === "" ||
      editDOW === ""
    ) {
      alert("모든 입력란을 채워주세요");
      return;
    }
    try {
      await axios.put(`http://localhost:8080/user/work/update/${work}`, data, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      alert("내용 수정 완료");
      window.location.replace("/mypage");
    } catch (e) {
      console.error(e);
      alert("작품 삭제 권한이 없습니다.");
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <EachWorkContainer>
          <TitleBox url={videoInfo?.coverImg}>
            {textEditState ? (
              <>
                <div className="infoBox">
                  <input
                    className="inputTitle"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <textarea
                    className="inputDes"
                    value={editDes}
                    onChange={(e) => setEditDes(e.target.value)}
                  />
                  <select
                    className="inputDOW"
                    defaultValue={""}
                    onClick={(e: any) => setEditDOW(e.target.value)}
                  >
                    <option value="">{editDOW}</option>
                    <option value="mon">월</option>
                    <option value="tue">화</option>
                    <option value="wed">수</option>
                    <option value="thu">목</option>
                    <option value="fri">금</option>
                    <option value="sat">토</option>
                    <option value="sun">일</option>
                  </select>
                  <select
                    className="inputGenre"
                    defaultValue={""}
                    onClick={(e: any) => setEditGenre(e.target.value)}
                  >
                    <option value="">{editGenre}</option>
                    <option value="romance">로맨스</option>
                    <option value="mood">감성</option>
                    <option value="comedy">코미디</option>
                  </select>
                </div>
              </>
            ) : (
              <div className="infoBox">
                <p className="title">{videoInfo?.title}</p>
                <p className="content">{videoInfo?.description}</p>
              </div>
            )}

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
                {textEditState ? (
                  <>
                    <div className="confirm">
                      <CheckIcon
                        fontSize="large"
                        color="action"
                        onClick={onClickTextEdit}
                      />
                    </div>
                    <div
                      className="cancel"
                      onClick={() => setTextEditState(false)}
                    >
                      <CloseIcon fontSize="large" color="action" />
                    </div>
                  </>
                ) : (
                  <div
                    className="edit_text"
                    onClick={() => setTextEditState(true)}
                  >
                    <EditIcon fontSize="large" color="action" />
                  </div>
                )}

                <div className="del" onClick={onClickDelWork}>
                  <DeleteIcon fontSize="large" color="action" />
                </div>
              </>
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
