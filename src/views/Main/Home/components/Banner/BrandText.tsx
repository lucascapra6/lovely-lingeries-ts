import React from "react";
import {motion} from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";
const BrandText = () => {
    const smallScreen = useMediaQuery("(max-width:595px)");

    const initialY = {
        y: 50,
        opacity: 0,
    };
    const variants = smallScreen
        ? {
            initial: {
                x: -200,
                opacity: 0,
            },
            animateConforto: {
                x: 0,
                opacity: 1,
            },
        }
        : {
            initial: {
                x: -40,
                opacity: 0,
            },
            animateConforto: {
                x: 40,
                opacity: 1,
            },
        };
    return (
        <div className="brand-text-container">
            <motion.h2
                variants={variants}
                initial="initial"
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 20, delay: 0.5 }}
            >
                Liberdade
            </motion.h2>
            <motion.h2
                variants={variants}
                initial="initial"
                animate="animateConforto"
                transition={{ duration: 2, delay: 1.5, type: "spring", stiffness: 10 }}
            >
                Conforto
            </motion.h2>
            <motion.p
                className="conjunction small-device-padding120px"
                initial={initialY}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 12, delay: 2.5 }}
            >
                &
            </motion.p>
            <motion.h2
                className="small-device-padding60px"
                initial={initialY}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 12, delay: 2.5 }}
            >
                Empoderamento
            </motion.h2>
        </div>
    );
}
export default BrandText
