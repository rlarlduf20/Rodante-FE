import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { SideBox } from "../../../../styles/layout";
import Link from "next/link";

interface SideBlockType {
  toggleDrawer: any;
  setIsHambar: any;
}

const SideBlock = ({ toggleDrawer, setIsHambar }: SideBlockType) => {
  return (
    <SideBox
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="closebtn">
        <ArrowForwardIosIcon />
        <h1 className="sideLogo">Rodante</h1>
      </div>
      <div className="sideVideoR">
        <VideoCallIcon fontSize="small" />
        <Link href="#">
          <a>
            <h1 style={{ marginLeft: "6px" }}>영상등록</h1>
          </a>
        </Link>
      </div>
      <div className="sideChalle">
        <EmojiEventsIcon fontSize="small" />
        <Link href="#">
          <a>
            {" "}
            <h1 style={{ marginLeft: "6px" }}>도전 웹드라마</h1>
          </a>
        </Link>
      </div>
      <Divider />
      <div className="sideRegi">
        <Link href="#">
          <a>
            <h1>로그인/가입</h1>
          </a>
        </Link>
      </div>
    </SideBox>
  );
};

export default SideBlock;
