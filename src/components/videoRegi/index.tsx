import {
  VideoRegiContainer,
  VideoRegiInner,
} from "../../styles/videoRegipage/videoRegiBox";
import VideoRegiForm from "./VideoRegiForm";
import VideoRegiTitle from "./VideoRegiTitle";

const VideoRegi = () => {
  return (
    <VideoRegiContainer>
      <VideoRegiInner>
        <VideoRegiTitle />
        <VideoRegiForm />
      </VideoRegiInner>
    </VideoRegiContainer>
  );
};

export default VideoRegi;
