import { useState, useEffect } from "react";
import MyPageMain from "../components/mypage";
import { MyPageBg } from "../styles/mypage/mypageBox";
import Loading from "../components/common/etc/Loading";
import axios from "axios";

const MyPage = () => {
  const [myInfo, setMyInfo] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const getMyInfo = async () => {
    const access = localStorage.getItem("access_token");
    try {
      const res = await axios.get("http://localhost:8080/user/me", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      setMyInfo(res.data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getMyInfo();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <MyPageBg>
          <MyPageMain myInfo={myInfo} />
        </MyPageBg>
      )}
    </>
  );
};

export default MyPage;
