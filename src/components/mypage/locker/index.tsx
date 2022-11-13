import { useState } from "react";
import { LockerBox } from "../../../styles/mypage/mypageBox";
import WatchVideo from "./WatchVideo";
import UploadVideo from "./UploadVideo";
const dummyWatchVideo = [
  { title: "연애 플레이리스트", thumbnail: "/images/playlist.jpeg" },
  { title: "연애 플레이리스트", thumbnail: "/images/playlist.jpeg" },
  { title: "연애 플레이리스트", thumbnail: "/images/playlist.jpeg" },
];
const dummyUploadVideo = [{ title: "강아지", thumnail: "/images/dog.jpeg" }];
const Locker = () => {
  const [type, setType] = useState("watch");
  return (
    <LockerBox type={type}>
      <h1 className="title">보관함</h1>
      <div className="typeRadio">
        <div className="watchVideo" onClick={() => setType("watch")}>
          내가 찜한 영상
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
