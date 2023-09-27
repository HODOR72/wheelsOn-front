import React, { FunctionComponent } from "react";

interface DoubleBorderWidget {
  children: string | JSX.Element;
  disabled?: boolean;
  height?: number;
  padding?: number;
}

export const DoubleBorderWidget: FunctionComponent<DoubleBorderWidget> = ({
  children,
  disabled = false,
  height = 60,
  padding = 4,
}) => {
  return (
		<div
			style={{
				padding: padding,
				height: height,
				borderRadius: "16px",
				boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
				background: disabled
					? "linear-gradient(180deg, rgba(255,255,255,0.9335084375547094) 40%, rgba(221,197,192,1) 100%)"
					: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(221,197,192,1) 100%) ",
			}}
		>
			<div
				style={{
					borderRadius: "16px",
					padding: padding,
					height: height - 10,
					background: disabled
						? "linear-gradient(0deg, rgba(255,255,255,0.9335084375547094) 10%, rgba(159,107,201, 0.3)  100%)"
						: "linear-gradient(0deg, rgba(255,255,255,1) 0%,rgba(159,107,201, 1)  100%)",
				}}
			>
				{children}
			</div>
		</div>
	)
};
