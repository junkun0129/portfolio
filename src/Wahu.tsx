import * as React from "react";
import { Component, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import styles from "./Wahu.module.scss";
import Title from "./component/Title";
import Introduce from "./component/Introduce";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";
import NamiFlow from "./asobicompo/NamiFlow";
import NamiFlow2 from "./asobicompo/NamiFlow2";
import Jumpei from "/jumpeiLogo.png";
import ProcressBar from "./asobicompo/ProcressBar";
import ChouchinBar from "./asobicompo/ChouchinBar";
import { Theme, useMediaQuery } from "@mui/material";

function Wahu() {
  console.log("render wahu");
  const { scrollY } = useScroll();
  const [state, setState] = useState(0);

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollY.get() < 1000) {
      setState(0);
    } else if (1000 < scrollY.get() && scrollY.get() < 2000) {
      setState(1);
    } else if (2000 < scrollY.get() && scrollY.get() < 3000) {
      setState(2);
    } else if (3000 < scrollY.get() && scrollY.get() < 4000) {
      setState(3);
    }
  });
  const sm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  useMotionValueEvent(scrollY, "velocityChange", () => {});
  return (
    <>
      <motion.div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: "url(/washi.jpg)",
          position: "fixed",
          overflow: sm ? "none" : "scroll",
        }}
      >
        <ChouchinBar
          state={state}
          style={{
            width: "50%",
            height: "15%",
            marginTop: "1%",
            marginLeft: "25%",
            //   backgroundColor: "red",
            display: "flex",
            justifyContent: "space-around",
            position: "fixed",
          }}
        ></ChouchinBar>
        {sm ? (
          <div>
            <Title
              animate={state !== 0 ? { y: -1000 } : { y: 0 }}
              style={{ position: "absolute", width: "100%", height: "100%" }}
            ></Title>
            <Skills
              animate={state !== 1 ? { y: -1000 } : { y: 0 }}
              style={{ position: "absolute", width: "100%", height: "100%" }}
            ></Skills>
            <Project
              animate={
                state !== 2
                  ? {
                      y: -1000,
                    }
                  : {
                      y: 0,
                    }
              }
              style={{ position: "absolute", width: "100%", height: "100%" }}
            ></Project>
            <Contact
              animate={
                state !== 3
                  ? {
                      y: -1000,
                    }
                  : {
                      y: 0,
                    }
              }
              style={{ position: "absolute", width: "100%", height: "100%" }}
            ></Contact>
          </div>
        ) : (
          <div>
            <Title style={{ marginTop: "30%" }}></Title>
            <Skills style={{ height: "650px" }}></Skills>
            <Project style={{ width: "100%", height: "100%" }}></Project>
            <Contact style={{ width: "100%", height: "100%" }}></Contact>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default Wahu;
