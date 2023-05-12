import * as React from "react";
import { Component, useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { motion } from "framer-motion";
import reactImg from "/react.png";
import styles from "./Project.module.scss";
import { Tooltip, IconButton, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
type type = {
  state: number;
};

// const projects = ["IwataniQuest", "whitleblower", "nanika"];
const projects = [
  {
    name: "IwataniQuest",
    showcase: [
      {
        url: "./IwataniQuest-home.png",
        text: "Im jumpei",
      },
    ],
    url: "https://iwatani-quest-frontend.vercel.app/",
  },
  {
    name: "whitleblower",
    showcase: [
      {
        url: "./whistleblower-adminHome.png",
        text: "lorem ;as;dl ;slafd ;asldkfj ;asldf s;dlkfeiie ",
      },
      {
        url: "./whistleblower-general-makeClaim-deskTop.png",
        text: "lorem ;as;dl ;slafd ;asldkfj ;asldf s;dlkfeiie ",
      },
      {
        url: "./whistleblower-general-pastClaims-deskTop.png",
        text: "lorem ;as;dl ;slafd ;asldkfj ;asldf s;dlkfeiie ",
      },
      {
        url: "./whistleblower-admin-claimDetail.png",
        text: "lorem ;as;dl ;slafd ;asldkfj ;asldf s;dlkfeiie ",
      },
    ],
    url: "https://dev-whistler-app.vercel.app/login",
  },
  {
    name: "English Translator",
    showcase: [
      {
        url: "./LanguageApp-home.png",
        text: "lorem ;as;dl ;slafd ;asldkfj ;asldf s;dlkfeiie ",
      },
      {
        url: "./LanguageApp-wordDetail.png",
        text: "lorem ;as;dl ;slafd ;asldkfj ;asldf s;dlkfeiie ",
      },
    ],
    url: "https://language-app-6s3v-ofujpyn03-junkun0129.vercel.app/",
  },
  {
    name: "howl's landing page",
    showcase: [
      {
        url: "./howl-home.png",
        text: "lorem ;as;dl ;slafd ;asldkfj ;asldf s;dlkfeiie ",
      },
      {
        url: "./introduction-page.png",
        text: "lorem ;as;dl ;slafd ;asldkfj ;asldf s;dlkfeiie ",
      },
      {
        url: "./marchandise-page.png",
        text: "lorem ;as;dl ;slafd ;asldkfj ;asldf s;dlkfeiie ",
      },
    ],
    url: "https://houl-landing-page-m3s73jpis-junkun0129.vercel.app/",
  },
];
function Project({ state }: type) {
  const [projectState, setProjectState] = useState(
    projects.map((project, i) => {
      if (i === 0) {
        return { name: project.name, show: true };
      }
      return { name: project.name, show: false };
    })
  );
  const [nameIconPosition, setNameIconPosition] = useState({
    length:
      projectState[projectState.findIndex((one) => one.show === true)].name
        .length,
    positionIndex: projectState.findIndex((one) => one.show === true),
  });

  useEffect(() => {
    console.log(nameIconPosition, "project");
  }, [nameIconPosition]);

  const handleHoverStart = (projectName: string, index: number) => {
    setProjectState((pre) => {
      return [
        ...pre.slice(0, index),
        { name: projectName, show: true },
        ...pre.slice(index + 1),
      ];
    });

    setProjectState(
      projectState.map((project, i) => {
        if (i !== index) {
          return { name: projects[i].name, show: false };
        } else {
          return { name: projects[i].name, show: true };
        }
      })
    );
  };
  const handleHoverEnd = (projectName: string, index: number) => {
    // setProjectState((pre) => {
    //   return [
    //     ...pre.slice(0, index),
    //     { name: projectName, show: false },
    //     ...pre.slice(index + 1),
    //   ];
    // });
  };
  return (
    <>
      <motion.div
        style={{ position: "absolute", width: "100%", height: "100%" }}
        animate={
          state !== 2
            ? {
                y: -1000,
              }
            : {
                y: 0,
              }
        }
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "100%",
              fontSize: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className={styles.nameBox}
              style={{
                width: "70%",
                height: "60%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                // background: "rgb(240, 240, 240,0.4)",
                overflow: "scroll",
                fontSize: "1.4rem",
                position: "relative",
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "20%",
                  marginTop: "2%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // backgroundColor: "gray",
                  zIndex: "-1",
                  backgroundImage: `url(/wahu-frames-set.png)`,
                  backgroundPosition: "contain",
                }}
                animate={{
                  top: `${
                    (nameIconPosition.positionIndex * 100) / projectState.length
                  }%`,
                }}
              >
                <div
                  style={{
                    width: "28%",
                    height: "50%",
                    marginTop: "5%",
                    backgroundImage: "url(/project-name-decoration.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <motion.div
                  animate={{ width: `${nameIconPosition.length * 2}%` }}
                ></motion.div>
                <div
                  style={{
                    width: "28%",
                    height: "50%",
                    marginTop: "-5%",
                    backgroundImage:
                      "url(/project-name-decoration-rotated.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </motion.div>
              {projectState.map((project, i) => {
                return (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <motion.div
                      onHoverStart={() => {
                        handleHoverStart(project.name, i);
                        setNameIconPosition({
                          length: project.name.length,
                          positionIndex: i,
                        });
                      }}
                      onHoverEnd={() => handleHoverEnd(project.name, i)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {project.name}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            style={{
              width: "50%",
              height: "100%",
              fontSize: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20%",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "80%",
                display: "flex",
                position: "relative",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                background: "rgb(240, 240, 240,0.4)",
              }}
            >
              {projectState.map((project, i) => {
                return (
                  <motion.div
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "3px solid black",
                      position: "absolute",
                      opacity: 0,
                    }}
                    animate={
                      project.show
                        ? {
                            opacity: 1,
                          }
                        : { opacity: 0 }
                    }
                  >
                    {/* {project.name} */}
                    <Carousel
                      sx={{
                        width: "100%",
                        height: "100%",
                      }}
                      stopAutoPlayOnHover={false}
                      height={550}
                      navButtonsAlwaysVisible={true}
                    >
                      {projects[i].showcase.map((element) => {
                        return (
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "relative",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                bottom: "0",
                                right: "8%",
                                zIndex: "10",
                              }}
                            >
                              <Tooltip title={projects[i].url}>
                                <IconButton>
                                  <Link href={projects[i].url} color="inherit">
                                    <GitHubIcon fontSize="large" />
                                  </Link>
                                </IconButton>
                              </Tooltip>
                            </div>
                            <div
                              style={{
                                width: "100%",
                                height: "60%",
                                backgroundImage: `url(${element.url})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",

                                // backgroundColor: "blue",
                              }}
                            ></div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                width: "100%",
                                height: "40%",
                                fontSize: "1.8rem",
                                overflow: "scroll",
                                padding: "1rem",
                              }}
                            >
                              {element.text}
                            </div>
                            <div>;asdfsdfsaf</div>
                          </div>
                        );
                      })}
                    </Carousel>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Project;
