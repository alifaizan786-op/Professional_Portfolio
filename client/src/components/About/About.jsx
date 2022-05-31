import React from "react";
import "./About.css";
import Faizan_Computer from "../../assets/Faizan_Computer_Desk.jpg";
import Faizan_Gradient from "../../assets/Faizan_Gradient.png";

export default function About() {
  return (
    <div className="AboutParent">
      <div className="AboutChildLeft">
        <div>
          <h2 className="greet">Hey,</h2>
          <h1 className="name">I'm Faizan Ali</h1>
          <h2 className="who">Web Developer & Teacher</h2>
          <h5>Faizan Ali is a result driven full-stack developer, working in the field for the past 4 years.</h5>
          <h5>Faizan Ali has numerous websites under his belt from E-commerce to Portfolio websites.</h5>
          <p>That's enough of talking about myself in third person.<br/>
I have always wanted to be a developer, the only problem with that was I never got the chance to learn. For the most part I am a self thaught developer, atleast that's what i thought. In 2021, I completed my Coding Boot Camp From Georgia Tech and realised I hadn't even touched the surface of development, while self teaching myself. But now I can confidently say I am a result driven & skillful full-stack developer.</p>
        </div>
      </div>
      <div className="AboutChildRight">
        <div className="imageAnimation">
          <img className="compImg" src={Faizan_Gradient} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}
