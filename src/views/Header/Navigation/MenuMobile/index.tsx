import React, { useState } from "react";
import { SwipeableDrawer } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../../theme/muiTheme";
import Colors from "../../../../theme/colors/Colors";
type MenuMobileProps = {
  navigationOptions: Array<{ label: string; routeToNavigate: string }>;
};
const MenuMobile = ({ navigationOptions }: MenuMobileProps) => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  return (
    <ThemeProvider theme={theme}>
      <MenuIcon
        color="secondary"
        fontSize="large"
        style={{ position: "fixed", left: 20, top: 25 }}
        onClick={() => setModalStatus(true)}
      />
      <SwipeableDrawer
        anchor="left"
        open={modalStatus}
        onOpen={() => {}}
        onClose={() => {
          setModalStatus(false);
        }}
      >
        <div
          className="menu-mobile-container"
          style={{ backgroundColor: Colors.main }}
        >
          {navigationOptions.map((item, index) => (
            <ul key={index.toString()}>
              <Link
                className="menu-mobile-label"
                style={{ color: Colors.white }}
                to={item.routeToNavigate}
                onClick={() => setModalStatus(false)}
              >
                {item.label}
              </Link>
            </ul>
          ))}
        </div>
      </SwipeableDrawer>
    </ThemeProvider>
  );
};

export default MenuMobile;
