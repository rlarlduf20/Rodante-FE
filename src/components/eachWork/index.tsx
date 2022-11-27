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

const dummyVideo = {
  title: "퀸스 갬빗",
  content:
    "1950년대 한 보육원, 체스에 천재적인 재능을 보이는 소녀. 점점 더 넓은 세계로 향하며, 체스 스타의 여정을 이어간다. 하지만 더 이기고 싶다면 중독에 빠진 자신을 극복해야 한다.",
  thumbnail:
    "data:image/jpeg;base64,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",
  videoList: [
    // {
    //   id: 1,
    //   title: "포메라니안",
    //   thumbnail: "/images/pome.jpeg",
    //   date: "2022.11.11",
    // },
    // {
    //   id: 2,
    //   title: "푸들",
    //   thumbnail: "/images/poodle.jpeg",
    //   date: "2022.11.18",
    // },
    // {
    //   id: 3,
    //   title: "비숑",
    //   thumbnail: "/images/bishong.jpeg",
    //   date: "2022.11.25",
    // },
    // {
    //   id: 4,
    //   title: "치와와",
    //   thumbnail: "/images/chiwawa.jpeg",
    //   date: "2022.12.01",
    // },
    // {
    //   id: 5,
    //   title: "말티즈",
    //   thumbnail: "/images/maltiz.jpeg",
    //   date: "2022.12.08",
    // },
  ],
};

const EachWorkMain = () => {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [imgFile, setImgFile] = useState<any>();
  const [videoFile, setVideoFile] = useState<any>();
  const [uploadDelay, setUploadDelay] = useState(false);
  const [videoList, setVideoList] = useState<any>();
  const [videoInfo, setVideoInfo] = useState<any>();
  const [index, setIndex] = useState(0);

  const router = useRouter();
  const params = router.query.regi;
  const [workId, setWorkId] = useState(router.query.workId);
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
    const s3 = new ReactS3Client(s3configImg);
    const filename = `${work}/${work}`;
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
    const work = Number(workId);
    const id = dummyVideo.videoList.length + 1;
    const filename = `${work}/${id}`;
    const s3 = new ReactS3Client(s3config);
    setUploadDelay(true);
    try {
      await s3.uploadFile(videoFile, filename);
      alert("영상 등록 성공");
      window.location.replace("/");
    } catch (e) {
      alert("다시 시도해주세요.");
      window.location.replace("/");
    }
    try {
      await axios.post("http://localhost:8080/video/getInfo", {
        workId: work,
        episode: index,
      });
      alert("영상등록에 성공했습니다.");
      window.location.replace("/");
    } catch (e) {
      console.error(e);
      alert("다시한번 시도해주세요.");
      window.location.replace("/");
    }
  };
  const getEachWork = async () => {
    const work = Number(workId);
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
  };
  const playVideo = async () => {
    try {
      window.open();
    } catch (e) {
      console.error(e);
      alert("영상 재생에 실패했습니다.");
    }
  };
  useEffect(() => {
    getEachWork();
  }, []);
  useEffect(() => {
    setWorkId(router.query.workId);
  }, [workId]);

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
                <VideoList
                  uri={videoInfo.coverImg}
                  key={item.id}
                  onClick={() => window.open(item.videoUrl, "_blank")}
                >
                  <div className="cover"></div>
                  <p className="title">{item.episode}화</p>
                </VideoList>
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
