import { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "python", xp: 1.8 },
      { id: 1, value: "python", xp: 2 },
      { id: 1, value: "python", xp: 0.7 },
      { id: 1, value: "python", xp: 0.4 },
    ],
    frameworks: [
      { id: 1, value: "python", xp: 1.4 },
      { id: 1, value: "python", xp: 2 },
      { id: 1, value: "python", xp: 1.5 },
      { id: 1, value: "python", xp: 0.5 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="framework & bibliotheque"
          className="framworkDisplay"
        />
      </div>
    );
  }
}
export default Languages;
