import NoticeBoard from "../components/mainpage/noticeboard";
import VideoSection from "../components/mainpage/weeklyVideo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const HomePage = () => {
  return (
    <>
      <NoticeBoard />
      <VideoSection />
    </>
  );
};

export default HomePage;
