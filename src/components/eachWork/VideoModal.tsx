import { Modal } from "@mui/material";
import { VideoModalBox } from "../../styles/modal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface VideoModalType {
  videoModal: boolean;
  setVideoModal: any;
  item: any;
}

const VideoModal = ({ videoModal, setVideoModal, item }: VideoModalType) => {
  return (
    <Modal open={videoModal} onClose={() => setVideoModal(false)}>
      <VideoModalBox>
        <embed type="video/mp4" src={item.videoUrl} width="853" height="640" />
        <div
          className="back"
          onClick={() => {
            setVideoModal(false);
            console.log(videoModal);
          }}
        >
          <ArrowBackIcon fontSize="large" />
        </div>
      </VideoModalBox>
    </Modal>
  );
};

export default VideoModal;
