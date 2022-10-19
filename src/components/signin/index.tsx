import {
  SignInContainer,
  StyledSignInBox,
} from "../../styles/signinpage/signInBox";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  return (
    <SignInContainer>
      <StyledSignInBox>
        <h1 className="title">
          <Link href="/">Rodante</Link>
        </h1>
        <p className="content">내가 찾던 웹드라마들이 한 곳에</p>
        <div className="googleBtn">
          <div className="innerBtn">
            <Image
              src="/images/google-logo.png"
              width={34.74}
              height={35}
            ></Image>
            <span>구글로 로그인하기</span>
          </div>
        </div>
        <div>
          {/* <Image
            src="/images/kakao_login_medium_wide.png"
            width={} height={}
          /> */}
        </div>
      </StyledSignInBox>
    </SignInContainer>
  );
};

export default SignIn;
