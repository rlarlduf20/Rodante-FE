import styled from "@emotion/styled";

export const NoticeSection = styled.section<{ uri: string }>`
  width: 100vw;
  height: 42vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => props.uri});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  gap: 10px;
  .img {
  }
  h1 {
    text-align: center;
  }
  .status {
    display: flex;
    gap: 15px;
    .st {
      text-align: center;
      .item {
        width: 95px;
        height: 95px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        background-color: #f2ea9c;
        justify-content: center;
        margin-bottom: 15px;
        .in {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background-color: white;
          .num {
            font-weight: 700;
            font-size: 20px;
          }
          span {
            color: #999;
          }
        }
      }
    }
  }
`;

export const NoticeBoardBox = styled.div<{
  imgUri: string;
}>`
  width: 100vw;
  height: 42vw;
  background-image: url(${(props) => props.imgUri});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const NoticeBoardInnerBox = styled.div`
  width: calc(100vw - 100px);
  position: relative;
  height: 100%;
  margin: 0 auto;
  .noticeBox {
    position: absolute;
    bottom: 10%;
    .notice_title {
      margin-bottom: 3%;
      font-size: 3vw;
      color: #a55941;
    }
    .notice_content {
      font-size: 2vw;
      margin-bottom: 3%;
      color: white;
    }
    .notice_button {
      display: inline-block;
      border: 2px solid #f2ea9c;
      border-radius: 10px;
      background: white;
      padding: 5px 10px 5px 10px;
      font-size: 1.8vw;
      cursor: pointer;
      margin-bottom: 4%;
      color: #c4c4c4;
      &:hover {
        color: white;
        background: #f2ea9c;
      }
    }
  }
`;
