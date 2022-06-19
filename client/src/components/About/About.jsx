import React from "react";
import "./About.css";
import Faizan_Computer from "../../assets/Faizan_Computer_Desk.jpg";
import Faizan_Gradient from "../../assets/Faizan_Gradient.png";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function About() {
  return (
    <motion.div className="container AboutParent" variants={container} initial="hidden" animate="visible">
      <motion.div className="item AboutChildLeft" variants={item}>
        <div>
          <h2 className="greet">Hey,</h2>
          <h1 className="name">I'm Faizan Ali</h1>
          <h2 className="who">Web Developer & Teacher</h2>
          <h5>Faizan Ali is a result driven full-stack developer, working in the field for the past 4 years.</h5>
          <h5>Faizan Ali has numerous websites under his belt from E-commerce to Portfolio websites.</h5>
          <p>That's enough of talking about myself in third person.<br/>
I have always wanted to be a developer, the only problem with that was I never got the chance to learn. For the most part I am a self thaught developer, atleast that's what i thought. In 2021, I completed my Coding Boot Camp From Georgia Tech and realised I hadn't even touched the surface of development, while self teaching myself. But now I can confidently say I am a result driven & skillful full-stack developer.</p>
        </div>
      </motion.div>
      <motion.div className="item AboutChildRight" variants={item}>
        <div className="imageAnimation">
          <img className="compImg" src={Faizan_Gradient} alt="" srcset="" />
        </div>
      </motion.div>
    </motion.div>
  );
}
