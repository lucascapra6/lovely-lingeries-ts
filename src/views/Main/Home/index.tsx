import React from "react";
import { motion } from "framer-motion";
import Banner from "./components/Banner";

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 2 },
    },
    exit: {
      x: window.innerWidth,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.section
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Banner />
      {/*<Showcase />*/}
    </motion.section>
  );
};
export default Home;
