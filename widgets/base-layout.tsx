import type { CSSProperties } from "react";
import React, { FunctionComponent } from "react";

interface BaseLayout {
	children: JSX.Element[] | JSX.Element;
	style?: CSSProperties;
}

export const BaseLayout: FunctionComponent<BaseLayout> = ({
	children,
	style = { height: "100vh" },
}) => {
	return (
		<div className="container pt-1 pb-3" style={style}>
			{children}
		</div>
	);
};
