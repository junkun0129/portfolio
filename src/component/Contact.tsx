import * as React from "react";
import { Component, useState, useEffect } from "react";
import { motion } from "framer-motion";
import reuseValue from "../ReuseValue";
import { TextField } from "@mui/material";
import tama from "/tama.png";
import tama2 from "/tama3.png";
type type = {
  style?: React.CSSProperties;
};
const Contact = React.forwardRef(
  ({ style }: type, ref: React.Ref<HTMLDivElement>) => {
    const [emailinfo, setEmailInfo] = useState({
      name: "",
      email: "",
      subject: "",
      text: "",
    });
    const [animeon, setAnimeon] = useState(false);
    useEffect(() => {}, [emailinfo]);

    const submitEmail = () => {
      console.log("oij");
      console.log(emailinfo);
      fetch(`${reuseValue.backendURL}/email/submit`, {
        method: "POST",
        body: JSON.stringify(emailinfo),
        headers: { "Content-Type": "application/json" },
      }).then(async (res) => {
        if (!res.ok) {
          console.log("error");
        } else {
          console.log(res, "sent");
        }
      });
    };
    return (
      <>
        <motion.div
          style={{
            ...style,
          }}
          ref={ref}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "90%",
                left: "-20%",
                top: "30%",
                backgroundImage: `url(${tama})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "90%",
                right: "-80%",
                bottom: "30%",
                backgroundImage: `url(${tama2})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              style={{
                width: "50%",
                height: "50%",
                display: "flex",
                flexDirection: "column",
                marginTop: "4%",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  height: "20%",
                  width: "100%",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    onChange={(e) =>
                      setEmailInfo((pre) => {
                        return {
                          ...pre,
                          name: e.target.value,
                        };
                      })
                    }
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "95%",
                      height: "80%",
                      background: "rgb(240, 240, 240,0.4)",
                      borderRadius: "10px",
                      border: "2px solid black",
                      fontSize: "1.2rem",
                      fontFamily: "serif",
                    }}
                    placeholder="name"
                    type="text"
                  />
                </div>
                <div
                  style={{
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    onChange={(e) =>
                      setEmailInfo((pre) => {
                        return {
                          ...pre,
                          email: e.target.value,
                        };
                      })
                    }
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "95%",
                      height: "80%",
                      background: "rgb(240, 240, 240,0.4)",
                      borderRadius: "10px",
                      fontSize: "1.2rem",
                      fontFamily: "serif",
                    }}
                    placeholder="email"
                    type="text"
                  />
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "20%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  onChange={(e) =>
                    setEmailInfo((pre) => {
                      return {
                        ...pre,
                        subject: e.target.value,
                      };
                    })
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "97.5%",
                    height: "80%",
                    background: "rgb(240, 240, 240,0.4)",
                    borderRadius: "10px",
                    fontSize: "1.2rem",
                    fontFamily: "serif",
                  }}
                  type="text"
                  placeholder="subject"
                />
              </div>
              <div
                style={{
                  width: "100%",
                  height: "60%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <textarea
                  onChange={(e) =>
                    setEmailInfo((pre) => {
                      return {
                        ...pre,
                        text: e.target.value,
                      };
                    })
                  }
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "97.5%",
                    height: "90%",
                    background: "rgb(240, 240, 240,0.4)",
                    borderRadius: "10px",
                    border: "solid black 2px",
                    fontSize: "1.1rem",
                    fontFamily: "serif",
                  }}
                />
              </div>
            </div>
            <motion.div
              style={{
                marginTop: "1%",
                width: "20%",
                height: "10%",
                display: "flex",
                justifyContent: "center",
                position: "relative",
                // border: "solid 3px black",
              }}
              onHoverStart={(e) => setAnimeon(true)}
              onHoverEnd={(e) => setAnimeon(false)}
            >
              <motion.button
                animate={animeon ? { y: [-2, 10, 0] } : {}}
                transition={{
                  repeat: 1000,
                  repeatType: "mirror",
                  times: [0.1, 0.9, 1],
                  duration: 1.5,
                }}
                style={{
                  all: "unset",
                  fontSize: "1.5rem",
                }}
                onClick={submitEmail}
              >
                send message
              </motion.button>
              <motion.div
                style={{
                  backgroundImage: `url(/ougi.png)`,
                  position: "absolute",
                  width: "10%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  right: "10%",
                }}
                animate={animeon ? { rotate: [-10, 0, 10] } : {}}
                transition={{
                  repeat: 1000,
                  repeatType: "mirror",
                  times: [0.1, 0.5, 1],
                  duration: 1,
                }}
              ></motion.div>
              <motion.div
                animate={animeon ? { rotate: [-10, 0, 10] } : {}}
                transition={{
                  repeat: 1000,
                  repeatType: "mirror",
                  times: [0.1, 0.5, 1],
                  duration: 1,
                }}
                style={{
                  backgroundImage: `url(/ougi.png)`,
                  position: "absolute",
                  width: "10%",
                  height: "100%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  left: "10%",
                }}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </>
    );
  }
);
export default motion(Contact);
