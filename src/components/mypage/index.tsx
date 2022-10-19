import Profile from "./Profile";
import Locker from "./locker";
import { MyPageBox } from "../../styles/mypage/mypageBox";

const dummyUser = {
  nickname: "kiyeol",
  imgUri:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6sSAcCACKiAbuWwyTs1R2do77_W6ii51vW7OSP47gYOMdEw-UcYPjwsMHPKomZu6TL4&usqp=CAU",
};
const MyPageMain = () => {
  return (
    <>
      <MyPageBox>
        <Profile dummyUser={dummyUser} />
        <Locker />
      </MyPageBox>
    </>
  );
};

export default MyPageMain;
