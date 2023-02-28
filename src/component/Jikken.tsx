import * as React from 'react';
import { Component } from 'react';
import {motion, useScroll, useMotionValueEvent} from "framer-motion"
function Jikken() {

    const {scrollY} = useScroll();

    useMotionValueEvent(scrollY, "change", ()=>{
        
    })


    return ( 
        <>
          <motion.h1
            animate={{
                x:100
            }}
            

            style={{

            }}
          >
            
            {scrollY}</motion.h1>
        </>
     );
}

export default Jikken;