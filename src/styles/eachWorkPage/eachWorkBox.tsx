import styled from "@emotion/styled";

export const EachWorkContainer = styled.section`
  width: 1124px;
  margin: 100px auto;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 8px 11px 15px rgba(0, 0, 0, 0.25);
  .noVideoText {
    margin-top: 130px;
    margin-bottom: 100px;
    color: #81a1e1;
    font-size: 48px;
    text-align: center;
  }
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
  position: relative;
  .jjim {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
  }
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
      width: 400px;
      text-align: end;
    }
    .inputTitle {
      padding: 5px 0 5px 5px;
      outline: none;
      border: none;
      border-bottom: 2px solid #999;
      border-radius: 5px;
      color: #888;
    }
    .inputDes {
      padding: 5px;
      height: 100px;
      outline: none;
      border: none;
      border-bottom: 2px solid #999;
      border-radius: 5px;
      color: #888;
    }
    .inputDOW,
    .inputGenre {
      padding: 2px;
      color: #888;
      outline: none;
      border: none;
      border-bottom: 2px solid #999;
      border-radius: 5px;
    }
  }
  .edit_text {
    position: absolute;
    top: 150px;
    left: 280px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transition: 0.2s;
      transform: scale(1.2);
    }
  }
  .confirm {
    position: absolute;
    top: 150px;
    left: 280px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transition: 0.2s;
      transform: scale(1.2);
    }
  }
  .cancel {
    position: absolute;
    top: 150px;
    left: 240px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transition: 0.2s;
      transform: scale(1.2);
    }
  }
  .del {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transition: 0.2s;
      transform: scale(1.2);
    }
  }
  .thumbnail {
    width: 256px;
    height: 192px;
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
  }
  .file {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 200px;
    right: 60px;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;
    .fileImg {
      display: none;
    }
  }
  .edit {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 200px;
    right: 10px;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;
  }
`;

export const VideoBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const VideoList = styled.div<{ uri: string }>`
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
  .cover {
    background-image: url(${(props) => props.uri});
    width: 170.6px;
    height: 128px;
    background-position: center;
    background-size: cover;
    border-radius: 5px;
    overflow: hidden;
    .blur {
      background-color: black;
      opacity: 0.6;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .title {
    /* flex-grow: 1; */
    margin-right: -13px;
    font-size: 18px;
  }
`;
