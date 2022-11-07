import axios from "axios";
import { useEffect, useState } from "react";
import {
  VideoContainer,
  VideoInnerContainer,
} from "../../../styles/mainpage/weeklyVideoSection";
import Video from "./Video";
import WeeklyButton from "./WeeklyButton";
import Loading from "../../common/etc/Loading";

const dummyVideo = [
  {
    dOfw: "mon",
    title: "에이틴",
    imgUri: "/images/18img.jpeg",
  },
  {
    dOfw: "mon",
    title: "에이틴",
    imgUri: "/images/18img.jpeg",
  },
  {
    dOfw: "mon",
    title: "에이틴",
    imgUri: "/images/18img.jpeg",
  },
  {
    dOfw: "mon",
    title: "에이틴",
    imgUri: "/images/18img.jpeg",
  },
  {
    dOfw: "mon",
    title: "에이틴",
    imgUri: "/images/18img.jpeg",
  },
  {
    dOfw: "mon",
    title: "에이틴",
    imgUri: "/images/18img.jpeg",
  },
  {
    dOfw: "mon",
    title: "에이틴",
    imgUri: "/images/18img.jpeg",
  },
  {
    dOfw: "tue",
    title: "연애플레이리스트",
    imgUri: "/images/playlist.jpeg",
  },
];

const VideoSection = () => {
  const [day, setDay] = useState("mon");
  const [loading, setLoading] = useState(true);
  const [videoByDay, setVideoByDay] = useState([
    { dOfw: "", title: "", imgUri: "", id: 0 },
  ]);
  const [test, setTest] = useState<any>();
  const getAllVideo = async () => {
    try {
      const res = await axios.get("http://localhost:8080/workAll");
      setTest(res.data);
      setVideoByDay(res.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getAllVideo();
  }, [day]);
  console.log(test);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <VideoContainer>
          <VideoInnerContainer>
            <WeeklyButton setDay={setDay} day={day} />
            <Video day={day} videoByDay={videoByDay} />
          </VideoInnerContainer>
        </VideoContainer>
      )}
    </>
  );
};

export default VideoSection;
