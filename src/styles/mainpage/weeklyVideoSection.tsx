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
`;

export const WeeklyButtonContainer = styled.div`
  margin-top: 55px;
`;

export const StyledLabel = styled.label`
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
`;

export const StyledVideoCard = styled.div<{ imgUri: string }>`
  width: 360px;
  height: 277px;
  .cardImage {
    width: 100%;
    height: 240px;
    border: 1px solid black;
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