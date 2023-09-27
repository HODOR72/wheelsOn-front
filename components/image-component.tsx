import React, { FunctionComponent } from "react";
import { Image } from "mui-image";
interface defaultPath {
  src: string;
}

interface src {
  default: defaultPath;
}

interface ImageComponent {
  src: src;
  width: number;
  height: number;
  showLoading?: boolean;
  objectFit?: "initial" | "cover" | "contain";
  alt?: string;
  style?: any;
  borderRadius?: number | string;
  margin?: string;
  boxShadow?: string;
}

export const ImageComponent: FunctionComponent<ImageComponent> = ({
  src,
  width,
  height,
  alt = "",
  objectFit = "initial",
  showLoading = false,
  borderRadius = 0,
  margin = "initial",
  boxShadow = "initial",
}) => {
  return (
    <div>
      <Image
        duration={100}
        src={src.default.src}
        width={width}
        style={{
          borderRadius,
          objectFit,
          margin,
          boxShadow,
        }}
        height={height}
        alt={alt}
        showLoading={showLoading}
      ></Image>
    </div>
  );
};
