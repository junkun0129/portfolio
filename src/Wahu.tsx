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

function Wahu() {
  console.log("render wahu");
  const { scrollY } = useScroll();
  const [state, setState] = useState(0);
  const [nami1duration, setNami1duration] = useState(20);
  const [nami2duration, setNami2duration] = useState(15);

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollY.get() < 1000) {
      setState(0);
    } else if (1000 < scrollY.get() && scrollY.get() < 2000) {
      setState(1);
    } else if (2000 < scrollY.get() && scrollY.get() < 3000) {
      setState(2);
    } else if (3000 < scrollY.get() && scrollY.get() < 4000) {
      setState(3);
    } else if (4000 < scrollY.get() && scrollY.get() < 5000) {
      setState(4);
    }
    setNami1duration(30);
    setNami2duration(30);
    console.log(";start");
  });

  useMotionValueEvent(scrollY, "velocityChange", () => {
    console.log("close");
  });
  return (
    <>
      <motion.div className={styles.Wahu}>
        <Title state={state}></Title>
        <Introduce state={state}></Introduce>
        <Skills state={state}></Skills>
        <Project state={state}></Project>
        <Contact state={state}></Contact>

        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            fontSize: 35,
            backgroundColor: "brown",
            borderRadius: 20,
            width: 200,
            height: 50,
            textAlign: "center",
            justifyContent: "center",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          jumpei
        </div>
        <div
          style={{
            width: 50,
            height: 500,
            position: "absolute",
            backgroundColor: "brown",
            right: 70,
            top: 100,
          }}
        >
          asdf
        </div>
      </motion.div>
    </>
  );
}

export default Wahu;
