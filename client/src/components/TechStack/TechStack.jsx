import React from "react";
import "./TechStack.css";
import Tooltip from '@mui/material/Tooltip';

import FaizanCSSLogo from '../../assets/Faizan_CSS_Logo.png'
import FaizanHTMLLogo from '../../assets/Faizan_HTML_Logo.png'
import FaizanJavaScriptLogo from '../../assets/Faizan_JavaScript_Logo.png'

import FaizanJQueryLogo from '../../assets/Faizan_JQuery_Logo.png'
import FaizanNodeJsLogo from '../../assets/Faizan_NodeJs_Logo.png'
import FaizanReactLogo from '../../assets/Faizan_React_Logo.png'
import FaizanBootStrapLogo from '../../assets/Faizan_BootStrap_Logo.png'

import FaizanSQLLogo from '../../assets/Faizan_SQL_Logo.png'
import FaizanGithubLogo from '../../assets/Faizan_Github_Logo.png'
import FaizanMongoDBLogo from '../../assets/Faizan_MongoDB_Logo.png'


const techStackArrOne =[
    {
        image:FaizanCSSLogo,
        link:'https://www.w3schools.com/css/',
        toolTip:'Cascading Style Sheet'
    },
    {
        image:FaizanJavaScriptLogo,
        link:'https://www.javascript.com/',
        toolTip:'Javascript'
    },
    {
        image:FaizanHTMLLogo,
        link:'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
        toolTip:'Hyper Text Markup Language'
    },
]

const techStackArrTwo = [
    {
        image:FaizanJQueryLogo,
        link:'https://jquery.com/',
        toolTip:'JQuery'
    },
    {
        image:FaizanBootStrapLogo,
        link:'https://getbootstrap.com/',
        toolTip:'Boot Strap'
    },
    {
        image:FaizanNodeJsLogo,
        link:'https://nodejs.org/en/',
        toolTip:'Node JS'
    },
    {
        image:FaizanReactLogo,
        link:'https://reactjs.org/',
        toolTip:'React JS'
    },
]

const techStackArrThree = [
    {
        image:FaizanSQLLogo,
        link:'https://reactjs.org/',
        toolTip:'Structured Query Language'
    },
    {
        image:FaizanMongoDBLogo,
        link:'https://www.mongodb.com/',
        toolTip:'Mongo DB'
    },
    {
        image:FaizanGithubLogo,
        link:'https://github.com/',
        toolTip:'Github'
    },
]



export default function TechStack(){
    return(
        <div className="techStackParent" id="techStack">
            <div className="techStackChildLeft">
                <div className="techStackGrandChildLeft">
                    <ul>
                        {techStackArrOne.map((tech, index)=>(
                            <li key={index}>
                                <Tooltip title={tech.toolTip}>
                                    <a href={tech.link}>
                                        <img src={tech.image} alt="" />
                                    </a>
                                </Tooltip>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {techStackArrTwo.map((tech, index)=>(
                            <li key={index}>
                                <Tooltip title={tech.toolTip}>
                                    <a href={tech.link}>
                                        <img src={tech.image} alt="" />
                                    </a>
                                </Tooltip>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {techStackArrThree.map((tech, index)=>(
                            <li key={index}>
                                <Tooltip title={tech.toolTip}>
                                    <a href={tech.link}>
                                        <img src={tech.image} alt="" />
                                    </a>
                                </Tooltip>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="techStackChildRight">
                <div className="techStackGrandChildRight">
                    <h1>
                        Technology Stack
                    </h1>
                    <p>
                        So God help me, Coding is easy but finding these logos, it was like finding a needle 
                        in a haystack. Coming to my next point, these are not the only technologies I know.
                    </p>
                    <p>
                        My journey with coding started with creating E-commerce site for clients on 	&nbsp;
                            <a target={'blank'} href="www.shopify.com">
                                shopify
                            </a>, 
                        &nbsp; but sooner I realised that the customization constraints were to tight. That is when I
                        started to explore	&nbsp;
                            <a href="https://shopify.github.io/liquid/">
                                .liquid
                            </a> 
                        &nbsp; the proprietary front end langauge for shopify, it bought me 
                        some time. But later on I realised the speeds on my created website were being compromised.   
                    </p>
                    <p>
                        That is when I decided to enroll in to &nbsp;
                        <a target={'_blank'} href="https://bootcamp.pe.gatech.edu/">
                            6-month coding bootcamp with Georgia Institute Of Technology
                        </a>
                        &nbsp;. That most of these guru's call money stealing schemes. It proved very profounding to me, did it cost me alot ? Yes.
                        Did it cost me alot of time ? Yes. But to serve my clients better, it was well worth it
                    </p>
                </div>
            </div>
        </div>
    )
}