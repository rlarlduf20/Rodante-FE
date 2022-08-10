import {
  WeeklyButtonContainer,
  StyledLabel,
  StyledRadio,
} from "../../../styles/mainpage/weeklyVideoSection";

interface WeeklyButtonType {
  day: string;
  setDay: (d: string) => void;
}

const WeeklyButton = ({ day, setDay }: WeeklyButtonType) => {
  return (
    <WeeklyButtonContainer>
      <div className="monBox">
        <StyledRadio
          onChange={(e) => setDay(e.target.value)}
          name="weeklybtn"
          id="mon"
          type="radio"
          value="mon"
          checked={day === "mon" ? true : false}
        />
        <StyledLabel htmlFor="mon">월</StyledLabel>
      </div>
      <div className="tueBox">
        <StyledRadio
          onChange={(e) => setDay(e.target.value)}
          name="weeklybtn"
          id="tue"
          type="radio"
          value="tue"
        />
        <StyledLabel htmlFor="tue">화</StyledLabel>
      </div>
      <div className="wedBox">
        <StyledRadio
          onChange={(e) => setDay(e.target.value)}
          name="weeklybtn"
          id="wed"
          type="radio"
          value="wed"
        />
        <StyledLabel htmlFor="wed">수</StyledLabel>
      </div>
      <div className="thuBox">
        <StyledRadio
          onChange={(e) => setDay(e.target.value)}
          name="weeklybtn"
          id="thu"
          type="radio"
          value="thu"
        />
        <StyledLabel htmlFor="thu">목</StyledLabel>
      </div>
      <div className="friBox">
        <StyledRadio
          onChange={(e) => setDay(e.target.value)}
          name="weeklybtn"
          id="fri"
          type="radio"
          value="fri"
        />
        <StyledLabel htmlFor="fri">금</StyledLabel>
      </div>
      <div className="satBox">
        <StyledRadio
          onChange={(e) => setDay(e.target.value)}
          name="weeklybtn"
          id="sat"
          type="radio"
          value="sat"
        />
        <StyledLabel htmlFor="sat">토</StyledLabel>
      </div>
      <div className="sunBox">
        <StyledRadio
          onChange={(e) => setDay(e.target.value)}
          name="weeklybtn"
          id="sun"
          type="radio"
          value="sun"
        />
        <StyledLabel htmlFor="sun">일</StyledLabel>
      </div>
    </WeeklyButtonContainer>
  );
};

export default WeeklyButton;
