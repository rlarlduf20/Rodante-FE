import {
  WatchVideoBox,
  WatchVideoCard,
} from "../../../styles/mypage/mypageBox";

interface WatchVideoType {
  w_video: any;
}

const WatchVideo = ({ w_video }: WatchVideoType) => {
  return (
    <WatchVideoBox>
      {w_video.map((list: any, index: number) => (
        <WatchVideoCard key={index} thumbnail={list.thumbnail}>
          <div className="thumbnail"></div>
          <p>{list.title}</p>
        </WatchVideoCard>
      ))}
    </WatchVideoBox>
  );
};

export default WatchVideo;
