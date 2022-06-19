import React from "react";
import "./Work.css";
import SB_Company_E_Commerce_by_Faizan_Ali_1 from "../../assets/Work_Assets/SB_Company_E_Commerce_by_Faizan_Ali/SB_Company_E_Commerce_by_Faizan_Ali_1.png";
import Drip_Brothers_E_Commerce_by_Faizan_Ali_1 from "../../assets/Work_Assets/Drip_Brothers_E_Commerce_by_Faizan_Ali/Drip_Brothers_E_Commerce_by_Faizan_Ali_1.png";
import Malani_Employee_Portal_by_Faizan_Ali_1 from "../../assets/Work_Assets/Malani_Employee_Portal_by_Faizan_Ali/Malani_Employee_Portal_by_Faizan_Ali_1.jpg";
import Button from "@mui/material/Button";

const projects = [
  {
    projectType: "Front-End Development",
    clientName: "S.B Company Jewelers",
    techStack: [
      {
        link: "https://shopify.github.io/liquid/",
        name: ".liquid",
      },
    ],
    descriptionOne: `Front-End development for a shopify hosted website. Those of you who have done front-end dev for shopify webiste must know my pain`,
    descriptionTwo: `This was one of my first projects. I was asked to do the front-end development for the E-commerce store for SB Company Jewelers, making sure the speed to website is not compromised in any way. The client also asked me reatin as much customizablity as possible.`,
    image: SB_Company_E_Commerce_by_Faizan_Ali_1,
  },
  {
    projectType: "Front-End Development",
    clientName: "Drip Brothers Inc",
    techStack: [
      {
        link: "https://shopify.github.io/liquid/",
        name: ".liquid",
      },
    ],
    descriptionOne: `Front-End development for a shopify hosted website. Those of you who have done front-end dev for shopify webiste must know my pain`,
    descriptionTwo: `This was one of my first projects. I was asked to do the front-end development for the E-commerce store for SB Company Jewelers, making sure the speed to website is not compromised in any way. The client also asked me reatin as much customizablity as possible.`,
    image: Drip_Brothers_E_Commerce_by_Faizan_Ali_1,
  },
  {
    projectType: "Full-Stack Development",
    clientName: "Malani Jewelers Inc",
    techStack: [
      {
        link: "https://reactjs.org/",
        name: "ReactJs",
      },
      {
        link: "https://expressjs.com/",
        name: "ExpressJs",
      },
      {
        link: "https://www.mongodb.com/docs/",
        name: "MongoDB",
      },
      {
        link: "https://nodejs.org/en/",
        name: "NodeJs",
      },
    ],
    descriptionOne: `Front-End development for a shopify hosted website. Those of you who have done front-end dev for shopify webiste must know my pain`,
    descriptionTwo: `This was one of my first projects. I was asked to do the front-end development for the E-commerce store for SB Company Jewelers, making sure the speed to website is not compromised in any way. The client also asked me reatin as much customizablity as possible.`,
    image: Malani_Employee_Portal_by_Faizan_Ali_1,
  },
];

export default function Work() {
  const [slideNum, setSlideNum] = React.useState(0);



  return (
    <>
      <div id="work">
        <div className="workChildLeft">
          <h1>Portfolio</h1>
        </div>
        <div className="workChildRight">
          <div className="workchildRightGrandChildLeft">
            <div className="workSlide1">
              <h1>{projects[slideNum].projectType}</h1>
              <h3>Client : {projects[slideNum].clientName}</h3>
              <h3>
                Stack :{" "}
                {projects[slideNum].techStack.map((item, index) => (
                  <a key={index} href={item.link}>
                    {item.name},
                  </a>
                ))}
              </h3>
              <p>{projects[slideNum].descriptionOne}</p>
              <p>{projects[slideNum].descriptionTwo}</p>
              <Button variant="outlined">Watch More</Button>
            </div>
          </div>
          <div className="workchildRightGrandChildRight">
            <div className="workSlideImg1">
              <img src={projects[slideNum].image} />
            </div>
          </div>
          <div className="workSectionBtn">
            <span
              onClick={() => {
                setSlideNum(0);
              }}
              className={slideNum === 0 ? "active" : "unactive"}
            ></span>
            <span
              onClick={() => {
                setSlideNum(1);
              }}
              className={slideNum === 1 ? "active" : "unactive"}
            ></span>
            <span
              onClick={() => {
                setSlideNum(2);
              }}
              className={slideNum === 2 ? "active" : "unactive"}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
}
