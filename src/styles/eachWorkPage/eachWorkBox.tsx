import styled from "@emotion/styled";

export const EachWorkContainer = styled.section`
  width: 1124px;
  margin: 100px auto;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 8px 11px 15px rgba(0, 0, 0, 0.25);
  .addCircle {
    background-color: black;
    color: white;
    width: 50px;
    margin: 30px auto 0;
    height: 50px;
    cursor: pointer;
    text-align: center;
    line-height: 50px;
    font-size: 28px;
    font-weight: 700;
    border-radius: 50%;
  }
`;

export const TitleBox = styled.div<{ url: string }>`
  height: 280px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  .infoBox {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    .title {
      font-size: 48px;
      font-weight: 500;
    }
    .content {
      font-size: 20px;
      color: #cecaca;
    }
  }
  .thumbnail {
    width: 256px;
    height: 192px;
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-position: center;
  }
`;

export const VideoBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  .videoItem {
    cursor: pointer;
    padding: 20px 0;
    border-right: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 23px;
    .title {
      flex-grow: 1;
      font-size: 18px;
    }
    .date {
      font-size: 18px;
      color: #c4c4c4;
    }
  }
`;
