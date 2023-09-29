import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React, { FunctionComponent } from "react";
import { TextComponent } from "./text-component";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
interface AccordionComponent {
	top: string;
	bottom: string;
}

export const AccordionComponent: FunctionComponent<AccordionComponent> = ({
	top,
	bottom,
}) => {
	return (
		<Accordion sx={{ background: "#33363F", borderRadius: "10px", }}>
			<AccordionSummary
				expandIcon={
					<KeyboardArrowUpIcon sx={{ color: "#7DF17B" }}></KeyboardArrowUpIcon>
				}
			>
				<TextComponent color="#fff" textTransform="initial">{top}</TextComponent>
			</AccordionSummary>
			<AccordionDetails>
				<TextComponent color="#fff" textTransform="initial">{bottom}</TextComponent>
			</AccordionDetails>
		</Accordion>
	)
};
