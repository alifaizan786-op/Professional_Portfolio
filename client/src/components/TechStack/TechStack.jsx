import React from "react";
import "./TechStack.css";
import Tooltip from "@mui/material/Tooltip";

import { motion } from "framer-motion";

import FaizanCSSLogo from "../../assets/Faizan_CSS_Logo.png";
import FaizanHTMLLogo from "../../assets/Faizan_HTML_Logo.png";
import FaizanJavaScriptLogo from "../../assets/Faizan_JavaScript_Logo.png";

import FaizanJQueryLogo from "../../assets/Faizan_JQuery_Logo.png";
import FaizanNodeJsLogo from "../../assets/Faizan_NodeJs_Logo.png";
import FaizanReactLogo from "../../assets/Faizan_React_Logo.png";
import FaizanBootStrapLogo from "../../assets/Faizan_BootStrap_Logo.png";

import FaizanSQLLogo from "../../assets/Faizan_SQL_Logo.png";
import FaizanGithubLogo from "../../assets/Faizan_Github_Logo.png";
import FaizanMongoDBLogo from "../../assets/Faizan_MongoDB_Logo.png";

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

const techStackArrOne = [
  {
    image: FaizanCSSLogo,
    link: "https://www.w3schools.com/css/",
    toolTip: "Cascading Style Sheet",
  },
  {
    image: FaizanJavaScriptLogo,
    link: "https://www.javascript.com/",
    toolTip: "Javascript",
  },
  {
    image: FaizanHTMLLogo,
    link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
    toolTip: "Hyper Text Markup Language",
  },
];

const techStackArrTwo = [
  {
    image: FaizanJQueryLogo,
    link: "https://jquery.com/",
    toolTip: "JQuery",
  },
  {
    image: FaizanBootStrapLogo,
    link: "https://getbootstrap.com/",
    toolTip: "Boot Strap",
  },
  {
    image: FaizanNodeJsLogo,
    link: "https://nodejs.org/en/",
    toolTip: "Node JS",
  },
  {
    image: FaizanReactLogo,
    link: "https://reactjs.org/",
    toolTip: "React JS",
  },
];

const techStackArrThree = [
  {
    image: FaizanSQLLogo,
    link: "https://reactjs.org/",
    toolTip: "Structured Query Language",
  },
  {
    image: FaizanMongoDBLogo,
    link: "https://www.mongodb.com/",
    toolTip: "Mongo DB",
  },
  {
    image: FaizanGithubLogo,
    link: "https://github.com/",
    toolTip: "Github",
  },
];

export default function TechStack() {
  return (
    <div className="techStackParent" id="techStack">
      <div className="techStackChildLeft">
        <div className="techStackGrandChildLeft">
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {techStackArrOne.map((tech, index) => (
              <motion.li key={index} className="item" variants={item}>
                <Tooltip title={tech.toolTip}>
                  <a href={tech.link}>
                    <img src={tech.image} alt="" />
                  </a>
                </Tooltip>
                <div className="shadow"></div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {techStackArrTwo.map((tech, index) => (
              <motion.li key={index} className="item" variants={item}>
                <Tooltip title={tech.toolTip}>
                  <a href={tech.link}>
                    <img src={tech.image} alt="" />
                  </a>
                </Tooltip>
                <div className="shadow"></div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {techStackArrThree.map((tech, index) => (
              <motion.li key={index} className="item" variants={item}>
                <Tooltip title={tech.toolTip}>
                  <a href={tech.link}>
                    <img src={tech.image} alt="" />
                  </a>
                </Tooltip>
                <div className="shadow"></div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
      <div className="techStackChildRight">
        <div className="techStackGrandChildRight">
          <h1>Technology Stack</h1>
          <p>
            So God help me, Coding is easy but finding these logos, it was like
            finding a needle in a haystack. Coming to my next point, these are
            not the only technologies I know.
          </p>
          <p>
            My journey with coding started with creating E-commerce site for
            clients on &nbsp;
            <a target={"blank"} href="www.shopify.com">
              shopify
            </a>
            , &nbsp; but sooner I realised that the customization constraints
            were to tight. That is when I started to explore &nbsp;
            <a href="https://shopify.github.io/liquid/">.liquid</a>
            &nbsp; the proprietary front end langauge for shopify, it bought me
            some time. But later on I realised the speeds on my created website
            were being compromised.
          </p>
          <p>
            That is when I decided to enroll in to &nbsp;
            <a target={"_blank"} href="https://bootcamp.pe.gatech.edu/">
              6-month coding bootcamp with Georgia Institute Of Technology
            </a>
            &nbsp;. That most of these guru's call money stealing schemes. It
            proved very profounding to me, did it cost me alot ? Yes. Did it
            cost me alot of time ? Yes. But to serve my clients better, it was
            well worth it
          </p>
          <p>
            At my bootcamp, I started my journey with HTML, CSS and Javascript.
            I learnt the basics of HTML, CSS, Javascript. and Version Control
            with github. After which we eased into using 3rd party libraries
            like JQuery, BootStrap, NodeJS, ReactJS. Then we started to learn
            databases in query language, were first we focused on MySQL, then
            MongoDB, along with Graphql. Towards the end of the bootcamp, I had
            observed MERN Stack to be my strength and decided to stick with it.
          </p>
        </div>
      </div>
    </div>
  );
}
