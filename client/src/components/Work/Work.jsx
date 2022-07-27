import React from "react";
import "./Work.css";
import SB_Company_E_Commerce_by_Faizan_Ali_1 from "../../assets/Work_Assets/SB_Company_E_Commerce_by_Faizan_Ali/SB_Company_E_Commerce_by_Faizan_Ali_1.png";
import Drip_Brothers_E_Commerce_by_Faizan_Ali_1 from "../../assets/Work_Assets/Drip_Brothers_E_Commerce_by_Faizan_Ali/Drip_Brothers_E_Commerce_by_Faizan_Ali_1.png";
import Malani_Employee_Portal_by_Faizan_Ali_1 from "../../assets/Work_Assets/Malani_Employee_Portal_by_Faizan_Ali/Malani_Employee_Portal_by_Faizan_Ali_1.jpg";
import Button from "@mui/material/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";

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
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div className="workchildRightGrandChildLeft">
                  <div className="workSlide1">
                    <h1>{projects[0].projectType}</h1>
                    <h3>Client : {projects[0].clientName}</h3>
                    <h3>
                      Stack :{" "}
                      {projects[0].techStack.map((item, index) => (
                        <a key={index} href={item.link}>
                          {item.name},
                        </a>
                      ))}
                    </h3>
                    <p>{projects[0].descriptionOne}</p>
                    <p>{projects[0].descriptionTwo}</p>
                  </div>
                </div>
                <div className="workchildRightGrandChildRight">
                  <div className="workSlideImg1">
                    <img src={projects[0].image} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div className="workchildRightGrandChildLeft">
                  <div className="workSlide1">
                    <h1>{projects[1].projectType}</h1>
                    <h3>Client : {projects[1].clientName}</h3>
                    <h3>
                      Stack :{" "}
                      {projects[1].techStack.map((item, index) => (
                        <a key={index} href={item.link}>
                          {item.name},
                        </a>
                      ))}
                    </h3>
                    <p>{projects[1].descriptionOne}</p>
                    <p>{projects[1].descriptionTwo}</p>
                  </div>
                </div>
                <div className="workchildRightGrandChildRight">
                  <div className="workSlideImg1">
                    <img src={projects[1].image} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div className="workchildRightGrandChildLeft">
                  <div className="workSlide1">
                    <h1>{projects[2].projectType}</h1>
                    <h3>Client : {projects[2].clientName}</h3>
                    <h3>
                      Stack :{" "}
                      {projects[2].techStack.map((item, index) => (
                        <a key={index} href={item.link}>
                          {item.name},
                        </a>
                      ))}
                    </h3>
                    <p>{projects[2].descriptionOne}</p>
                    <p>{projects[2].descriptionTwo}</p>
                  </div>
                </div>
                <div className="workchildRightGrandChildRight">
                  <div className="workSlideImg1">
                    <img src={projects[2].image} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
