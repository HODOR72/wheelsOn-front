import React, { FunctionComponent } from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import { TextComponent } from "../components/text-component";
import { useRouter } from "next/router";
interface MenuCell {
  src: any;
  alt: string;
  href: string;
  label: string;
  soon?: boolean;
  alignItems?: string;
  width?: number | string;
  height?: number | string;
  flexDirection?: string;
  imgSize?: number;
  background?: string;
  justifyContent?: string;
  textMargin?: string;
  underText?: string;
  textFontSize?: number;
  labelFontSize?: number;
}

export const MenuCell: FunctionComponent<MenuCell> = ({
  href,
  src,
  alt,
  label,
  background,
  underText,
  alignItems,
  textFontSize = 12,
  soon = false,
  width = 130,
  height = 130,
  flexDirection = "column",
  imgSize = 60,
  justifyContent = "flex-start",
  textMargin = "0",
  labelFontSize = 14,
}) => {
  const router = useRouter();
  const goToLink = () => {
    router.push(href);
  };

  return (
    <Button
      classes={{ root: "no-hover-menu-button" }}
      sx={{
        display: "flex",
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        background: background,
        alignItems: alignItems,
        borderRadius: "10px",
        boxShadow: "0px 5px 24px rgba(65, 65, 65, 0.1)",
        position: "relative",
        width: width,
        height: height,
        marginBottom: "8px",
        marginLeft: "4px",
        marginRight: "4px",
      }}
      onClick={goToLink}
    >
      {soon ? (
        <div style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}>
          <Image
            src={require("../assets/img/soon.svg")}
            width={imgSize}
            height={imgSize}
            alt={"soon"}
          >
          </Image>
        </div>
      ) : (
        ""
      )}

      <div className="cell-image">
        <Image src={src} alt={alt} width={imgSize} height={imgSize}></Image>
      </div>
      <TextComponent
        margin={textMargin}
        fontSize={labelFontSize}
        color="#fff"
        textAlign={alignItems}
      >
        {label}
      </TextComponent>
      {underText ? (
        <TextComponent
          margin={textMargin}
          fontSize={textFontSize}
          color="#fff"
          textAlign={alignItems}
        >
          {underText}
        </TextComponent>
      ) : null}
    </Button>
  );
};
