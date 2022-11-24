import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SwipeableDrawer } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./style.css";
import { useState } from "react";
const Navigation = () => {
  const smallScreen = useMediaQuery("(max-width:595px)");
  console.log(smallScreen);
  const navigationOptions = [
    { label: "Inicio", routeToNavigate: "/" },
    { label: "Produtos", routeToNavigate: "produtos" },
    { label: "Fale Conosco", routeToNavigate: "faleConosco" },
  ];
  const modalStatus = useState(false);
  return smallScreen ? (
    <SwipeableDrawer open={modalStatus} onOpen={() => {}} onClose={() => {}} />
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
