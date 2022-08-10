import {
  NoticeBoardBox,
  NoticeBoardInnerBox,
} from "../../../styles/mainpage/noticeSection";
import Link from "next/link";

interface NoticeType {
  title: string;
  content: string;
  background: string;
  link: string;
}

const NoticeBoardItem = ({ title, content, background, link }: NoticeType) => {
  return (
    <NoticeBoardBox background={background}>
      <NoticeBoardInnerBox>
        <div className="noticeBox">
          <div className="notice_title">
            <h1>{title}</h1>
          </div>
          <div className="notice_content">{content}</div>
          <Link href={link}>
            <div className="notice_button">
              <a>{`> 보러가기`}</a>
            </div>
          </Link>
        </div>
      </NoticeBoardInnerBox>
    </NoticeBoardBox>
  );
};

export default NoticeBoardItem;
