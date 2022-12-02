import styled from "@emotion/styled";

export const SearchSection = styled.section`
  margin-top: 100px;
  width: 1200px;
  margin: 100px auto 0px;
  min-height: 500px;
  position: relative;
  .title {
    font-size: 24px;
    margin-bottom: 80px;
    span {
      font-size: 48px;
      font-weight: bold;
    }
  }
  .content {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
  }
`;

export const SearchVideoCard = styled.div<{ imgUri: string }>`
  width: 204.8px;
  height: 153.6px;

  .cardImg {
    width: 100%;
    cursor: pointer;
    height: 140px;
    border-radius: 10px;
    margin-bottom: 17px;
    background-size: cover;
    background-image: url(${(props) => props.imgUri});
  }
  .cardTitle {
    text-align: center;
  }
`;
