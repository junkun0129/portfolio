import * as React from 'react';
import { Component } from 'react';
import {motion} from "framer-motion"
type type = {
    state:number
}
function Contact({state}:type) {
    return ( 
        <>
           <motion.div style={{position:"absolute"}}
                        animate={state!==4?{
                            y:-1000
                        }:{
                            y:0
                        }}
            >

                <h1 style={{fontSize:"100px"}}>Contact</h1>
            </motion.div>
        </>
     );
}

export default Contact;