import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./style.css";
import MenuMobile from "./MenuMobile";
import Colors from "../../../theme/colors/Colors";

const Navigation = () => {
  const smallScreen = useMediaQuery("(max-width:595px)");
  const navigationOptions = [
    { label: "Inicio", routeToNavigate: "/" },
    { label: "Produtos", routeToNavigate: "produtos" },
    { label: "Fale Conosco", routeToNavigate: "faleConosco" },
  ];

  return smallScreen ? (
    <MenuMobile navigationOptions={navigationOptions} />
  ) : (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="navigation-container"
    >
      {navigationOptions.map((item, index) => (
        <Link key={index.toString()} to={item.routeToNavigate}>
          {item.label}
        </Link>
      ))}
    </motion.nav>
  );
};
export default Navigation;
