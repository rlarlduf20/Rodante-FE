import {
  UploadVideoBox,
  UploadVideoCard,
} from "../../../styles/mypage/mypageBox";

interface UploadVideoType {
  u_video: any;
}

const UploadVideo = ({ u_video }: UploadVideoType) => {
  return (
    <UploadVideoBox>
      {u_video.map((list: any, index: number) => (
        <UploadVideoCard key={index} thumbnail={list.thumbnail}>
          <div className="thumbnail"></div>
          <p>{list.title}</p>
        </UploadVideoCard>
      ))}
    </UploadVideoBox>
  );
};

export default UploadVideo;
