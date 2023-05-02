import * as React from "react";
import { Component, useState, useEffect } from "react";
import { motion } from "framer-motion";
import reuseValue from "../ReuseValue";
type type = {
  state: number;
};
function Contact({ state }: type) {
  const [emailinfo, setEmailInfo] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });

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
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        animate={
          state !== 3
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
              width: "50%",
              height: "50%",
              display: "flex",
              flexDirection: "column",
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
                  }}
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
                  }}
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
                }}
                type="text"
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
                }}
              />
            </div>
          </div>
          <button onClick={submitEmail}>send message</button>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
