import { ListItem, ListItemButton } from "@mui/material";
import React, { FunctionComponent } from "react";
import { SingleBorderWidget } from "../widgets/single-border-widget";

interface TestListItem {
  symbol: string | number;
  text: string;
  state: "active" | "passive";
  setVariant(symbol: string | number): any;
}

export const TestListItem: FunctionComponent<TestListItem> = ({
  symbol,
  text,
  state = "passive",
  setVariant,
}) => {
  const setClass = (): string => {
    switch (state) {
      case "active":
        return "test-list-item-active";
      case "passive":
        return "test-list-item-passive";
    }
  };

  const className = setClass();

  return (
    <ListItem
      sx={{
        padding: "3px",
        borderRadius: "4px",
        marginBottom: "0.9em",
      }}
      onClick={(e) => setVariant(symbol)}
    >
      <SingleBorderWidget>
        <ListItemButton className={`${className} test-list-item`}>
          <span>{symbol}</span> <span style={{ fontSize: "13px" }}>{text}</span>
        </ListItemButton>
      </SingleBorderWidget>
    </ListItem>
  );
};
