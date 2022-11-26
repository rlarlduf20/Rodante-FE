import { useState } from "react";
import { LockerBox } from "../../../styles/mypage/mypageBox";
import WatchVideo from "./WatchVideo";
import UploadVideo from "./UploadVideo";
import axios from "axios";
const dummyWatchVideo: any = [
  // { title: "연애 플레이리스트", thumbnail: "/images/playlist.jpeg" },
  // { title: "연애 플레이리스트", thumbnail: "/images/playlist.jpeg" },
  // { title: "연애 플레이리스트", thumbnail: "/images/playlist.jpeg" },
];
const dummyUploadVideo = [{ title: "강아지", thumnail: "/images/dog.jpeg" }];
const Locker = ({ myInfo }: { myInfo: any }) => {
  const [type, setType] = useState("watch");
  const [uploadVideo, setUploadVideo] = useState<any>();
  const onClickUpload = async () => {
    setType("upload");
    const res = await axios.get("http://localhost:8080/workAll");
    setUploadVideo(res.data);
  };
  return (
    <LockerBox type={type}>
      <h1 className="title">보관함</h1>
      <div className="typeRadio">
        <div className="watchVideo" onClick={() => setType("watch")}>
          내가 찜한 영상
        </div>
        <div className="uploadVideo" onClick={onClickUpload}>
          나의 업로드한 영상
        </div>
      </div>
      {type === "watch" ? (
        <WatchVideo w_video={dummyWatchVideo} />
      ) : (
        <UploadVideo u_video={uploadVideo} myInfo={myInfo} />
      )}
    </LockerBox>
  );
};

export default Locker;
