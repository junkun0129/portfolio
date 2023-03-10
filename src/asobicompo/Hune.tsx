import { m } from "framer-motion";
import * as React from "react";
import { Component } from "react";
import kobune from "/kobune.png";
import maru from "/flag.png";
import frame from "/frame.png";
import reactImg from "/react.png";
import { motion } from "framer-motion";

type type = {};
function Hune() {
  return (
    <>
      <motion.div
        style={{
          position: "absolute",
          top: 450,
          width: 500,
          height: 250,
          //   backgroundColor: "red",
        }}
        animate={{
          y: [40, -40],
        }}
        transition={{
          duration: 2,
          repeat: 10000,
          repeatType: "mirror",
        }}
      >
        <motion.div
          style={{ position: "relative", width: "100%", height: "100%" }}
          animate={{ rotate: [20, -5] }}
          transition={{
            repeat: 10000,
            repeatType: "mirror",
            duration: 2.5,
          }}
        >
          <div
            style={{
              position: "absolute",
              backgroundImage: `url(${kobune})`,
              backgroundRepeat: "no-repeat",
              //   backgroundColor: "black",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              backgroundSize: "contain",
            }}
          ></div>

          <div
            style={{
              position: "absolute",
              width: "15%",
              height: "30%",
              backgroundImage: `url(${maru})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              left: "50%",
              top: "30%",
              borderRadius: "50%",
              backgroundColor: "beige",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "70%",
                height: "70%",
                backgroundImage: `url(${reactImg})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                // backgroundColor: "red",
              }}
            ></div>
          </div>
          <div
            style={{
              position: "absolute",
              backgroundImage: `url(${frame})`,
              width: "50%",
              height: "50%",
              //   backgroundColor: "white",
              backgroundSize: "70% 40%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              transform: "rotate(-45deg)",
              left: "24%",
              top: "5%",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "150%",
            }}
          >
            React
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Hune;
