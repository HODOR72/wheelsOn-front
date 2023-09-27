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
		<Accordion>
			<AccordionSummary
				expandIcon={
					<KeyboardArrowUpIcon sx={{ color: "#9f6bc9" }}></KeyboardArrowUpIcon>
				}
			>
				<TextComponent textTransform="initial">{top}</TextComponent>
			</AccordionSummary>
			<AccordionDetails>
				<TextComponent textTransform="initial">{bottom}</TextComponent>
			</AccordionDetails>
		</Accordion>
	)
};
