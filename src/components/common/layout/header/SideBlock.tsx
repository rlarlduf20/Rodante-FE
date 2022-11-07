import Divider from "@mui/material/Divider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { SideBox } from "../../../../styles/layout";
import Link from "next/link";
import { useTokenContext } from "../../../../context/tokenState";

interface SideBlockType {
  toggleDrawer: any;
  setIsHambar: any;
}

const SideBlock = ({ toggleDrawer, setIsHambar }: SideBlockType) => {
  const { accessToken } = useTokenContext();
  const onClickLogout = (e: any) => {
    localStorage.removeItem("access_token");
    window.location.replace("/");
  };
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
        <Link href="/videoRegi">
          <a>
            <h1 style={{ marginLeft: "6px" }}>작품등록</h1>
          </a>
        </Link>
      </div>
      <div className="sideChalle">
        <EmojiEventsIcon fontSize="small" />
        <Link href="#">
          <a>
            <h1 style={{ marginLeft: "6px" }}>도전 웹드라마</h1>
          </a>
        </Link>
      </div>
      <Divider />
      {accessToken ? (
        <>
          <div className="sideMy">
            <Link href="/mypage">
              <a>
                <h1>마이페이지</h1>
              </a>
            </Link>
          </div>
          <Divider />
          <div className="sideLogout" onClick={onClickLogout}>
            <h1>로그아웃</h1>
          </div>
        </>
      ) : (
        <div className="sideRegi">
          <Link href="/signin">
            <a>
              <h1>로그인/가입</h1>
            </a>
          </Link>
        </div>
      )}
    </SideBox>
  );
};

export default SideBlock;
