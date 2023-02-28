import * as React from 'react';
import { Component } from 'react';
import {motion} from "framer-motion"
type type = {
    state:number
}
function Project({state}:type) {
    return ( 
        <>
        <motion.div style={{position:"absolute"}}
                        animate={state!==3?{
                            y:-1000
                        }:{
                            y:0
                        }}
            >

                <h1 style={{fontSize:"100px"}}>Project</h1>
            </motion.div>
        </>
     );
}

export default Project;