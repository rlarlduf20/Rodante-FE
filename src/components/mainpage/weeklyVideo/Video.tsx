import Link from "next/link";
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
            <StyledVideoCard key={list.workId} imgUri={list.coverImg}>
              <Link href={`/eachWork/${list.workId}`}>
                <div className="cardImage"></div>
              </Link>
              <h1 className="cardTitle">{list.title}</h1>
            </StyledVideoCard>
          )
      )}
    </VideoBox>
  );
};

export default Video;
