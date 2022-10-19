import { VideoRegiTitleBox } from "../../styles/videoRegipage/videoRegiBox";

const VideoRegiTitle = () => {
  return (
    <VideoRegiTitleBox>
      <div className="mainTitle">새 작품 등록</div>
      <div className="content">
        <h3>운영원칙</h3>
        <p>
          저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하는 게시물은
          <br />
          이용약관 및 관련법률에 의해 제재를 받으실 수 있습니다.
          <br />
          성인물, 폭력물 등의 게시물은 통보없이 삭제될 수 있습니다
        </p>
      </div>
    </VideoRegiTitleBox>
  );
};

export default VideoRegiTitle;
