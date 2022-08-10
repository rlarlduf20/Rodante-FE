import { VideoBox } from "../../../styles/mainpage/weeklyVideoSection";

interface VideoType {
  day: string;
}

const Video = ({ day }: VideoType) => {
  return <VideoBox>{day}</VideoBox>;
};

export default Video;
