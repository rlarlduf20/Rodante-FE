import styled from "@emotion/styled";

export const NoticeSection = styled.section`
  width: 100vw;
  height: 42vw;
`;

export const NoticeBoardBox = styled.div<{ background: string }>`
  width: 100vw;
  height: 42vw;
  background: ${(props) => props.background};
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
