import * as React from "react";
import { Component, useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { motion } from "framer-motion";
import reactImg from "/react.png";

type type = {
  state: number;
};

// const projects = ["IwataniQuest", "whitleblower", "nanika"];
const projects = [
  {
    name: "IwataniQuest",
    showcase: [
      {
        url: "./flag.png",
        text: "Im jumpei",
      },
      {
        url: "./kobune.png",
        text: "bY HONNY is singginga a sonf ",
      },
      {
        url: "./Ore.png",
        text: "I dont know if we are gonna go to beach on this weekend",
      },
    ],
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
  },
  {
    name: "nanika",
    showcase: [
      {
        url: "./flag.png",
        text: "lorem ;as;dl ;slafd ;asldkfj ;asldf s;dlkfeiie ",
      },
      {
        url: "./kobune.png",
        text: "lorem ;as;dl ;slafd ;asldkfj ;asldf s;dlkfeiie ",
      },
      {
        url: "./Ore.png",
        text: "lorem ;as;dl ;slafd ;asldkfj ;asldf s;dlkfeiie ",
      },
    ],
  },
];
function Project({ state }: type) {
  const [projectState, setProjectState] = useState(
    projects.map((project, i) => {
      return { name: project.name, show: false };
    })
  );

  useEffect(() => {
    console.log(projectState, "project");
  }, [projectState]);

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
              style={{
                width: "60%",
                height: "60%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                background: "rgb(240, 240, 240,0.4)",
              }}
            >
              {projectState.map((project, i) => {
                return (
                  <motion.div
                    onHoverStart={() => handleHoverStart(project.name, i)}
                    onHoverEnd={() => handleHoverEnd(project.name, i)}
                  >
                    {project.name}
                  </motion.div>
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
                            }}
                          >
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
