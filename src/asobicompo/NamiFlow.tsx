import {
  motion,
  useAnimationControls,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTime,
  useTransform,
} from "framer-motion";
import * as React from "react";
import { Component, useEffect, useState } from "react";
import { useNonInitialEffect } from "./NoInisialEffect";
import Nami from "/nami.png";
type type = {
  duration: number;
};
function NamiFlow({ duration }: type) {
  const nami1controll = useAnimationControls();
  const nami2controll = useAnimationControls();
  const nami1Motionvalue = useMotionValue(0);
  // const namiDuration = duration;
  const [namiDuration, setNamiDuration] = useState(duration);
  const namiWidth = window.innerWidth;
  const namiMove = namiWidth;
  const nami2delay = (namiDuration * 1000) / 2;
  console.log(window.innerWidth, "hit si s");
  useEffect(() => {
    nami1controll.start({
      x: namiMove,
      transition: {
        duration: namiDuration,
        repeat: 5000,
        repeatType: "loop",
        ease: "linear",
      },
    });

    setTimeout(() => {
      nami2controll.start({
        x: namiMove,
        transition: {
          duration: namiDuration,
          repeat: 5000,
          repeatType: "loop",
          ease: "linear",
        },
      });
    }, nami2delay);
  }, []);

  return (
    <>
      <motion.div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          top: -50,
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <motion.div
            style={{
              backgroundSize: "contain",
              width: namiWidth,
              height: "100%",
              backgroundImage: `url(${Nami})`,
              position: "absolute",
              x: -namiWidth,
            }}
            animate={nami1controll}
          ></motion.div>
          <motion.div
            style={{
              backgroundSize: "contain",
              width: namiWidth,
              height: "100%",
              backgroundImage: `url(${Nami})`,
              position: "absolute",
              x: -namiWidth,
            }}
            animate={nami2controll}
          ></motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default NamiFlow;
