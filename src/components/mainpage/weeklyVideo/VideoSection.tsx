import { useState } from "react";
import styled from "@emotion/styled";
import {
  VideoContainer,
  VideoInnerContainer,
} from "../../../styles/mainpage/weeklyVideoSection";
import Video from "./Video";
import WeeklyButton from "./WeeklyButton";

const VideoSection = () => {
  const [day, setDay] = useState("mon");
  return (
    <VideoContainer>
      <VideoInnerContainer>
        <WeeklyButton setDay={setDay} day={day} />
        <Video day={day} />
      </VideoInnerContainer>
    </VideoContainer>
  );
};

export default VideoSection;
