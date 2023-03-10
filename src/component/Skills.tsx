import { motion } from "framer-motion";
import NamiFlow from "../asobicompo/NamiFlow";
import NamiFlow2 from "../asobicompo/NamiFlow2";
import Hune from "../asobicompo/Hune";

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
          <Hune></Hune>
        </div>
      </motion.div>
    </>
  );
}

export default Skills;
