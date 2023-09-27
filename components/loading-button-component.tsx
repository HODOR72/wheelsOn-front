import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";
import { LoadingButton } from '@mui/lab';
import { CircularProgress } from "@mui/material";

interface LoadingButtonComponent {
  className?: string;
  children: string;
  height?: number;
  href?: string;
  disabled?: boolean;
  borderRadius?: string;
  loading: boolean;
  onClick?(): any;
}

export const LoadingButtonComponent: FunctionComponent<LoadingButtonComponent> = ({
  className = "button-component-red",
  children,
  height = 44,
  href = "",
  disabled = false,
  borderRadius = "14px",
  loading,
  onClick,
}) => {
  const router = useRouter();
  const goToLink = () => {
    router.push(href);
  };

  return (
    <LoadingButton loading={loading} sx={{
      width: "100%",
      height: height,
      borderRadius: borderRadius,
    }}
      className={className}
      disabled={disabled}
      onClick={href === "" ? onClick : goToLink}
      loadingIndicator={<CircularProgress color="secondary" size={16} />}
    >
      {!loading ? children : ''}
    </LoadingButton>
  );
};
