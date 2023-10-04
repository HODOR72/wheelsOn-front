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
		<Accordion sx={{ background: "#33363F", borderRadius: "10px" }}>
			<AccordionSummary
				sx={{ height: "max-content" }}
				expandIcon={
					<KeyboardArrowUpIcon sx={{ color: "#7DF17B" }} style={{transform: 'rotate(180deg)'}}></KeyboardArrowUpIcon>
				}
			>
				<TextComponent color="#fff" textTransform="initial" fontSize={16} fontWeight={700}>{top}</TextComponent>
			</AccordionSummary>
			<AccordionDetails>
				<TextComponent color="#fff" textTransform="initial" fontSize={12} fontWeight={500}>{bottom}</TextComponent>
			</AccordionDetails>
		</Accordion>
	)
};
