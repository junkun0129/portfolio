import * as React from "react";
import { Component, useState, useEffect } from "react";
import { motion } from "framer-motion";
type type = {
  state: number;
};

const projects = ["IwataniQuest", "whitleblower", "nanika"];
function Project({ state }: type) {
  const [projectState, setProjectState] = useState(
    projects.map((project, i) => {
      return { name: project, show: false };
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
  };
  const handleHoverEnd = (projectName: string, index: number) => {
    setProjectState((pre) => {
      return [
        ...pre.slice(0, index),
        { name: projectName, show: false },
        ...pre.slice(index + 1),
      ];
    });
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
                    {project.name}
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
