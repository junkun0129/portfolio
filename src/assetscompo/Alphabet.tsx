import * as React from 'react';
import { Component } from 'react';
import {motion, motionValue, MotionTransform, MotionValue} from "framer-motion"
import { A } from './SVGs';
type type = {
    alphabet: string,
    pathLength:MotionValue<number>

}
function Alphabet({alphabet, pathLength}:type) {
    return ( 
        <>
            <div style={{
                    backgroundColor:"red",
                    width:500,
                    height:500
                }}>
                <svg 
                    width="200px" 
                    height="200px" 
                    fill='none'
                    
                    >
                    <g transform="translate(0.000000,1163.000000) scale(0.100000,-0.100000)" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="50">
                        <motion.path d={alphabet} initial={{pathLength:0}} style ={{pathLength, width:"100px", height:"100px"}}>

                        </motion.path>
                    </g>
                </svg>
            </div>
        </>
     );
}

export default Alphabet;