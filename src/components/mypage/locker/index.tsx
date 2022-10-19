import { useState } from "react";
import { LockerBox } from "../../../styles/mypage/mypageBox";
import WatchVideo from "./WatchVideo";
import UploadVideo from "./UploadVideo";
const dummyWatchVideo = [
  { title: "연애 플레이리스트", thumbnail: "/images/playlist.jpeg" },
  { title: "연애 플레이리스트", thumbnail: "/images/playlist.jpeg" },
  { title: "연애 플레이리스트", thumbnail: "/images/playlist.jpeg" },
];
const dummyUploadVideo = [
  { title: "에이틴", thumnail: "/images/18img.jpeg" },
  { title: "에이틴", thumnail: "/images/18img.jpeg" },
];
const Locker = () => {
  const [type, setType] = useState("watch");
  return (
    <LockerBox type={type}>
      <h1 className="title">보관함</h1>
      <div className="typeRadio">
        <div className="watchVideo" onClick={() => setType("watch")}>
          현재 시청중인 목록
        </div>
        <div className="uploadVideo" onClick={() => setType("upload")}>
          나의 업로드한 영상
        </div>
      </div>
      {type === "watch" ? (
        <WatchVideo w_video={dummyWatchVideo} />
      ) : (
        <UploadVideo u_video={dummyUploadVideo} />
      )}
    </LockerBox>
  );
};

export default Locker;
