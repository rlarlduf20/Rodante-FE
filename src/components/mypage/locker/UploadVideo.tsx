import Link from "next/link";
import {
  UploadVideoBox,
  UploadVideoCard,
} from "../../../styles/mypage/mypageBox";

interface UploadVideoType {
  u_video: any;
  myInfo: any;
}

const UploadVideo = ({ u_video, myInfo }: UploadVideoType) => {
  console.log(u_video, myInfo);
  const f_u_video = u_video?.filter((list: any) => {
    return list.id === myInfo?.id;
  });
  console.log("f", f_u_video);
  return (
    <UploadVideoBox>
      {f_u_video &&
        f_u_video.map((list: any, index: number) => (
          <UploadVideoCard key={index} thumbnail={list.coverImg}>
            <Link href={`/eachWork/${list.workId}?regi=true`}>
              <div className="thumbnail"></div>
            </Link>
            <p>{list.title}</p>
          </UploadVideoCard>
        ))}
    </UploadVideoBox>
  );
};

export default UploadVideo;
