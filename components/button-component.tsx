import React, { FunctionComponent } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

interface ButtonComponent {
	className?: string;
	children: string;
	height?: number;
	href?: string;
	disabled?: boolean;
	borderRadius?: string;
	onClick?(): any;
}

export const ButtonComponent: FunctionComponent<ButtonComponent> = ({
	className = "button-component-red buttonMake",
	children,
	height = 44,
	href = "",
	disabled = false,
	borderRadius = "14px",
	onClick,
}) => {
	const router = useRouter();
	const goToLink = () => {
		router.push(href);
	};

	return (
		<Button
			sx={{
				width: "100%",
				height: height,
				borderRadius: borderRadius,
			}}
			classes={{ disabled: "button-component-disabled" }}
			className={className}
			disabled={disabled}
			onClick={href === "" ? onClick : goToLink}
		>
			{children}
		</Button>
	);
};
