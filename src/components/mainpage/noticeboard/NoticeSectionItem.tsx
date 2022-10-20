import {
  NoticeBoardBox,
  NoticeBoardInnerBox,
} from "../../../styles/mainpage/noticeSection";
import Link from "next/link";
import axios from "axios";

interface NoticeType {
  title: string;
  content: string;
  link: string;
  imgUri: string;
  access_token: string | string[] | undefined;
}

const NoticeBoardItem = ({
  title,
  content,
  link,
  imgUri,
  access_token,
}: NoticeType) => {
  const testClick = async () => {
    try {
      const res = await axios.get("http://localhost:8080/user/success", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <NoticeBoardBox imgUri={imgUri}>
      <NoticeBoardInnerBox>
        <div className="noticeBox">
          <div className="notice_title">
            <h1>{title}</h1>
          </div>
          <div className="notice_content">{content}</div>
          <Link href={link}>
            <div className="notice_button" onClick={testClick}>
              <a>{`> 보러가기`}</a>
            </div>
          </Link>
        </div>
      </NoticeBoardInnerBox>
    </NoticeBoardBox>
  );
};

export default NoticeBoardItem;
