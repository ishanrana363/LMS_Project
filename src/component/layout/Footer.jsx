import React from 'react'
import img from "../../assets/img/Q-Learn.png"
import {Link} from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className={"container"} >
            <div className={"row"}>
                <div className={"col-md-3 col-sm-12 "}>
                    <div className={"img mt-4 "}>
                        <img width={"60%"} src={img} alt={""}/>
                    </div>
                    <div className="learn mt-5 ">
                        <p className={"fs-6 fw-bold text "}>
                            ঘোষণা: Qlearn.com.bd জিওটেক অ্যান্ড স্ট্রাকচারস
                            লিমিটেডের মালিকানাধীন এবং এটির প্রশিক্ষণ বিভাগ দ্বারা পরিচালিত
                        </p>
                    </div>
                    <div className={"follows mt-3 "}>
                        <h4 className={"fw-bold"}>Follow Us:</h4>
                        <span className={"fs-1"}>
                            <Link to={"https://www.facebook.com/"}><FaFacebook/></Link>
                             <Link className={"mx-4 text-reset "} to={"https://www.facebook.com/"}><FaYoutube/></Link>
                        </span>
                    </div>
                </div>
                <div className={"col-md-3 col-sm-12 mx-lg-5 mt-sm-4 d-block "}>
                    <div className={"useFullLink"}>
                        <h3 className={"text-white fw-bold mt-sm-2 mb-3 mt-0 "}>Useful Links</h3>
                        <div className={"mt-4"} >
                            <Link className={""} to={"/blog"}>Our blogs</Link> <br/>
                            <Link to={"/scholarship"}>Scholarship </Link> <br/>
                            <Link to={"/instructor"}>Our Instructor </Link> <br/>
                            <Link to={"/teacher"}>Join as a teacher</Link> <br/>
                            <Link to={"/cheack"}> Cheack your certificate </Link>
                        </div>
                    </div>
                </div>
                <div className={"col-md-3 col-sm-12 mt-2 "}>
                    <div className={"useFullLink "}>
                        <h3 className={"mt-4 text-white fw-bold "}>About QLearn </h3>
                        <div className={"mt-4 "}>
                            <Link className={""} to={"/blog"}>Our blogs</Link> <br/>
                            <Link to={"/scholarship"}>Scholarship </Link> <br/>
                            <Link to={"/instructor"}>Our Instructor </Link> <br/>
                            <Link to={"/teacher"}>Join as a teacher</Link> <br/>
                            <Link to={"/cheack"}> Cheack your certificate </Link>
                        </div>
                    </div>
                </div>
                <div className={"col-md-3 col-sm-12"}>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
