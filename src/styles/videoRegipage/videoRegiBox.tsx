import styled from "@emotion/styled";

export const VideoRegiContainer = styled.section`
  width: 1111px;
  margin: 100px auto 50px;
  background: #f8f5f5;
`;

export const VideoRegiInner = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 auto;
`;

export const VideoRegiTitleBox = styled.div`
  padding: 40px 0 40px 0;
  .mainTitle {
    font-size: 24px;
  }
  .content {
    margin-top: 16px;
    width: 100%;
    height: 200px;
    background-color: white;
    border-radius: 43px;
    border: 1px solid #c4c4c4;
    padding: 37px 0 0 65px;
    h3 {
      font-size: 24px;
      margin-bottom: 16px;
    }
    p {
      font-size: 20px;
      line-height: 130%;
    }
  }
`;
export const VideoRegiFormBox = styled.form`
  p {
    font-size: 20px;
  }
  .title {
    display: flex;
    gap: 50px;
    align-items: center;
    margin-bottom: 38px;
    .titleInput {
      flex-grow: 1;
      padding: 10px 0 10px 10px;
      border: 1px solid #c4c4c4;
      border-radius: 4px;
      box-sizing: border-box;
      &:focus {
        outline: none;
        border: 1px solid #f2ea9c;
      }
    }
  }
  .genre {
    display: flex;
    align-items: center;
    margin-bottom: 38px;
    p {
      margin-right: 75px;
    }
    .radio {
      margin-left: 15px;
    }
  }
  .description {
    display: flex;
    gap: 50px;
    height: 130px;
    margin-bottom: 38px;
    .desInput {
      padding: 10px 0 0 10px;
      flex-grow: 1;
      resize: none;
      border: 1px solid #c4c4c4;
      border-radius: 4px;
      &:focus {
        outline: none;
        border: 1px solid #f2ea9c;
      }
    }
  }
  .dayOfWeek {
    display: flex;
    margin-bottom: 38px;
    gap: 88px;
    .daySelect {
      padding: 2px 20px 4px 4px;
      color: grey;
      border-color: #c4c4c4;
      outline: none;
      border-radius: 4px;
    }
  }
  .thumbnail {
    display: flex;
    margin-bottom: 38px;
    p {
      margin-right: 20px;
    }

    .imgBox {
      width: 256px;
      height: 192px;
      border: 1px solid #c4c4c4;
      background: white;
      overflow: hidden;
      border-radius: 4px;
    }
  }
  .btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .regiBtn {
      border: none;
      color: white;
      background: #f2ea9c;
      padding: 20px 40px;
      border-radius: 30px;
      cursor: pointer;
      margin-bottom: 40px;
      &:hover {
        background: #fff259;
      }
    }
  }
`;
