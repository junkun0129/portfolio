import * as React from 'react';
import { Component } from 'react';
import {motion} from "framer-motion"
type type = {
    state:number
}
function Skills({state}:type) {
    return ( 
        <>
           <motion.div style={{position:"absolute"}}
                        animate={state!==2?{
                            y:-1000
                        }:{
                            y:0
                        }}
            >
                
                <h1 style={{fontSize:"100px"}}>Skills</h1>
            </motion.div>
        </>
     );
}

export default Skills;