import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import {
  motion,
  motionValue,
  MotionTransform,
  useMotionTemplate,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import ZZ from "./assetscompo/ZZ";
import { Z, A, B, star } from "./assetscompo/SVGs";
import Alphabet from "./assetscompo/Alphabet";
import Wahu from "./Wahu";
import styles from "./App.module.scss";
import Jikken from "./component/Jikken";
import { ThemeProvider, createTheme } from "@mui/material";
//import './App.css'

function App() {
  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={styles.App}>
          <Wahu></Wahu>
          {/* <Jikken></Jikken> */}
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
