import React from 'react'
import formImg from "../assets/img/fromImg.png"
const Registration = () => {

return (
    <>
    <div className="container mt-5 ">
        <div className="card">
            <div className="card-body p-5 ">
                <h1>Create a new account</h1>
                <div className="row">
                    <div className="col-md-6 mt-5 ">
                        <div className="col-sm-12">
                            <input placeholder='First name' 
                            style={{
                                width:"70%",
                                height:"50px",
                                outline:"none",
                                padding:"20px",
                                border:"1px solid black ",
                                borderRadius:"7px",
                            }}
                            type="text" name="fName" id="fName" />
                        </div>
                        <div className="col-sm-12 mt-3 ">
                        <input placeholder='Last name' 
                            style={{
                                width:"70%",
                                height:"50px",
                                outline:"none",
                                padding:"20px",
                                borderRadius:"7px",
                                border:"1px solid black "

                            }}
                            type="text" name="lName" id="fName" />
                        </div>
                        <div className="col-sm-12 mt-3 ">
                            
                        <input placeholder='Email' 
                            style={{
                                width:"70%",
                                height:"50px",
                                outline:"none",
                                padding:"20px",
                                borderRadius:"7px",
                                border:"1px solid black "

                            }}
                            type="email" name="email" id="email" />
                        </div>
                        <div className="col-sm-12 mt-3 ">
                        <input placeholder='Country' 
                            style={{
                                width:"70%",
                                height:"50px",
                                outline:"none",
                                padding:"20px",
                                borderRadius:"7px",
                                border:"1px solid black "

                            }}
                            type="text" name="country" id="country" />
                        </div>
                        <div className="col-sm-12 mt-3 ">
                        <input placeholder='Phone number' 
                            style={{
                                width:"70%",
                                height:"50px",
                                outline:"none",
                                padding:"20px",
                                borderRadius:"7px",
                                border:"1px solid black "

                            }}
                            type="number" name="phone" id="phone" />
                            </div>
                        <div className="col-sm-12 mt-3 ">
                            <input placeholder='Password' 
                            style={{
                                width:"70%",
                                height:"50px",
                                outline:"none",
                                padding:"20px",
                                borderRadius:"7px",
                                border:"1px solid black "

                            }}
                            type="password" name="password" id="password" />

                        </div>
                    
                        <div className="col-sm-12 mt-3 ">
                            <label>
                                <input type="checkbox" id="terms" name="terms" required />
                                    <span className='mx-2' > I agree to the terms & conditions</span>
                            </label><br /><br />
                        </div>
                        <div className="col-sm-12 beforeText " >
                            <button className='btn btn-primary ' >Sign Up</button>
                        </div>
                    </div>
                    <div className="col-md-6" style={{marginTop:"47px"}} >
                        <img src= {formImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Registration
