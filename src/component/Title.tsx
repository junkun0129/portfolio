import * as React from 'react';
import { Component } from 'react';
import Face from "/aasss.png"
import Nami from "/nami.png"
import Nami2 from "/nami2.png"
import {motion,useTransform, useMotionValue} from "framer-motion"
import useMousePosition from '../asobicompo/useMousePosition';
import {useRenderTransform} from "../asobicompo/useRenderTranform"
type type = {
    state:number
}
function Title({state}:type) {
    console.log("render title")
    const position = useMousePosition()
    const motionMousePositionX = useMotionValue(position.x)
    const faceMoveX = useTransform(motionMousePositionX, [0,500],[0,500])
    const [nami] = useRenderTransform(position.x,[0,1500],[-50,50])
    const [nami2] = useRenderTransform(position.x,[0,1500],[50,-50])
    return ( 
        <>
        <motion.div style={{position:"absolute"}}
                    animate={state!==0?{
                        y:-1000
                    }:{
                        y:0
                    }}
        >

            <motion.div style={{
                position:"relative", 
                width:"100%", 
                height:"100%",
            }}
                        
            >
                
                <motion.div
                    style={{
                        backgroundImage:`url(${Nami})`,
                        backgroundSize:"contain",
                        backgroundPosition:"bottom",
                        width:"110vw",
                        height:"100vh",
                        position:"absolute",
                        left:-50,
                        top:-100,
                        opacity:0.8
                        
                    }}
                    animate={{x:nami}}
                >

                </motion.div>
                <motion.div
                    style={{
                        backgroundImage:`url(${Nami2})`,
                        backgroundSize:"cover",
                        backgroundPosition:"bottom",
                        width:"110vw",
                        height:"100vh",
                        position:"absolute",
                        left:-50,
                        top:150,
                        opacity:0.8
                    }}
                    animate={{x:nami2}}
                >

                </motion.div>
                <motion.div>
                    <motion.h1 
                        style={{
                            fontSize:"100px", 
                            position:"absolute",
                            x:"10%",
                            width:"1000px",
                            height:100,
                            // backgroundColor:"red"
                        }}>Hello, I'm Jumpei
                    </motion.h1>
                    <motion.h1
                        style={{
                            fontSize:"100px", 
                            position:"absolute",
                            x:"70%",
                            width:"1000px",
                            height:100,
                            top:120
                        }}
                    >
                        web developer
                    </motion.h1>
                </motion.div>
                {/* <motion.div 
                    style={{
                        backgroundImage:`url(${Face})`,
                        backgroundSize:"cover",
                        width:700,
                        height:690,
                        position:"absolute",
                        right:0,
                        top:0,
                        // translateX:`${faceMoveX}px`
                    }}
                    animate={{x:stateTrasform}}
                    
                >
                    
                </motion.div> */}
                
            </motion.div>
        </motion.div>
            
        </>
     );
}

export default Title;