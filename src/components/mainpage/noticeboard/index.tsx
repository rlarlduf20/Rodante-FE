// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import NoticeBoardItem from "./NoticeSectionItem";

// SwiperCore.use([Navigation, Pagination, Autoplay]);

// const f_board = {
//   title: "멤버십 안내",
//   content: "멤버십 가입 후 매달 무료 이용하세요.",
//   background: "#b9cffa",
//   imgUri: "/images/membership.png",
//   link: "#",
// };
// const s_board = {
//   title: "이상한 변호사 우영우",
//   content: "멤버십 가입 후 매달 무료 이용하세요.",
//   background: "lightpink",
//   imgUri: "/images/noticeImg1.jpeg",
//   link: "#",
// };
// const t_board = {
//   title: "탑건:메버릭",
//   content: "멤버십 가입 후 매달 무료 이용하세요.",
//   background: "lightgray",
//   imgUri: "/images/noticeImg2.jpeg",
//   link: "#",
// };

// const NoticeBoard = () => {
//   return (
//     <Swiper
//       initialSlide={1}
//       centeredSlides={true}
//       // autoplay
//       slidesPerView={1}
//       navigation
//       loop={true}
//       pagination={{ clickable: true }}
//       modules={[Navigation, Pagination, Autoplay]}
//     >
//       <SwiperSlide>
//         <NoticeBoardItem
//           title={f_board.title}
//           content={f_board.content}
//           imgUri={f_board.imgUri}
//           link={f_board.link}
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <NoticeBoardItem
//           title={s_board.title}
//           content={s_board.content}
//           imgUri={s_board.imgUri}
//           link={s_board.link}
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <NoticeBoardItem
//           title={t_board.title}
//           content={t_board.content}
//           imgUri={t_board.imgUri}
//           link={t_board.link}
//         />
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default NoticeBoard;

import Image from "next/image";
import { NoticeSection } from "../../../styles/mainpage/noticeSection";
import useScrollCount from "../../../hooks/useScrollCount";

const NoticeBoard = () => {
  return (
    <NoticeSection uri={"/images/bgbg.jpeg"}>
      <div className="img">
        <Image
          src={"/images/danthe.png"}
          alt="danthe"
          width={249}
          height={214}
        />
      </div>
      <h1>Danthe</h1>
      <div className="status">
        <div className="st">
          <div className="item">
            <div className="in">
              <h1 {...useScrollCount(17, 1, 1000)} />
              <span>개</span>
            </div>
          </div>
          <p>등록 작품</p>
        </div>
        <div className="st">
          <div className="item">
            <div className="in">
              <h1 {...useScrollCount(12, 1, 1000)} />
              <span>개</span>
            </div>
          </div>
          <p>유저</p>
        </div>
        <div className="st">
          <div className="item">
            <div className="in">
              <h1 {...useScrollCount(48, 1, 1000)} />
              <span>개</span>
            </div>
          </div>
          <p>등록 영상</p>
        </div>
      </div>
    </NoticeSection>
  );
};

export default NoticeBoard;
