import {
  NoticeBoardBox,
  NoticeBoardInnerBox,
  NoticeSection,
} from "../../styles/mainpage/notice/noticeSection";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import NoticeBoardItem from "../../styles/mainpage/notice/noticeSectionItem";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const f_board = {
  title: "멤버십 안내",
  content: "멤버십 가입 후 매달 무료 이용하세요.",
  background: "#b9cffa",
  link: "#",
};
const s_board = {
  title: "이상한 변호사 우영우",
  content: "멤버십 가입 후 매달 무료 이용하세요.",
  background: "lightpink",
  link: "#",
};
const t_board = {
  title: "탑건:메버릭",
  content: "멤버십 가입 후 매달 무료 이용하세요.",
  background: "lightgray",
  link: "#",
};
const NoticeBoard = () => {
  return (
    <Swiper
      // spaceBetween={8}
      initialSlide={1}
      // centeredSlides={true}
      autoplay={{ delay: 2000 }}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, Autoplay]}
    >
      <SwiperSlide>
        <NoticeBoardItem
          title={f_board.title}
          content={f_board.content}
          background={f_board.background}
          link={f_board.link}
        />
      </SwiperSlide>
      <SwiperSlide>
        <NoticeBoardItem
          title={s_board.title}
          content={s_board.content}
          background={s_board.background}
          link={s_board.link}
        />
      </SwiperSlide>
      <SwiperSlide>
        <NoticeBoardItem
          title={t_board.title}
          content={t_board.content}
          background={t_board.background}
          link={t_board.link}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default NoticeBoard;
