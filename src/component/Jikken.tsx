import * as React from 'react';
import { Component } from 'react';
import {motion, useScroll, useMotionValueEvent, motionValue} from "framer-motion"
function Jikken() {

    const {scrollY} = useScroll();
    const x = motionValue(0)

    useMotionValueEvent(scrollY, "change", ()=>{
        
    })


    return ( 
        <>
          <motion.h1
            animate={{
                x:[100,200,500,100],
                scale:[2,1,0.5,1],
                rotate:[50,-50,20,70]
            }}
            transition={{
                duration:5,
                repeatType:"reverse",
                times:[0,0.5,0.8,1]
            }}
            

            style={{
                fontSize:"100px",
                position:"fixed",
                rotate:x
                
            }}
          >
            
            {scrollY}</motion.h1>

            <motion.h1
                style={{
                    rotate:x
                }}
            >
                oresama
            </motion.h1>
        </>
     );
}

export default Jikken;