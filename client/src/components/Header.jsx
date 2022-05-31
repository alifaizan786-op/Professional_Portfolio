import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Button from "@mui/material/Button";

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
        <ul style={styles.nav}>
          <li>
            <Button
              onClick={() =>
                window.location.href = '#techStack'
              }
            >
              Tech Stack
            </Button>
          </li>
          <li>
            <Button
              onClick={() =>
                window.open("https://www.geeksforgeeks.org", "_blank")
              }
            >
              Resume
            </Button>
          </li>
          <li>
            <Button
              onClick={() =>
                window.open("https://www.geeksforgeeks.org", "_blank")
              }
            >
              Work
            </Button>
          </li>
        </ul>
      </div>
      <div style={styles.headerChildSide}>
        <ul style={styles.socialIcons}>
          <li>
            <Button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/faizan-ali-iruna-digital/",
                  "_blank"
                )
              }
            >
              <LinkedInIcon />
            </Button>
          </li>
          <li>
            <Button
              
              onClick={() =>
                window.open("https://www.instagram.com/ali_faizan00/", "_blank")
              }
            >
              <InstagramIcon />
            </Button>
          </li>
          <li>
            <Button
              onClick={() =>
                window.open(
                  "mailto:abc@example.com?subject = Need Developer&body = Message",
                  "_blank"
                )
              }
            >
              <AlternateEmailIcon />
            </Button>
          </li>
          <li>
            <Button
              onClick={() => window.open("https://wa.me/4049185805", "_blank")}
            >
              <WhatsAppIcon />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
