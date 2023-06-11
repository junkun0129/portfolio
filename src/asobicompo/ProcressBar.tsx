import * as React from "react";
import { Component } from "react";
import { motion } from "framer-motion";
import chou1 from "/tyouchin1.png";
import chou2 from "/tyouchin2.png";
import chou3 from "/tyouchin3.png";
import chou4 from "/tyouchin4.png";
import chou1Dark from "/tyouchin1-dark.png";
import chou2Dark from "/tyouchin2-dark.png";
import chou3Dark from "/tyouchin3-dark.png";
import chou4Dark from "/tyouchin4-dark.png";
import styles from "./ProccessBar.module.scss";
type type = {
  left: number;
  top: number;
  state: number;
};
const chou1Style = {
  backgroundImage: `url(${chou1Dark})`,
  backgroundSize: "contain",
  width: "88%",
  height: "18%",
  backgroundRepeat: "no-repeat",
};
const chou2Style = {
  backgroundImage: `url(${chou2Dark})`,
  backgroundSize: "contain",
  width: "88%",
  height: "18%",
  backgroundRepeat: "no-repeat",
};
const chou3Style = {
  backgroundImage: `url(${chou3Dark})`,
  backgroundSize: "contain",
  width: "88%",
  height: "18%",
  backgroundRepeat: "no-repeat",
};
const chou4Style = {
  backgroundImage: `url(${chou4Dark})`,
  backgroundSize: "contain",
  width: "88%",
  height: "18%",
  backgroundRepeat: "no-repeat",
};

const chou1InsideStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${chou1})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  opacity: 0,
};
const chou2InsideStyle = {
  width: "100%",
  height: "100%",
  opacity: 0,
};
const chou3InsideStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${chou3})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  opacity: 0,
};
const chou4InsideStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${chou4})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  opacity: 0,
};
function ProcressBar({ left, top, state }: type) {
  return (
    <>
      <div style={{ position: "absolute", left, top }}>
        <div
          style={{
            position: "relative",
            width: 120,
            height: 600,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <motion.div
            className={styles.flame}
            animate={
              state === 0
                ? { y: 0 }
                : state === 1
                ? { y: 150 }
                : state === 2
                ? { y: 300 }
                : state === 3 && { y: 450 }
            }
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            style={chou1Style}
            initial={{ scale: 0.5 }}
            animate={state === 0 ? { scale: 1 } : { scale: 0.5 }}
          >
            <motion.div
              style={chou1InsideStyle}
              animate={state === 0 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            ></motion.div>
          </motion.div>
          <motion.div
            style={chou2Style}
            initial={{ scale: 0.5 }}
            animate={state === 1 ? { scale: 1 } : { scale: 0.5 }}
          >
            <motion.div
              style={chou2InsideStyle}
              animate={state === 1 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            ></motion.div>
          </motion.div>
          <motion.div
            style={chou3Style}
            initial={{ scale: 0.5 }}
            animate={state === 2 ? { scale: 1 } : { scale: 0.5 }}
          >
            <motion.div
              style={chou3InsideStyle}
              animate={state === 2 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            ></motion.div>
          </motion.div>
          <motion.div
            style={chou4Style}
            initial={{ scale: 0.5 }}
            animate={state === 3 ? { scale: 1 } : { scale: 0.5 }}
          >
            <motion.div
              style={chou4InsideStyle}
              animate={state === 3 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ProcressBar;
