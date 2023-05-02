import * as React from "react";
import { Component } from "react";
import Face from "/aasss.png";
import Nami from "/nami.png";
import Nami2 from "/nami2.png";
import { motion, useTransform, useMotionValue } from "framer-motion";
import useMousePosition from "../asobicompo/useMousePosition";
import { useRenderTransform } from "../asobicompo/useRenderTranform";
import NamiFlow from "../asobicompo/NamiFlow";
import NamiFlow2 from "../asobicompo/NamiFlow2";
type type = {
  state: number;
};
function Title({ state }: type) {
  console.log("render title");
  const position = useMousePosition();
  const motionMousePositionX = useMotionValue(position.x);
  const faceMoveX = useTransform(motionMousePositionX, [0, 500], [0, 500]);
  const [nami] = useRenderTransform(position.x, [0, 1500], [-50, 50]);
  const [nami2] = useRenderTransform(position.x, [0, 1500], [50, -50]);
  return (
    <>
      <motion.div
        style={{ position: "absolute", width: "100%", height: "100%" }}
        animate={state !== 0 ? { y: -1000 } : { y: 0 }}
      >
        <motion.div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 50,
                left: 100,
                top: 200,
              }}
            >
              <motion.div whileHover={{ y: 10 }}>H</motion.div>
              <motion.div whileHover={{ y: 10 }}>e</motion.div>
              <motion.div whileHover={{ y: 10 }}>l</motion.div>
              <motion.div whileHover={{ y: 10 }}>l</motion.div>
              <motion.div whileHover={{ y: 10 }}>o</motion.div>
              <motion.div whileHover={{ y: 10 }}>I</motion.div>
              <motion.div whileHover={{ y: 10 }}>'</motion.div>
              <motion.div whileHover={{ y: 10 }}>m</motion.div>
              <motion.div whileHover={{ y: 10 }}>j</motion.div>
              <motion.div whileHover={{ y: 10 }}>J</motion.div>
              <motion.div whileHover={{ y: 10 }}>u</motion.div>
              <motion.div whileHover={{ y: 10 }}>m</motion.div>
              <motion.div whileHover={{ y: 10 }}>p</motion.div>
              <motion.div whileHover={{ y: 10 }}>e</motion.div>
              <motion.div whileHover={{ y: 10 }}>i</motion.div>
              <motion.div whileHover={{ y: 10 }}>e</motion.div>
              <motion.div whileHover={{ y: 10 }}>I</motion.div>
              <motion.div whileHover={{ y: 10 }}>w</motion.div>
              <motion.div whileHover={{ y: 10 }}>a</motion.div>
              <motion.div whileHover={{ y: 10 }}>t</motion.div>
              <motion.div whileHover={{ y: 10 }}>a</motion.div>
              <motion.div whileHover={{ y: 10 }}>n</motion.div>
              <motion.div whileHover={{ y: 10 }}>i</motion.div>
            </div>
            <div
              style={{
                fontSize: 80,
                left: 100,
                top: 300,
              }}
            >
              Web developer
            </div>
          </div>
          <div
            style={{
              width: "50%",
              height: "100%",
              backgroundImage: `url(${Face})`,
              backgroundSize: "contain",
              right: 100,
            }}
          ></div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Title;
