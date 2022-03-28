import React, { useState } from "react";
import {useFormik} from "formik";
import {FaUserCircle,RiErrorWarningLine} from "react-icons/all"
import {Link} from "react-router-dom"
import "../../styles/Login.css";
import pic from "../../images/login.jpg";
const Login = () => {

const validate =values=>{
  const errors={}
  
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if(!values.password){
    errors.password ='Required'
  }
  else if(!((values.password.length >1 && values.password.length <=8) &&  /^[A-Za-z]\w{7,14}$/i.test(values.password) )){
    errors.password ='password associated with email address doesnot match'
  }
  return errors;

}
const formik =useFormik({
  initialValues:{
    email: '',
    password:''
  },
  validate,
  onSubmit:values=>{

  }
})
    return (
    <>
    
      <div className="form_control">       
        <div className="login">
            <form className="form_login"onSubmit={formik.handleSubmit} autoComplete="off" >
                <div className="form_head">
                    <h4>Already have an account</h4>
                    <p>login to continue</p>
                    <FaUserCircle className="login_icon "/>
                </div>
            <div className="form_input">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                placeholder="Email id:"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                required
              />
              {formik.errors.email ? <div>{formik.errors.email} {<RiErrorWarningLine />}</div> :null}
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password"
                id="epass"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                required
              />
              {formik.errors.password ? <div>{formik.errors.password} {<RiErrorWarningLine />}</div> :null}
            </div>
            
            <div className="button">
                <button className="form_btn">Login</button>
            </div>
            <div className="login_footer">
              or<br/>
            <Link to="/signupform" className="footer_link" > Create an account</Link>
            </div>
            

            </form>
            <div >
              <img src ={pic}alt="img" className="image"/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;
