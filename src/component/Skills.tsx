import { motion } from "framer-motion";
import NamiFlow from "../asobicompo/NamiFlow";
import NamiFlow2 from "../asobicompo/NamiFlow2";
import Hune from "../asobicompo/Hune";
import reactImg from "/react.png";
import React from "react";
import { Theme, useMediaQuery } from "@mui/material";

type type = {
  style?: React.CSSProperties;
};

const Skills = React.forwardRef(
  ({ style }: type, ref: React.Ref<HTMLDivElement>) => {
    const sm = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));

    return (
      <>
        <motion.div style={{ ...style }} ref={ref}>
          <div
            style={{
              position: "relative",
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            {sm && (
              <>
                <NamiFlow2 duration={15}></NamiFlow2>
                <NamiFlow2 duration={22}></NamiFlow2>
              </>
            )}
            <div
              style={{
                fontSize: 35,
                width: "100%",
                height: "70%",
                // border: "black solid 2px",
                display: "flex",
                justifyContent: "space-around",
                flexDirection: sm ? "row" : "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: sm ? "30%" : "90%",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", width: "100%", height: "20%" }}>
                  <div
                    style={{
                      fontSize: sm ? "2.5rem" : "2.0rem",
                      marginBottom: "-1.5%",
                      marginLeft: "3%",
                    }}
                  >
                    frontend
                  </div>
                  {!sm && (
                    <>
                      <div
                        style={{
                          background: "rgb(240, 240, 240,0.4)",
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${reactImg})`,
                            height: "80%",
                            width: "15%",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundImage: `url(${reactImg})`,
                            height: "80%",
                            width: "15%",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundImage: `url(${reactImg})`,
                            height: "80%",
                            width: "15%",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundImage: `url(${reactImg})`,
                            height: "80%",
                            width: "15%",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                          }}
                        ></div>
                      </div>
                    </>
                  )}
                </div>
                <div
                  style={{
                    backgroundImage: `url(/tsuna.png)`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: "80%",
                    height: "8%",
                  }}
                ></div>
                <div style={{ fontSize: sm ? "1.5rem" : "1rem" }}>
                  I have a genuine passion for inventing from scratch. With a
                  proven track record of working with companies, I excel at
                  turning concepts into reality while ensuring a delightful user
                  experience.
                </div>
              </div>
              <div
                style={{
                  width: sm ? "40%" : "90%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                }}
              >
                <div style={{ fontSize: sm ? "1.5rem" : "1rem" }}>
                  With a solid understanding of JavaScript, I work with
                  databases like MongoDB and MySQL, implementing RESTful APIs
                  for seamless data transactions. I explore different approaches
                  to utilize these technologies, going beyond backend
                  conventions to discover better solutions.{" "}
                </div>
                <div
                  style={{
                    fontSize: sm ? "2.5rem" : "2rem",
                    marginBottom: "-1.5%",
                    marginLeft: "3%",
                  }}
                >
                  backend
                </div>
                <div
                  style={{
                    backgroundImage: `url(/tsuna.png)`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: "60%",
                    height: "8%",
                    marginRight: "-6%",
                  }}
                ></div>
              </div>
            </div>
            {sm && (
              <>
                <Hune
                  width={300}
                  top={500}
                  left={550}
                  name={"React"}
                  picture={reactImg}
                  delay={0}
                ></Hune>
                <Hune
                  width={300}
                  top={550}
                  left={0}
                  name={"Typescript"}
                  picture={reactImg}
                  delay={1}
                ></Hune>
                <Hune
                  width={350}
                  top={520}
                  left={1200}
                  name={"SASS"}
                  picture={reactImg}
                  delay={0.1}
                ></Hune>
                <Hune
                  width={250}
                  top={550}
                  left={800}
                  name={"HTML"}
                  picture={reactImg}
                  delay={2}
                ></Hune>
                <Hune
                  width={240}
                  top={540}
                  left={200}
                  name={"NodeJS"}
                  picture={reactImg}
                  delay={4}
                ></Hune>
                <Hune
                  width={400}
                  top={500}
                  left={900}
                  name={"Express.js"}
                  picture={reactImg}
                  delay={3}
                ></Hune>
                <Hune
                  width={350}
                  top={560}
                  left={400}
                  name={"framer motion"}
                  picture={reactImg}
                  delay={1}
                ></Hune>
              </>
            )}
          </div>
        </motion.div>
      </>
    );
  }
);

export default motion(Skills);
