import { ProfileBox } from "../../styles/mypage/mypageBox";

interface ProfileType {
  dummyUser: any;
}
const Profile = ({ dummyUser }: ProfileType) => {
  return (
    <ProfileBox imgUri={dummyUser.imgUri}>
      <h1 className="title">프로필 정보</h1>
      <div className="image"></div>
      <p className="nickname">{dummyUser.nickname}</p>
      <button className="btn">프로필 관리</button>
      <div className="membership">나의 멤버쉽</div>
    </ProfileBox>
  );
};

export default Profile;
