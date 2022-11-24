import React from "react";
import DefaultButton from "../../../components/DefaultButton";
// import { Link } from "react-router-dom";
type LoginIconType = {
  labelButtonColor: string;
  backgroundButtonColor: string;
};
const LoginButton = ({
  labelButtonColor,
  backgroundButtonColor,
}: LoginIconType) => {
  return (
    <DefaultButton
      variant={"outlined"}
      onMouseOver={() => console.log("entrou")}
      onClick={() => console.log("entrou")}
      style={{
        position: "absolute",
        right: "3vw",
        top: "3vh",
        color: labelButtonColor,
        backgroundColor: backgroundButtonColor,
      }}
    >
      Login
    </DefaultButton>
  );
};

export default LoginButton;
