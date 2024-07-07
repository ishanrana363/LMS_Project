import React from 'react';
import logo from "../../assets/img/Q-Learn.png";
import en from "../../assets/img/English.png"
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { IoCartSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./../../assets/css/style.css"

const Header = () => {
  return (
    <div>
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
                        <NavLink className="nav-link"   to="">Login</NavLink>
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
                          <NavLink className="nav-link"   to="">Registration</NavLink>
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
    </div>
  );
};

export default Header;
