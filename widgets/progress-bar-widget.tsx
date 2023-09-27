import React, { FunctionComponent } from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface ProgressBarWidget {
  value: number;
}

export const ProgressBarWidget: FunctionComponent<ProgressBarWidget> = ({
  value,
}) => {
  const leftStep = value < 100 ? 8 : 10;
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1, position: "relative" }}>
        {value >= 10 ? (
          <Typography
            sx={{
              position: "absolute",
              zIndex: 3,
              height: "15px",
              fontSize: "10px",
              color: "#fff",
              transition: "left .4s linear",
              left: String(Number(value) - leftStep) + "%",
            }}
          >
            {value}%
          </Typography>
        ) : (
          ""
        )}

        <LinearProgress
          classes={{ bar: "border-radius-15" }}
          sx={{ height: 15, borderRadius: 15 }}
          variant="determinate"
          value={value}
        />
      </Box>
    </Box>
  );
};
