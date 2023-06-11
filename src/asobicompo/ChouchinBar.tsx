import * as React from "react";
import { Component } from "react";
import { motion, useAnimationControls } from "framer-motion";
import chou1 from "/tyouchin1.png";
import chou2 from "/tyouchin2.png";
import chou3 from "/tyouchin3.png";
import chou4 from "/tyouchin4.png";
import chou1Dark from "/tyouchin1-dark.png";
import chou2Dark from "/tyouchin2-dark.png";
import chou3Dark from "/tyouchin3-dark.png";
import chou4Dark from "/tyouchin4-dark.png";
import styles from "./ProccessBar.module.scss";
import { Theme, useMediaQuery } from "@mui/material";
type PropsType = {
  state: number;
  style?: React.CSSProperties;
};
const chouchinImg = [
  {
    light: chou1,
    dark: chou1Dark,
    name: "Home",
  },
  {
    light: chou2,
    dark: chou2Dark,
    name: "Skill",
  },
  {
    light: chou3,
    dark: chou3Dark,
    name: "Project",
  },
  {
    light: chou4,
    dark: chou4Dark,
    name: "Contact",
  },
];
function ChouchinBar({ state, style }: PropsType) {
  const flameAnimation = useAnimationControls();
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  React.useEffect(() => {
    flameAnimation.start({
      x: (state * window.innerWidth) / 8,
    });
    // console.log(window.innerWidth);
  }, [state]);
  return (
    <>
      <div
        style={{
          ...style,
        }}
      >
        {sm && (
          <motion.div
            className={styles.flame}
            animate={flameAnimation}
            transition={{ duration: 1 }}
          ></motion.div>
        )}

        {chouchinImg.map((chouchin, i) => {
          return (
            <>
              <motion.div
                style={{
                  backgroundImage: `url(${chouchin.dark})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "25%",
                  height: "100%",
                }}
                initial={{ scale: 0.5 }}
                animate={state === i ? { scale: 1 } : { scale: 0.5 }}
              >
                <motion.div
                  style={{
                    backgroundImage: `url(${chouchin.light})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                  animate={state === i ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: sm ? "35%" : "80%",
                      right: sm ? "10%" : "-20%",
                      fontSize: "1.5rem",
                    }}
                  >
                    {chouchin.name}
                  </div>
                </motion.div>
              </motion.div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default ChouchinBar;
