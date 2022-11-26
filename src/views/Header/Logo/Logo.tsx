import React from "react";
import { motion } from "framer-motion";
import "./styles.css";
const Logo = () => {
  return (
    <React.Fragment>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="logo-label1"
      >
        Lovely
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="logo-label2"
      >
        Lingeries
      </motion.h1>
    </React.Fragment>
  );
};
export default Logo;
