import React from 'react';
import img2 from '../assets/img/img2.png';
import { FaRegClock } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const CourseDetails = () => {
    return (
        <>
            <div className={"course-details mt-5 "} >
                <div className={"course-details-header bg-primary p-5 "} >
                    <div className={"container"} >
                        <h1 className={"text-white fw-bold "} >WordPress Theme Development with <br/> Bootstrap</h1>
                        <p className={"text-white fs-3 mt-3 "} >Learn how to confidently
                            develop custom & profitable Responsive WordPress Themes <br/>
                            and Websites with no prior experience.</p>
                        <div className={"enroll-data"} >
                            <div className={"row"}>
                                <div className={"col-lg-3 col-sm-6 "}>
                                    <span className={""} >
                                        <img  style={{width:"25%", borderRadius:"50%"}} src={img2} alt="" />
                                        <span className={"mx-3 text-white fw-bolder  "} >Crated by John Doe </span>

                                    </span>

                                </div>
                                <div className={"col-lg-2 col-sm-6 "}>
                                    <p className={"text-white"} style={{marginTop:"18px",fontSize:"18px"}} > <FaRegClock /> 24:11:44 Hours </p>

                                </div>
                                <div className={"col-lg-2 col-sm-6 "}>
                                    <p className={"text-white"} style={{marginTop:"18px",fontSize:"18px"}} ><CgProfile /> 1 Enrolled </p>

                                </div>
                                <div  className={"col-lg-2 col-sm-6 "}>

                                    <div className={"d-flex"} >
                                        <p className={""} style={{marginTop:"18px",fontSize:"18px" , color:"gold" }} > <FaStar /> <FaStar /> <FaStar /> <FaStar /> </p>
                                        <p className={"text-white  "} style={{marginTop:"22px",  }} >(2 Reviews)</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container mt-5 "}>
                    <div className={"row"}>
                        <div className={"col-md-6 col-sm-12 "}>
                            <div className={"card p-5  rounded-4  "} style={{width:"45rem"}} >
                                <div className={"card-body cardBody "} >
                                    <Tabs
                                        defaultActiveKey="Overview"
                                        transition={false}
                                        id="noanim-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab eventKey="Overview" title="Overview">
                                            <h3>Course description</h3>
                                            <h6>Do you want to supercharge your HTML, CSS & PHP knowledge and learn how
                                                to turn them
                                                into a real business that can make you more money as a freelancer?</h6>

                                            <p>Whether you're a freelance designer, entrepreneur, employee for a
                                                company, code hobbyist, or looking for a
                                                new career — this course gives you an immensely valuable skill that will
                                                enable you to eithe</p>
                                            <h6>Make money on the side</h6>
                                            <p>So you can save up for that Hawaiian vacation you've been wanting, help
                                                pay off
                                                your debt, your car, your mortgage, or simply just to have bonus cash
                                                laying around.</p>
                                            <h6>Create a full-time income</h6>
                                            <p>WordPress developers have options. Many developers make a generous
                                                living off of creating custom WordPress themes and selling them on
                                                websites like ThemeForest. Freelance designers and developers
                                                can also take on WordPress projects and make an extra $1,000 -
                                                $5,000+ per month.</p>
                                            <h6 style={{fontStyle: "italic"}}>Who Should Take This Course?</h6>
                                            <h6 style={{fontStyle: "italic"}}>Graphic & Web Designers</h6>
                                            <p>Graphic designers are extremely talented, but ask them to code
                                                their designs and they'll freeze up! This leaves them with
                                                no other choice but to hire a web developer. Any
                                                professional graphic designers knows web developers can be expensive.
                                            </p>
                                            <h5 className={"font-monospace"} style={{fontWeight:"bold"}} >What will i learn?</h5>
                                            <ul>
                                                <li><p>Have the skills to start making money on the side, as a casual
                                                    freelancer, or full time as a work-from-home freelancer</p></li>
                                                <li><p>Easily create a beautiful HTML & CSS website with
                                                    Bootstrap (that doesn't look like generic Bootstrap websites!)
                                                </p></li>
                                                <li>
                                                    <p>Convert any static HTML & CSS website into a Custom WordPress
                                                        Theme</p>
                                                </li>
                                                <li>
                                                    <p>Have a thorough understanding of utilizing PHP
                                                        to create WordPress websites & themes
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>Feel comfortable with the process of turning static websites into
                                                    dynamic WordPress websites</p>
                                                </li>

                                                <li>
                                                    <p>Fully understand how to use Custom Post Types and Advanced Custom Fields in WordPress</p>
                                                </li>

                                            </ul>
                                            <h4 className={"text-black fw-bold "} >Requirements</h4>
                                            <ul>
                                                <li>
                                                    <p>Have a basic understanding of HTML, CSS and PHP (all courses I offer)</p>
                                                </li>
                                                <li>
                                                    <p>Have access to a code editor, free or otherwise. I suggest Coda 2, as that's the editor I use exclusively.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>An Internet connection is required.
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>A fresh copy of Bootstrap and WordPress (we will go over this in the beginning of the course).
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>Download & Install MAMP (or alternatives — we cover this in the course)</p>
                                                </li>
                                            </ul>
                                        </Tab>
                                        <Tab eventKey="profile" title="Curriculum">
                                            Tab content for Profile
                                        </Tab>
                                        <Tab eventKey="contact" title=" Instructor" >
                                            Tab content for Contact
                                        </Tab>

                                        <Tab eventKey="Review" title=" Review" >
                                            Tab content for Contact
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                        <div className={"col-md-6"}>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CourseDetails;