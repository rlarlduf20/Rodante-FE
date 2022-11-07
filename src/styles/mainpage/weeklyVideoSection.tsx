import styled from "@emotion/styled";

export const VideoContainer = styled.section`
  width: 100vw;
  min-height: 600px;
`;
export const VideoInnerContainer = styled.div`
  width: calc(100vw - 100px);
  height: 100%;
  margin: 0 auto;
  display: flex;
  gap: 177px;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 0;
  }
  margin-bottom: 100px;
`;

export const WeeklyButtonContainer = styled.div`
  margin-top: 55px;
  @media (max-width: 700px) {
    display: flex;
  }
`;

export const StyledLabel = styled.label`
  @media (max-width: 700px) {
    margin-right: 5px;
    width: 38px;
    height: 38px;
    font-size: 16px;
  }
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  color: #e2e2e2;
  height: 100%;
  cursor: pointer;
  height: 44px;
  background: #c4c4c4;
  margin-bottom: 16px;
  border-radius: 44px;
  color: white;
  width: 44px;
`;
export const StyledRadio = styled.input`
  display: none;

  &:checked + ${StyledLabel} {
    background-color: #f2ea9c;
  }
`;

export const VideoBox = styled.div`
  margin-top: 55px;
  max-width: calc(100vw - 271px);
  display: flex;
  @media (max-width: 1058px) {
    justify-content: center;
  }
  @media (max-width: 700px) {
    max-width: 100vw;
  }
  flex-wrap: wrap;
  gap: 18px;
`;

export const StyledVideoCard = styled.div<{ imgUri: any }>`
  width: 360px;
  height: 277px;
  @media (max-width: 700px) {
    width: 240px;
    height: 197px;
  }
  .cardImage {
    width: 100%;
    @media (max-width: 700px) {
      height: 160px;
    }
    height: 240px;
    border-radius: 20px;
    margin-bottom: 17px;
    background-size: cover;
    background-image: url(${(props) => props.imgUri});
  }
  .cardTitle {
    width: 100%;
    text-align: center;
    font-size: 18px;
  }
`;
