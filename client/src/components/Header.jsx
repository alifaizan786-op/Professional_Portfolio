import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Button from "@mui/material/Button";

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
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const styles = {
  headerParent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "8vh",
    padding: "0% 7%",
  },
  headerChildSide: {
    width: "20%",
  },
  headerChildCenter: {
    width: "60%",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  socialIcons: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    justifyContent: "end",
  },
};

const navObj = [
  {
    link: "#techStack",
    text: "Tech Stack",
  },
  {
    link: "#work",
    text: "Work",
  },
  {
    link: "#techStack",
    text: "Resume",
  },
];

const socialObj = [
  {
    icon : <LinkedInIcon />,
    link : "https://www.linkedin.com/in/faizan-ali-iruna-digital/"
  },
  {
    icon : <InstagramIcon />,
    link : "https://www.instagram.com/ali_faizan00/"
  },
  {
    icon : <AlternateEmailIcon />,
    link : "mailto:abc@example.com?subject = Need Developer&body = Message"
  },
  {
    icon : <WhatsAppIcon />,
    link : "https://wa.me/4049185805"
  },
]

export default function Header() {
  return (
    <div style={styles.headerParent}>
      <div style={styles.headerChildSide}>
        <Button
          onClick={() => window.open("https://www.geeksforgeeks.org", "_blank")}
        >
          <h2>Faizan Ali</h2>
        </Button>
      </div>
      <div style={styles.headerChildCenter}>
        <motion.ul
          style={styles.nav}
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {navObj.map((navItem, index) => (
            <motion.li key={index} className="item" variants={item}>
              <Button onClick={() => (window.location.href = navItem.link)}>
                {navItem.text}
              </Button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div style={styles.headerChildSide}>
      <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
          style={styles.socialIcons}
        >
        {socialObj.map((socialItem, index)=>(
          <motion.li key={index} className="item" variants={item}>
          <Button
            onClick={() =>
              window.open(
                socialItem.link,
                "_blank"
              )
            }
          >
            {socialItem.icon}
          </Button>
        </motion.li>
        ))}
        </motion.ul>
      </div>
    </div>
  );
}
