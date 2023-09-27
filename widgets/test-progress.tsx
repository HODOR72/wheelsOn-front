import React, { FunctionComponent } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TestProgress {
  label: string;
  value: number;
}

export const TestProgress: FunctionComponent<TestProgress> = ({
  value,
  label,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        boxShadow: "inset 0px 2px 1px rgba(0, 0, 0, 0.15)",
        borderRadius: "50%",
      }}
    >
      <Box
        sx={{
          border: "6px solid #EBEBEB",
          borderRadius: "50%",
          width: 40,
          height: 40,
          position: "absolute",
          top: 0,
          left: 0,
          boxShadow: "inset 0px 2px 1px rgba(0, 0, 0, 0.15)",
        }}
      ></Box>
      <CircularProgress
        thickness={6}
        variant="determinate"
        value={value}
        style={{ zIndex: 4 }}
      ></CircularProgress>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          sx={{
            background: "#FFFFFF",
            boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.25)",
            borderRadius: "50%",
            width: 28,
            height: 28,
            color: "#E61926",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >{`${label}`}</Typography>
      </Box>
    </Box>
  );
};
