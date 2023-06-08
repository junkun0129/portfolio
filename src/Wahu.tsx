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
        {/* <Introduce state={state}></Introduce> */}
        <Skills state={state}></Skills>
        <Project state={state}></Project>
        <Contact state={state}></Contact>

        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            width: 250,
            height: 75,
            backgroundImage: `url(${Jumpei})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {/* <ProcressBar left={500} top={100} state={state}></ProcressBar> */}
        <ChouchinBar state={state}></ChouchinBar>
      </motion.div>
    </>
  );
}

export default Wahu;
