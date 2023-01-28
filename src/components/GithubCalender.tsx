import Calendar from "react-github-calendar";

export default function GithubCalender() {
  return (
    <div className="github__calender__wapper">
      <Calendar
        username="mehfoozurrehman"
        color="#64ffda"
        showWeekdayLabels
        fontSize={14}
        year={new Date().getFullYear()}
        style={{
          color: "white",
          margin: "0 2em",
          marginBottom: "3em",
          marginTop: "-3em",
          padding: "2em",
        }}
        blockSize={16}
      />
    </div>
  );
}
