import React from "react";
import bannerImage from "../../../../../assets/images/pura-pele-modelo-lingerie-joinville-santa-catarina-sc-moda-feminina-roupa-intima-sobre-2.png";
import { motion } from "framer-motion";
import BrandText from "./BrandText";
import DefaultAutoComplete from "../../../../../components/DefaultAutoComplete";
import "./style.css";
import { TextField } from "@mui/material";
const Banner = () => {
  const variants = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };
  return (
    <div className="banner-container">
      <motion.div
        variants={variants}
        initial="hide"
        animate="show"
        transition={{ delay: 0.6 }}
        className="auto-complete"
      >
        <DefaultAutoComplete
          renderInput={(params) => (
            <TextField
              placeholder="O que deseja buscar?"
              {...params}
              size="medium"
            />
          )}
          options={["option"]}
          style={{ backgroundColor: "#f1e8e8" }}
          className="auto-complete"
        />
      </motion.div>
      <div className="image-brandText-container">
        <BrandText />
        <img className="imageBanner" src={bannerImage} />
      </div>
    </div>
  );
};
export default Banner;
