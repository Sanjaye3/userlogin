import React, {useEffect, useState} from "react";
import "./loginform.css"
import { NavLink ,useNavigate} from 'react-router-dom';
import {useFormik} from "formik";
import axios from "axios";




function RegisterForm() {
    // const formik = useFormik({
    //     initialValues:{ email:"sanjaye@gmail.com",password:"abcd",name:"sanjaye"},
    // })    
    const[email,setEmail] = useState(" ")
const[password,setPassword] = useState(" ")
const history = useNavigate();   
async function submit(e){
    e.preventDefault();
    try{
        await axios.post("http://localhost:9000/register",{
            email,password
        })


        .then(res => {
            if(res.data == "exist"){
                // history("/home",{state:{id:email}})
                alert("User already exists!")
            }
            else if(res.data =="notexist") {
                // alert("user have to sign up")
                history("/home",{state:{id:email}});
                console.log("correct");
                 
            }
        })
        .catch(e => {
            alert("wrong details")
            console.log(e);
        })
    }
    catch(e){

        console.log(e);

    }
}
    return (
        <div className="cover">
            <h1>Register</h1>
            {/* <input id="name" name="name"  value = {formik.values.name} onChange={formik.handleChange} type="text" placeholder="name" />
            <input id="email" name="email"  value = {formik.values.email} onChange={formik.handleChange} typetype="email" placeholder="email" />
            <input id="password" name="password"  value = {formik.values.password}  onChange={formik.handleChange}  type="password" placeholder="password" /> */}
            {/* <a href="/">Login</a> */}

            {/* <input id="name" name="name"   type="text" placeholder="name" /> */}
            <input id="email" name="email"   type="email" placeholder="email"  onChange={(e) => {setEmail(e.target.value)}} />
            <input id="password" name="password"   type="password" placeholder="password" onChange={(e) => {setPassword(e.target.value)}} />
            <div className="nlink">
            <NavLink to="/">Already have an account?Login here.</NavLink>
            </div>
            <div className="login-btn" onClick={submit} >Register</div>

           
            
        </div>
    )
}

export default RegisterForm