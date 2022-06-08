import React from "react";
import "./Work.css";
import SB_Company_E_Commerce_by_Faizan_Ali_1 from "../../assets/Work_Assets/SB_Company_E_Commerce_by_Faizan_Ali/SB_Company_E_Commerce_by_Faizan_Ali_1.png";
import Button from "@mui/material/Button";

export default function Work() {
    const [slideNum, setSlideNum] = React.useState(1)

  return (
    <>
      <div id="work">
        <div className="workChildLeft">
          <h1>Portfolio</h1>
        </div>
        <div className="workChildRight">
          <div className="workchildRightGrandChildLeft">
            <div className="workSlide1">
              <h1>Front-End Development</h1>
              <h3>Client : S.B Company Jewelers</h3>
              <h3>
                Stack : &nbsp;
                <a href="https://shopify.github.io/liquid/">.liquid</a>
              </h3>
              <p>
                Front-End development for a shopify hosted website. Those of you
                who have done front-end dev for shopify webiste must know my
                pain
              </p>
              <p>
                This was one of my first projects. I was asked to do the
                front-end development for the E-commerce store for SB Company
                Jewelers, making sure the speed to website is not compromised in
                any way. The client also asked me reatin as much customizablity
                as possible.
              </p>
              <Button variant="outlined">Watch More</Button>
            </div>
          </div>
          <div className="workchildRightGrandChildRight">
            <div className="workSlideImg1">
              <img src={SB_Company_E_Commerce_by_Faizan_Ali_1} />
            </div>
          </div>
          <div className="workSectionBtn">
            <span className="workSlideBtn1"></span>
            <span className="workSlideBtn2"></span>
            <span className="workSlideBtn3"></span>
          </div>
        </div>
      </div>
    </>
  );
}
