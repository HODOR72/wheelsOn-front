import React, { FunctionComponent } from "react";
import { TextComponent } from "../components/text-component";
import Image from "next/image";

interface OsagoHeader {
  children: string;
}

export const OsagoHeader: FunctionComponent<OsagoHeader> = ({ children }) => {
  return (
    <div className="d-flex">
      <Image
        src={require("assets/img/osago-header-icon.svg")}
        alt={"arrow"}
        width={8}
        height={10}
      ></Image>
      <div className="ms-2"></div>
      <TextComponent textTransform="initial" fontSize={18} fontWeight={500}>
        {children}
      </TextComponent>
    </div>
  );
};
