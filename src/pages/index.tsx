import NoticeBoard from "../components/mainpage/noticeboard";
import VideoSection from "../components/mainpage/weeklyVideo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const HomePage = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<
    string | string[] | undefined
  >();
  useEffect(() => {
    setAccessToken(router.query.accessToken);
  }, []);

  return (
    <>
      <NoticeBoard access_token={accessToken} />
      <VideoSection />
    </>
  );
};

export default HomePage;
