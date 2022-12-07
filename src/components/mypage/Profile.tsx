import { MyPageProp } from ".";
import { ProfileBox } from "../../styles/mypage/mypageBox";

const Profile = ({ myInfo }: MyPageProp) => {
  return (
    <ProfileBox img={myInfo.img}>
      <h1 className="title">프로필 정보</h1>
      <div className="image"></div>
      <p className="nickname">{myInfo.name}</p>
      <button className="btn">프로필 관리</button>
    </ProfileBox>
  );
};

export default Profile;
