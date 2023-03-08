import * as React from "react";
import { Component, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import styles from "./Wahu.module.scss";
import Title from "../component/Title";
import Introduce from "../component/Introduce";
import Skills from "../component/Skills";
import Project from "../component/Project";
import Contact from "../component/Contact";
import NamiFlow from "../component/NamiFlow";

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
    } else if (4000 < scrollY.get() && scrollY.get() < 5000) {
      setState(4);
    }
  });
  return (
    <>
      <div className={styles.Wahu}>
        <Title state={state}></Title>
        <Introduce state={state}></Introduce>
        <Skills state={state}></Skills>
        <Project state={state}></Project>
        <Contact state={state}></Contact>
      </div>
    </>
  );
}

export default Wahu;
