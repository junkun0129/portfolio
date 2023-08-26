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
                height: sm ? "70%" : "100%",
                // border: "black solid 2px",
                marginTop: "3%",
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
                          borderRadius: "30px",
                        }}
                      >
                        <div
                          style={{
                            backgroundImage: `url(${reactImg})`,
                            height: "50%",
                            width: "15%",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundImage: "url(/next-js.png)",
                            height: "50%",
                            width: "15%",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundImage: `url(/sass.png)`,
                            height: "50%",
                            width: "15%",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundImage: `url(https://framerusercontent.com/images/48ha9ZR9oZQGQ6gZ8YUfElP3T0A.png)`,
                            height: "50%",
                            width: "15%",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundImage: `url(/tailwind.png)`,
                            height: "50%",
                            width: "15%",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            display: "flex",
                            alignItems: "center",
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
                <div style={{ fontSize: sm ? "1.3rem" : "1rem" }}>
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
                <div style={{ fontSize: sm ? "1.2rem" : "1rem" }}>
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
                    width: "30%",
                    height: "10%",
                    // border: "solid 3px black",
                    marginRight: "-6%",
                  }}
                ></div>
              </div>
            </div>
            {sm && (
              <>
                <Hune
                  width={300}
                  top={"80%"}
                  left={"60%"}
                  name={"React"}
                  picture={reactImg}
                  delay={0}
                ></Hune>
                <Hune
                  width={300}
                  top={"75%"}
                  left={"10%"}
                  name={"Typescript"}
                  picture={"/typescript.png"}
                  delay={1}
                ></Hune>
                <Hune
                  width={350}
                  top={"70%"}
                  left={"-8%"}
                  name={"SASS"}
                  picture={"/sass.png"}
                  delay={0.1}
                ></Hune>
                <Hune
                  width={250}
                  top={"70%"}
                  left={"20%"}
                  name={"HTML"}
                  picture={"/html-5.png"}
                  delay={2}
                ></Hune>
                <Hune
                  width={240}
                  top={"80%"}
                  left={"30%"}
                  name={"NodeJS"}
                  picture={"nodejs.png"}
                  delay={4}
                ></Hune>
                <Hune
                  width={400}
                  top={"70%"}
                  left={"70%"}
                  name={"Next.js"}
                  picture={"/next-js.png"}
                  delay={3}
                ></Hune>
                <Hune
                  width={350}
                  top={"60%"}
                  left={"40%"}
                  name={"framer motion"}
                  picture={
                    "https://framerusercontent.com/images/48ha9ZR9oZQGQ6gZ8YUfElP3T0A.png"
                  }
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
