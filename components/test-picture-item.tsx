import React, { FunctionComponent } from "react";
import { ImageComponent } from "../components/image-component";

interface TestPictureItem {
  symbol: string | number;
  src: any;
  state: "active" | "passive";
  setValue(symbol: string | number): any;
}

export const TestPictureItem: FunctionComponent<TestPictureItem> = ({
  symbol,
  src,
  state = "passive",
  setValue,
}) => {
  const setStyle = () => {
    switch (state) {
      case "active":
        return { border: "3px solid red" };
      case "passive":
        return {
          border: "3px solid rgba(217, 217, 217, 0.31)",
        };
    }
  };

  const style = setStyle();

  return (
    <div
      style={{
        width: 155,
        height: 155,
        marginBottom: "1em",
        position: "relative",
        borderRadius: "16px",
        overflow: "hidden",
        boxSizing: "border-box",
        transition: ".3s ease",
        boxShadow: "inset 0px 0px 8px rgba(0, 0, 0, 0.39)",
        ...style,
      }}
      onClick={(e) => setValue(symbol)}
    >
      <div style={{ position: "absolute", left: -12.5, top: -12.5 }}>
        <ImageComponent
          src={src}
          width={180}
          height={180}
          showLoading
          alt={"none"}
          objectFit="cover"
        ></ImageComponent>
      </div>
    </div>
  );
};
