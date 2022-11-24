import React from "react";
import {Button, ButtonProps} from "@mui/material";

interface IDefaultButton extends ButtonProps {
  visible?: boolean;
  cursor?: "pointer" | "auto";
}
const DefaultButton: React.FC<IDefaultButton> = ({
  children,
  visible = true,
  style,
  cursor = "pointer",
  ...muiProps
}) => {
  return visible ? (
    <Button style={{ cursor: cursor, ...style }} {...muiProps}>{children}</Button>
  ) : (
    <></>
  );
};

export default DefaultButton;
