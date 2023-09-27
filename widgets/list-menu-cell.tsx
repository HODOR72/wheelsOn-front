import React, { useState, FunctionComponent } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ImageComponent } from "../components/image-component";
import { useRouter } from "next/router";

interface ListMenuCell {
  text: string;
  href: string;
  needAnimation?: boolean;
  needRotate?: boolean;
  src?: any;
  startLeft?: number;
  startTtransform?: string;
}

export const ListMenuCell: FunctionComponent<ListMenuCell> = ({
  text,
  href,
  needAnimation = false,
  needRotate = false,
  src = "",
  startLeft = 0,
  startTtransform = "rotate(0deg)",
}) => {
  const router = useRouter();
  const [leftPosition, setLeftPosition] = useState(startLeft);
  const [transform1, setTransform] = useState(startTtransform);

  const goToLink = () => {
    if (!needAnimation) {
      router.push(href);
      return;
    }

    if (needRotate) {
      setTransform("rotate(179deg)");
    }

    setLeftPosition(205);
    setTimeout(() => {
      router.push(href);
      return;
    }, 600);
  };

  return (
    <ListItem
      className="list-menu-item"
      sx={{
        borderRadius: "10px",
        padding: "10px 16px",
        boxShadow: "0px 10px 24px rgba(33, 33, 33, 0.15);",
        marginBottom: "10px",
        height: 60,
        position: "relative",
      }}
      onClick={goToLink}
    >
      <ListItemText
        sx={{ maxWidth: 250 }}
        primaryTypographyProps={{ sx: { fontSize: "16px" } }}
        primary={text}
      />
      {needAnimation ? (
        <div
          style={{
            height: 40,
            position: "absolute",
            left: leftPosition,
            transition: "0.5s linear",
            transform: transform1,
          }}
        >
          <ImageComponent
            width={40}
            height={40}
            src={src}
            alt="animImg"
          ></ImageComponent>
        </div>
      ) : (
        ""
      )}
    </ListItem>
  );
};
