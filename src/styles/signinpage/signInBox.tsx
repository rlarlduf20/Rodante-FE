import styled from "@emotion/styled";

export const SignInContainer = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: #f2ea9c;
  display: flex;
  align-items: center;
`;

export const StyledSignInBox = styled.div`
  width: 435px;
  height: 630px;
  margin: 0 auto;
  background-color: white;
  border-radius: 55px;
  box-shadow: 8px 11px 15px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-size: 58px;
    text-align: center;
  }
  .content {
    text-align: center;
    font-size: 18px;
    margin-bottom: 67px;
  }
  .googleBtn {
    cursor: pointer;
    width: 280px;
    height: 40px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 0 auto;
    background-color: white;
    padding-top: 20px;
    position: relative;
    &:hover {
      border: 2px solid purple;
    }
    .innerBtn {
      display: flex;
      font-size: 14px;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 60px;
      align-items: center;
      span {
        margin-left: 10px;
        margin-top: 5px;
      }
    }
  }
`;
