import { VideoRegiFormBox } from "../../styles/videoRegipage/videoRegiBox";

const VideoRegiForm = () => {
  return (
    <VideoRegiFormBox>
      <div className="title">
        <p>작품 제목</p>
        <input placeholder="제목" className="titleInput" />
      </div>
      <div className="genre">
        <p>장르</p>
        <label>
          <input type="radio" name="genre" value="comedy" className="radio" />
          코미디
        </label>
        <label>
          <input type="radio" name="genre" value="mood" className="radio" />
          감성
        </label>
        <label>
          <input type="radio" name="genre" value="romance" className="radio" />
          로맨스
        </label>
      </div>
      <div className="description">
        <p>작품 설명</p>
        <textarea placeholder="설명" className="desInput" />
      </div>
      <div className="thumbnail">
        <p>썸네일 이미지</p>
        <input type="file" accept="image/png, image/jpeg" />
      </div>
      <div className="btn">
        <button className="regiBtn">등록하기</button>
      </div>
    </VideoRegiFormBox>
  );
};

export default VideoRegiForm;
