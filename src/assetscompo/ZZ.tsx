import * as React from 'react';
import { Component } from 'react';
import {motion, MotionValue} from "framer-motion"
type type={
    Width:string,
    Height:string,
    pathX:MotionValue<number>
}
function ZZ({Width, Height, pathX}:type) {
    return (
        <>
            <motion.svg width = {Width} height={Height} viewBox="0 0 192 192"  fill="none">

            <motion.g 
                stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"
                // initial={{opacity:0}}
                // animate = {{
                //     pathLength:1,
                //     opacity:1,
                //     transition:{
                //         pathLength: { delay:2, type: "spring", duration: 1, bounce: 0 },
                //         opacity: { delay:2, duration: 1 }
                //     }
                // }}
                >

            <motion.path 
                d="M30 22h62L30 96h62m25-24h46l-46 55h46m-109 0h36l-36 43h36"
                // initial={{pathLength:0}}
                // animate = {{
                //     pathLength:pathX,
                //     transition:{
                //         pathLength: { delay:1, type: "spring", duration: 5, bounce: 0 },
                        
                //     }
                // }}
                style={{pathLength:pathX}}
                
            />
                

            </motion.g>

            {/* <defs>

            <clipPath id="a">

            <motion.path fill="#ffffff" d="M0 0h192v192H0z"/>

            </clipPath>

            </defs> */}

            </motion.svg>
        </>
    );
}

export default ZZ;