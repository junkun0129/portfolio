import { motion } from "framer-motion";
import NamiFlow from "../asobicompo/NamiFlow";
import NamiFlow2 from "../asobicompo/NamiFlow2";
import Hune from "../asobicompo/Hune";
import reactImg from "/react.png";

type type = {
  state: number;
};

function Skills({ state }: type) {
  return (
    <>
      <motion.div
        style={{ position: "absolute" }}
        animate={state !== 2 ? { y: -1000 } : { y: 0 }}
      >
        <div style={{ position: "relative" }}>
          <NamiFlow duration={22}></NamiFlow>
          <NamiFlow2 duration={15}></NamiFlow2>
          <NamiFlow2 duration={20}></NamiFlow2>
          <div
            style={{
              fontSize: 35,
              width: 1000,
              height: 200,
              position: "absolute",
              top: 100,
              left: 150,
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            omnis rerum quasi. Itaque aliquid quaerat voluptatibus porro
            tempora, illo aut voluptatem delectus distinctio voluptate
            recusandae excepturi accusantium deserunt quidem reprehenderit.
          </div>
          <Hune
            width={300}
            top={450}
            left={500}
            name={"React"}
            picture={reactImg}
            delay={0}
          ></Hune>
          <Hune
            width={500}
            top={450}
            left={0}
            name={"Typescript"}
            picture={reactImg}
            delay={1}
          ></Hune>
          <Hune
            width={350}
            top={420}
            left={1100}
            name={"SASS"}
            picture={reactImg}
            delay={0.1}
          ></Hune>
          <Hune
            width={250}
            top={400}
            left={900}
            name={"HTML"}
            picture={reactImg}
            delay={2}
          ></Hune>
          <Hune
            width={240}
            top={440}
            left={0}
            name={"NodeJS"}
            picture={reactImg}
            delay={4}
          ></Hune>
          <Hune
            width={600}
            top={450}
            left={800}
            name={"Express.js"}
            picture={reactImg}
            delay={3}
          ></Hune>
          <Hune
            width={650}
            top={460}
            left={400}
            name={"framer motion"}
            picture={reactImg}
            delay={1}
          ></Hune>
        </div>
      </motion.div>
    </>
  );
}

export default Skills;
