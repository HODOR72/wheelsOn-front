import React, { FunctionComponent } from "react";
import { TextComponent } from "./text-component";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ImageComponent } from "../components/image-component";

interface StepComponent {
  level: "past" | "present" | "future";
  label: string;
  arrowed: boolean;
  classes?: string;
  arrowClasses?: string;
}

export const StepComponent: FunctionComponent<StepComponent> = ({
  level,
  label,
  arrowed,
  classes = "",
  arrowClasses = "",
}) => {
  const setClass = () => {
    switch (level) {
      case "past": {
        return "step-component-red step-component-red-blur";
      }
      case "present": {
        return "step-component-red";
      }
      case "future": {
        return "step-component-gray";
      }
    }
  };

  const stepClass = setClass();

  return (
    <div
      className={`${stepClass} step-component ${classes}`}
      style={{ width: "33.3%" }}
    >
      <TextComponent>
        {level === "past" ? (
          <CheckCircleOutlineIcon
            sx={{ width: 14, height: 14, marginRight: 0.3, color: "#D2343E" }}
          ></CheckCircleOutlineIcon>
        ) : (
          ""
        )}
        <span style={{ textTransform: "uppercase", fontSize: 12 }}>
          {label}
        </span>
        {level === "present" ? (
          <span className="red-line" style={{ marginTop: 5 }}></span>
        ) : (
          <span className="fake-line" style={{ marginTop: 5 }}></span>
        )}
        {arrowed ? (
          <span className={`next-step-arrow ${arrowClasses}`}>
            <ImageComponent
              src={
                level === "present" || level === "past"
                  ? require("assets/img/next-step-arrow-red.svg")
                  : require("assets/img/next-step-arrow-gray.svg")
              }
              width={27}
              height={9}
              alt={"arrow"}
            ></ImageComponent>
          </span>
        ) : (
          ""
        )}
      </TextComponent>
    </div>
  );
};
