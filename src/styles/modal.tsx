import styled from "@emotion/styled";

export const ModalBox = styled.div`
  width: 800px;
  height: 200px;
  background-color: white;
  outline: none;
  padding: 40px;
  position: absolute;
  margin-left: -400px;
  margin-top: -100px;
  top: 50vh;
  left: 50vw;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 30px;
  input {
    outline: none;
    border: none;
  }
  .titleInput {
    border-bottom: 1px solid #c4c4c4;
    padding: 10px 0 10px 10px;
    width: 200px;
  }
  .btn {
    background-color: black;
    color: white;
    padding: 10px 50px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const VideoModalBox = styled.div`
  width: 1000px;
  height: 700px;
  background-color: white;
  outline: none;
  position: absolute;
  margin-left: -500px;
  margin-top: -350px;
  top: 50vh;
  left: 50vw;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .back {
    position: absolute;
    top: 30px;
    right: 20px;
    cursor: pointer;
  }
`;
