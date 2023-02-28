import * as React from 'react';
import { Component } from 'react';
import {motion} from "framer-motion"
type type = {
    state:number
}
function Introduce({state}:type) {
    return ( 
        <>
            <motion.div style={{position:"absolute"}}
                        animate={state!==1?{
                            y:-1000
                        }:{
                            y:0
                        }}
            >

                <h1 style={{
                    fontSize:"100px"
                }}>Introduce</h1>
            </motion.div>
        </>
     );
}

export default Introduce;