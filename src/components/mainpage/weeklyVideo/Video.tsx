import {
  StyledVideoCard,
  VideoBox,
} from "../../../styles/mainpage/weeklyVideoSection";

export interface VideoType {
  day?: string;
  videoByDay: any[];
}

const Video = ({ day, videoByDay }: VideoType) => {
  return (
    <VideoBox>
      {videoByDay.map(
        (list) =>
          day === list.dayOfWeek && (
            <StyledVideoCard key={list.workId} imgUri={list.thumbnailImg}>
              <div className="cardImage"></div>
              <h1 className="cardTitle">{list.title}</h1>
            </StyledVideoCard>
          )
      )}
    </VideoBox>
  );
};

export default Video;
