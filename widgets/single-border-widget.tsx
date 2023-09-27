import React, { FunctionComponent } from "react";

interface SingleBorderWidget {
  children: string | JSX.Element;
}

export const SingleBorderWidget: FunctionComponent<SingleBorderWidget> = ({
  children,
}) => {
  return (
    <div
      style={{
        padding: "2px",
        borderRadius: "4px",
        boxShadow: " 0px 5px 24px rgba(65, 65, 65, 0.1)",
        filter: "drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25))",
        width: "100%",
        background:
          "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(178,178,178,1) 100%)",
      }}
    >
      {children}
    </div>
  );
};
