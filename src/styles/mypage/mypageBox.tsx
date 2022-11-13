import styled from "@emotion/styled";

export const MyPageBg = styled.main`
  background-color: #fffffb;
  width: 100vw;
  margin-top: 84px;
  border-top: 1px solid #c4c4c4;
`;

export const MyPageBox = styled.section`
  width: 1192px;
  display: flex;
  gap: 30px;
  margin: 30px auto 30px;
`;

export const ProfileBox = styled.div<{ img: string }>`
  width: 380px;
  height: 640px;
  border: 1px solid #c4c4c4;
  padding: 44px 29px;
  background-color: white;
  .title {
    font-size: 24px;
  }
  .image {
    background-repeat: no-repeat;
    background-size: cover;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid black;
    margin: 30px auto 20px;
    background-image: url(${(props) => props.img});
  }
  .nickname {
    margin-bottom: 30px;
    text-align: center;
    font-size: 24px;
  }
  .btn {
    display: block;
    width: 100px;
    height: 30px;
    margin: 0 auto;
    background-color: white;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #e2e2e2;
      color: white;
      border: none;
    }
  }
  .membership {
    margin: 100px auto 0;
    width: 265px;
    padding: 21px 0;
    background-color: #f2ea9c;
    font-size: 32px;
    color: white;
    text-align: center;
    cursor: pointer;
  }
`;

export const LockerBox = styled.div<{ type: string }>`
  width: 792px;
  height: 819px;
  border: 1px solid #c4c4c4;
  background-color: white;
  padding: 40px 40px;
  .title {
    font-size: 36px;
    margin-bottom: 74px;
  }
  .typeRadio {
    display: flex;
    gap: 30px;
    width: 100%;
    padding-bottom: 25px;
    border-bottom: 1px solid #e5e5e5;
    .watchVideo {
      font-size: 24px;
      color: ${(props) => (props.type === "watch" ? "black" : "#d4d4d4")};
      cursor: pointer;
    }
    .uploadVideo {
      font-size: 24px;
      color: ${(props) => (props.type === "upload" ? "black" : "#d4d4d4")};
      cursor: pointer;
    }
  }
`;

export const WatchVideoBox = styled.div`
  padding: 40px 10px;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;
export const WatchVideoCard = styled.div<{ thumbnail: string }>`
  width: 320px;
  height: 245px;
  .thumbnail {
    width: 320px;
    height: 209px;
    background-image: url(${(props) => props.thumbnail});
    margin-bottom: 18px;
  }
  p {
    text-align: center;
    font-size: 20px;
  }
`;
export const UploadVideoBox = styled.div`
  padding: 40px 10px;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;

export const UploadVideoCard = styled.div<{ thumbnail: string }>`
  width: 320px;
  height: 245px;
  .thumbnail {
    width: 320px;
    height: 209px;
    background-image: url("/images/dog.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-bottom: 18px;
    cursor: pointer;
  }
  p {
    text-align: center;
    font-size: 20px;
  }
`;
