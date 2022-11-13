import Image from "next/image";
import {
  EachWorkContainer,
  TitleBox,
} from "../../styles/eachWorkPage/eachWorkBox";
import { VideoBox } from "../../styles/eachWorkPage/eachWorkBox";

const dummyVideo = {
  title: "강아지",
  content: "귀여운 강아지입니다.",
  thumbnail:
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png",
  videoList: [
    {
      id: 1,
      title: "포메라니안",
      thumbnail: "/images/pome.jpeg",
      date: "2022.11.11",
    },
    {
      id: 2,
      title: "푸들",
      thumbnail: "/images/poodle.jpeg",
      date: "2022.11.18",
    },
    {
      id: 3,
      title: "비숑",
      thumbnail: "/images/bishong.jpeg",
      date: "2022.11.25",
    },
    {
      id: 4,
      title: "치와와",
      thumbnail: "/images/chiwawa.jpeg",
      date: "2022.12.01",
    },
    {
      id: 5,
      title: "말티즈",
      thumbnail: "/images/maltiz.jpeg",
      date: "2022.12.08",
    },
  ],
};
interface WorkType {
  add?: string;
}

const EachWorkMain = ({ add }: WorkType) => {
  return (
    <EachWorkContainer>
      <TitleBox url={dummyVideo.thumbnail}>
        <div className="infoBox">
          <p className="title">{dummyVideo.title}</p>
          <p className="content">{dummyVideo.content}</p>
        </div>
        <div className="thumbnail"></div>
      </TitleBox>
      <VideoBox>
        {dummyVideo.videoList.map((item) => (
          <div className="videoItem" key={item.id}>
            <Image src={item.thumbnail} width={170.6} height={128} />
            <p className="title">
              {item.id}화 {item.title}
            </p>
            <p className="date">{item.date}</p>
          </div>
        ))}
      </VideoBox>
      {add === "add" && <div className="addCircle">+</div>}
    </EachWorkContainer>
  );
};

export default EachWorkMain;
