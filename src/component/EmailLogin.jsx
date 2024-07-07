import React from 'react'
import {Link} from "react-router-dom";

const EmailLogin = () => {
  return (
    <>
        <div className="container footer mt-4 ">
            <div className="row justify-content-center ">
                <div className="col-md-7 col-lg-6 ">
                    <div style={{boxShadow:" 0 4px 8px rgba(0, 0, 0, 0.2)"}} className="card w-90 p-4">
                        <div className="card-body">
                            <label className={"animated fadeInRight "} htmlFor="email">Enter your email : </label> <br/>
                            <input className="form-control mt-3 animated fadeInLeft "
                                   type="email" name="email" id="email" placeholder='Email'/>
                            <label className={"animated fadeInLeft mt-1 "} htmlFor={"password"}>Enter your password
                                : </label> <br/>
                            <input type="password" className={"form-control animated fadeInRight mt-3 "}
                                   name="password" id="password" placeholder='Password'/>
                            <div className={"float-right mt-4 "}>
                                <button type="submit" className="btn text-white animated-btn1  ">Login</button>
                                <Link className={"mx-5 animated fadeInRight "} to={"/forget-password"}>Forget
                                    Password</Link>
                            </div>
                            <div className={"account mt-3 "}>
                                <span className={"float-left"}>
                                    <p>Don't have an account?<Link className={"mx-1"}
                                                                   to={"/registration"}>Sign up</Link></p>

                                </span>
                            </div>
                            <div className={"socialLogin text-center  "}>
                                <Link className={"text-black animated font-monospace"} to={""}>Login with google
                                    account</Link> <br/>
                                <Link className={"text-black font-monospace "} to={""}>Login with facebook
                                    account</Link> <br/>
                                <Link className={"text-black font-monospace fs-5 "} to={""}>Login with github
                                    account</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default EmailLogin
