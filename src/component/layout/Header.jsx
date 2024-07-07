import React, { useState } from 'react';
import logo from "../../assets/img/Q-Learn.png";
import en from "../../assets/img/English.png"
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { IoCartSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./../../assets/css/style.css";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";  

const Header = () => {
  const [toggle,isToggle] = useState(false);
  return (
      <>
        <div className='container-fluid p-2 shadow'>
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-2">
                <img style={{ width: "200px", height: "50px" }} src={logo} alt="Logo" />
              </div>
              <div className="col-5">
                <input
                  placeholder='Search'
                  style={{
                    height: "50px",
                    borderRadius: "50px",
                    marginLeft: "100px",
                    padding: "10px 20px",
                    outline: "none",
                    border: "2px solid black",
                    color: "red",
                  }}
                  type="text"
                />
                <button className='btn' style={{ border: "none", marginBottom: "10px" }}>
                  <FaSearch />
                </button>
              </div>
              <div className="col-5 mb-2  " style={{fontSize:"30px"}} >
                  <span className="">
                    <span>
                      <button style={{zIndex:"100"}} type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Cart">
                        <i> <IoCartSharp/> </i>
                      </button>
                    </span>
                    <span className=" mx-3"  >
                      <button style={{zIndex:"100"}} type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Notification">
                        <i> <IoMdNotificationsOutline/> </i>
                      </button>
                    </span>
                    <span className=" mx-3"  >
                      <button 
                        style={{
                          zIndex:"100",
                          color:"#F5DEB3",
                          fontWeight:"700",
                          fontSize:"17px"
                        }} 
                          type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Login">
                          <NavLink className="nav-link"   to="/login">Login</NavLink>
                      </button>
                      
                    </span>
                    <span>
                      <button 
                          style={{
                            zIndex:"100",
                            color:"black",
                            fontWeight:"700",
                            fontSize:"17px",
                          }} 
                            type="button" className="btn animated-button " data-bs-toggle="tooltip" data-bs-placement="top" title="Registration">
                            <NavLink className="nav-link"   to="/registration">Registration</NavLink>
                        </button>
                    </span>
                    <span className='mx-3' >
                      <img src={en} alt="" />
                    </span>
                    <span>
                      <span style={{
                        color:"green",
                        fontSize:"16px",
                        fontWeight:900,
                        cursor:"pointer"
                      }} >
                        EN
                      </span>
                    </span>
                  </span>
            </div>
            </div>
          </div>
        </div>

        <div  className=" header   sticky-top mt-5  ">
          <div className="container menubar ">
            <div className="logo">
              <NavLink to={"/"} >
                <img style={{ width: "200px", height: "50px" }} src= {logo} alt="loding" />
              </NavLink>
            </div>
            <div className="menuList">
              <nav>
                <ul className={ toggle ? "open" : "" } >
                  <li>
                    <NavLink title='home' to={"/"}  >Home</NavLink>
                  </li>
                  <li>
                    <NavLink title='course' to={"/course"}  >Course</NavLink>
                  </li>
                  
                  <li>
                    <NavLink title='Instructor' to={"/instructor"}  >Instructor</NavLink>
                  </li>
                  <li>
                    <NavLink title='Start learning' to={"/learning"}  >Start learning</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div onClick={()=>{isToggle(!toggle)}} className="toggle">
              {
                toggle ?<button type='btn' ><IoClose /></button> : <button type='btn' ><IoMenuSharp /></button>
              }
              
            </div>
          </div>
        </div>
    </>
  );
};

export default Header;
