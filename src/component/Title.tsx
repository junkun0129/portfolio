import * as React from "react";
import { Component } from "react";
import Face from "/aasss.png";
import redFrame from "/red-frame.png";
import blackFrame from "/black-frame.png";
import ore from "/ore.jpg";
import Nami from "/nami.png";
import Nami2 from "/nami2.png";
import { motion, useTransform, useMotionValue } from "framer-motion";
import useMousePosition from "../asobicompo/useMousePosition";
import { useRenderTransform } from "../asobicompo/useRenderTranform";
import NamiFlow from "../asobicompo/NamiFlow";
import NamiFlow2 from "../asobicompo/NamiFlow2";
import kumo from "/kumo.png";
import kumo2 from "/kumo2.png";
import kumo3 from "/kumo3.png";
import kumo4 from "/kumo4.png";
import cloud1 from "/cloud.png";
import cloud2 from "/cloud2.png";
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
            justifyContent: "center",
          }}
        >
          {/* clouds */}

          <div
            style={{
              height: "50%",
              width: "30%",
              backgroundImage: `url(${kumo3})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              left: "-10%",
              top: "10%",
            }}
          ></div>
          <div
            style={{
              height: "10%",
              width: "10%",
              backgroundImage: `url(${cloud1})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              top: "20%",
            }}
          ></div>
          <div
            style={{
              height: "70%",
              width: "50%",
              backgroundImage: `url(${kumo})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              right: "-25%",
              top: "-20%",
            }}
          ></div>
          <div
            style={{
              height: "50%",
              width: "30%",
              backgroundImage: `url(${kumo2})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              bottom: "-20%",
              left: "-10%",
            }}
          ></div>
          <div
            style={{
              height: "15%",
              width: "15%",
              backgroundImage: `url(${cloud2})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              bottom: "10%",
            }}
          ></div>
          <div
            style={{
              height: "40%",
              width: "20%",
              backgroundImage: `url(${kumo3})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              position: "absolute",
              bottom: "-15%",
              right: "5%",
            }}
          ></div>

          {/* picture and introduce sentence */}
          <div
            style={{
              width: "40%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              marginLeft: "10%",
              marginTop: "3%",
            }}
          >
            <div
              style={{
                width: "42%",
                height: "49%",
                backgroundImage: `url(${ore})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                marginTop: "1%",
                marginRight: "30%",
              }}
            ></div>
            <div
              style={{
                backgroundImage: `url(${blackFrame})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "50%",
                height: "57%",
                position: "absolute",
                marginRight: "30%",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "-15%",
              marginTop: "3%",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 30,
                left: 100,
                top: 200,
              }}
            >
              Hi, I'm Jumpei Iwatani
            </div>
            <div
              style={{
                fontSize: 70,
                left: 100,
                top: 300,
              }}
            >
              Web developer
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Title;
