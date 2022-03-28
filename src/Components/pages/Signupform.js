import React from "react"
import {useFormik} from "formik";
import {AiFillCheckCircle,RiErrorWarningLine} from "react-icons/all"
import "../../styles/Signup.css";
import Aftersignuplogin from "./aftersignuplogin";
const validate =values =>{
    const errors={};
    if (!values.uname ) {
        errors.uname = 'Required';
      }else if (!( values.uname.length <15 && values.uname.length >=3)) {
        errors.uname = 'Must be 15 characters or more than 3 characters';
      }
      

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

    if(!values.phone){
      errors.phone ='Required';
    } 
    else if(!(values.phone.length !== 10)){
      errors.phone ='please enter valid contact number'
    }
    if(!values.password){
      errors.password ='Required'
    }
    else if(!((values.password.length >1 && values.password.length <=8) &&  /^[A-Za-z]\w{7,14}$/i.test(values.password) )){
      errors.password ='password must be of 8 characters'
    }
      
    if(!values.cpassword){
      errors.cpassword ='Required'
    }
    else if(values.password !== values.cpassword){
      errors.cpassword='Password doesnot match'
    }
    return errors;  

}


const Signupform =()=>{

    const formik = useFormik({
        initialValues: {
          uname:'',  
          email: '',
          password:'',
          cpassword:'',
          phone:'',
        },
        validate,
        onSubmit: values => {
          // alert(JSON.stringify(values, null, 2));
          // history.push("/aftersignuplogin");
        },
      });
      return (
        <div className="form_component">  
          <div className="signup_form">
        <form onSubmit={formik.handleSubmit} className="form" >
        <div className="heading">
          <h4>New here ?<span>Sign up</span></h4>
        </div>
        
         <div className="signupform_input">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                placeholder="FullName"
                id="name"
                name="uname"
                value={formik.values.uname}
                onChange={formik.handleChange}
                
              />
              <small>
              {formik.errors.uname ? <div>{formik.errors.uname} {<RiErrorWarningLine />} </div> : null}
              </small>
             
            </div>
            <div className="signupform_input">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                placeholder="Email id:"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <small>
              {formik.errors.email ? <div>{formik.errors.email} {<RiErrorWarningLine />}</div> :null}
              </small>
            </div>
            <div className="signupform_input">
              <label htmlFor="epass">Password</label>
              <input
                type="password"
                placeholder="password"
                id="epass"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                required
              />
              <small>  {formik.errors.password ? <div>{formik.errors.password} {<RiErrorWarningLine />}</div> : null}</small>
            </div>
            <div className="signupform_input">
              <label htmlFor="epass">Confirm password</label>
              <input
                type="password"
                placeholder="password"
                id="epass"
                name="cpassword"
                value={formik.values.cpassword}
                onChange={formik.handleChange}
                required
              />
              <small> {formik.errors.cpassword ? <div>{formik.errors.cpassword} {<RiErrorWarningLine />}</div> :null}</small>
              
            </div>
            <div className="signupform_input">
              <label htmlFor="phone">Contact number</label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                required
              />
              <small>
              {formik.errors.phone ? <div>{formik.errors.phone} {<RiErrorWarningLine />}</div> :null}
              </small>
            </div>
            <div className="signup_button">
                <button type="submit" className="form_btns">Register</button>
            </div>
          
        </form>
        </div>
      </div>  
      );
}

export default Signupform;