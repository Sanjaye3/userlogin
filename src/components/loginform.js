import React, {useEffect, useState} from "react";
import "./loginform.css";
import { NavLink ,useNavigate} from 'react-router-dom';
import axios from "axios"
function LoginForm() {
    const[email,setEmail] = useState(" ")
    const[password,setPassword] = useState(" ")
    const history = useNavigate();


    async function submit(e){
    e.preventDefault();
    try{
        await axios.post("http://localhost:9000/",{
            email,password
        })
        .then(res => {
            if(res.data =="exist"){
                console.log("loggingin-sanjaye");
                history("/home",{state:{id:email}});
                // history("/home")
            }
            else if(res.data == "notexist"){
                alert("user have to sign up");
                console.log('not exist')
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
            <h1>Login</h1>
            <form action="#" method="post">
            <input type="email" placeholder="email" onChange={(e) => {setEmail(e.target.value)}} />
            <input type="password" placeholder="password"  onChange={(e) => {setPassword(e.target.value)}} />
            {/* <a href="/register">register</a */}
            </form>
            <div className="nlink">
            <NavLink to="/register">Don't have an account?Sign up here.</NavLink>
            </div>
            <div className="login-btn" onClick={submit} >Login</div>

           
            
        </div>
    )
}

export default LoginForm