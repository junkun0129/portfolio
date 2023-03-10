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
        style={{ position: "absolute" }}
        animate={
          state !== 0
            ? {
                y: -1000,
              }
            : {
                y: 0,
              }
        }
      >
        <motion.div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {/* <h1>smoke </h1>
          <h1>boats</h1> */}
        </motion.div>
      </motion.div>
    </>
  );
}

export default Title;
