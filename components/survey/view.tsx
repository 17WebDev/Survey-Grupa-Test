import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";

function View() {
  let json = {
    questions: [
      {
        type: "checkbox",
        name: "car",
        title: "Where do you find resources when searching through the internet? ",
        isRequired: true,
        hasSelectAll: true,
        hasNone: true,
        noneText: "None of the above",
        colCount: 4,
        choicesOrder: "asc",
        choices: [
          "Reddit",
          "Stackoverflow",
          "Github",
          "Medium",
          "Other",
        ]
      }
    ]
  };
  var surveyRender = <Survey.Survey json={json} />;
  return (
    <div>
      <h1>Survey Example</h1>
      <h2>Checkbox - none of the above and select all</h2>
      {surveyRender}
    </div>
  );
}


export default View;
