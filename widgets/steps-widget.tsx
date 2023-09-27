import React, { FunctionComponent } from "react";
import { StepComponent } from "../components/step-component";

interface StepsWidgets {
  step: number;
}

type level = "past" | "present" | "future";

export const StepsWidgets: FunctionComponent<StepsWidgets> = ({ step }) => {
  let firstStepLevet: level, secondStepLevel: level, thirdStepLevel: level;

  switch (step) {
    case 1:
      firstStepLevet = "present";
      secondStepLevel = "future";
      thirdStepLevel = "future";
      break;

    case 2:
      firstStepLevet = "past";
      secondStepLevel = "present";
      thirdStepLevel = "future";
      break;

    case 3:
      firstStepLevet = "past";
      secondStepLevel = "past";
      thirdStepLevel = "present";
      break;

    default:
      firstStepLevet = "future";
      secondStepLevel = "future";
      thirdStepLevel = "future";
      break;
  }

  return (
    <div
      style={{
        background: "#F1F1F1",
        boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.2)",
        paddingTop: 12,
        paddingLeft: 17,
        paddingRight: 17,
        marginLeft: "-15px",
        width: "calc(100% + 30px)",
      }}
      className="d-flex justify-content-between"
    >
      <StepComponent
        arrowed={true}
        level={firstStepLevet}
        label="Автомобиль"
        classes="justify-content-start"
        arrowClasses="first-arrow"
      ></StepComponent>
      <StepComponent
        arrowed={true}
        level={secondStepLevel}
        label="Водитель"
        classes="justify-content-end"
        arrowClasses="second-arrow"
      ></StepComponent>
      <StepComponent
        arrowed={false}
        level={thirdStepLevel}
        label="Расчет"
        classes="justify-content-end"
      ></StepComponent>
    </div>
  );
};
