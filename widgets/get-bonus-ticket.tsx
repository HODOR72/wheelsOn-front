import React, { FunctionComponent } from "react";
import { TextComponent } from "../components/text-component";
import Box from "@mui/material/Box";
import { ImageComponent } from "../components/image-component";

interface GetBonusTicket {
  topLabel: string;
  bottomLabel: string;
}

export const GetBonusTicket: FunctionComponent<GetBonusTicket> = ({
  topLabel,
  bottomLabel,
}) => {
  return (
    <Box
      sx={{
        width: 320,
        height: 110,
        position: "relative",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <ImageComponent
          width={320}
          height={110}
          showLoading
          src={require("assets/img/get-bonus-ticket.png")}
          alt="ticket"
          boxShadow="0px 10px 24px rgba(33, 33, 33, 0.15)"
        ></ImageComponent>
      </Box>
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <TextComponent fontSize={14} color={"#696969"} textAlign="center">
          {topLabel}
        </TextComponent>
        <TextComponent fontSize={32} fontWeight={700} color={"#E61926"}>
          {bottomLabel}
        </TextComponent>
      </Box>
    </Box>
  );
};
