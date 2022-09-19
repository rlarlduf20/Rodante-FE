import { useEffect, useState } from "react";
import {
  VideoContainer,
  VideoInnerContainer,
} from "../../../styles/mainpage/weeklyVideoSection";
import Video from "./Video";
import WeeklyButton from "./WeeklyButton";

const dummyVideo = [
  {
    dOfw: "mon",
    title: "에이틴",
    imgUri: "/images/18img.jpeg",
  },
];

const VideoSection = () => {
  const [day, setDay] = useState("mon");
  const [videoByDay, setVideoByDay] = useState([
    { dOfw: "", title: "", imgUri: "" },
  ]);
  useEffect(() => {
    setVideoByDay(dummyVideo);
  }, [day]);
  console.log(videoByDay);
  return (
    <VideoContainer>
      <VideoInnerContainer>
        <WeeklyButton setDay={setDay} day={day} />
        <Video day={day} videoByDay={videoByDay} />
      </VideoInnerContainer>
    </VideoContainer>
  );
};

export default VideoSection;
