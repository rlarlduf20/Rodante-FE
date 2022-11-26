import Profile from "./Profile";
import Locker from "./locker";
import { MyPageBox } from "../../styles/mypage/mypageBox";

export interface MyPageProp {
  myInfo: any;
}
const MyPageMain = ({ myInfo }: MyPageProp) => {
  return (
    <>
      <MyPageBox>
        <Profile myInfo={myInfo} />
        <Locker myInfo={myInfo} />
      </MyPageBox>
    </>
  );
};

export default MyPageMain;
