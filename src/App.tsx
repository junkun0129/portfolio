import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import {motion, motionValue, MotionTransform, useMotionTemplate, useMotionValueEvent, useTransform} from "framer-motion"
import ZZ from './assetscompo/ZZ'
import {Z, A, B,star} from "./assetscompo/SVGs"
import Alphabet from './assetscompo/Alphabet'
import Wahu from './asobicompo/Wahu'
import styles from "./App.module.scss"
import Jikken from './component/Jikken'
//import './App.css'


function App() {
  
  

  return (
    <>
    <div className={styles.App}>
      <Wahu></Wahu>
      {/* <Jikken></Jikken> */}
    </div>
    </>
  )
}

export default App
