import React, { useState } from "react";
import Slider from "react-slick";
import { courseData } from "../data/courseData.js";
import { FaStar } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Link} from "react-router-dom";
import "../assets/css/style.css"

function Course() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [data, setData] = useState(courseData);
    return (
        <div className={"bg-white p-5 "}>
            <div className={"container"}>
                <Slider {...settings}>
                    {data.map((item, i) => (
                        <div key={i}>
                            <div className={"card courseCard w-auto mx-2 rounded-3 "} >
                                <div className={"card-body  p-3 "} >
                                    <Link to={`/courses-details`}>
                                        <div className={"imgBtn   "}>
                                            <div className={"imgData  "}>
                                                <img width={"100%"} height={"200px"}  src={item.img}/>
                                                <p className={"fw-bold text-center text-danger  "}> Course type
                                                    : {item.courseType} </p>
                                                <p className={"text-start text-black fw-bold fs-6 courseName "} > {item.courseName} </p>
                                            </div>
                                        </div>
                                        <div className={"row "}>
                                            <div className={"col-4"}>
                                                <span className={"mt-2 d-block text-black "}>{item.review} </span>
                                            </div>
                                            <div className={"col-4"}>
                                                <span className={"d-block "} style={{
                                                    display: "block",
                                                    marginLeft: "-60px",
                                                    marginTop: "3px",
                                                    color: "gold",
                                                    fontSize: "20px"
                                                }}> <FaStar/> </span>
                                            </div>
                                            <div className={"col-4"}>
                                                <button style={{marginLeft:"-60px",fontSize:"14px"}} className={"btn btn-primary "} > <IoIosGitCompare /> Compare</button>
                                            </div>

                                            <p className={"mt-5 text-black position-absolute d-block  "} > { item.des } </p>

                                        </div>
                                        <div className={"position-relative text-black  "} style={{marginTop:"120px", height:"3px" }}  >
                                            <hr/>
                                        </div>
                                        <div className={"priceHours mt-3 "} >
                                            <div className={"row justify-content-center "}>
                                                <div className={"col-6"}>
                                                    <span className={"text-black fw-bold "} > { item.price } </span>
                                                </div>
                                                <div className={"col-6  "}>
                                                    <span className={"text-black-50 mt-1 d-block "} > <FaRegClock /> {item.courseDuration} </span>

                                                </div>

                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Course;
