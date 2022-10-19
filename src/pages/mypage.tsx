import MyPageMain from "../components/mypage";
import { MyPageBg } from "../styles/mypage/mypageBox";
const MyPage = () => {
  return (
    <MyPageBg>
      <MyPageMain />
    </MyPageBg>
  );
};

export default MyPage;
