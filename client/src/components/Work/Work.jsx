import React from "react";
import './Work.css';
import SB_Company_E_Commerce_by_Faizan_Ali_1 from '../../assets/Work_Assets/SB_Company_E_Commerce_by_Faizan_Ali/SB_Company_E_Commerce_by_Faizan_Ali_1.png'


export default function Work(){
    return(
        <div id="work">
            <div className="workChildLeft">
                <h1>
                    Portfolio
                </h1>
            </div>
            <div className="workChildRight">
                <div className="workchildRightGrandChildLeft">
                    <div className="workSlide1">
                        <h1>
                            Front-End Development
                        </h1>
                        <h3>
                           Client : S.B Company Jewelers
                        </h3>
                        <h3>
                            Stack : &nbsp;
                            <a href="https://shopify.github.io/liquid/">
                                .liquid
                            </a>
                        </h3>
                        <p>
                            S.B Company Jewelers were not happy with the customization constraints, they wanted a completely 
                            new design for thier website. They had hired a UX designer to do all the research according to their businesss
                            needs and everything. But not long after they realised they can't customize the website much

                        </p>
                    </div>
                </div>
                <div className="workchildRightGrandChildRight">
                    workchildRightGrandChildRight
                </div>
            </div>
        </div>
    )

}