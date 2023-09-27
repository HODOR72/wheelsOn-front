import React, { FunctionComponent } from "react"

interface BaseLayout {
	children: JSX.Element[] | JSX.Element
}

export const BaseLayout: FunctionComponent<BaseLayout> = ({ children }) => {
	return (
		<div className="container pt-1 pb-3" style={{ height: "100vh" }}>
			{children}
		</div>
	)
}
