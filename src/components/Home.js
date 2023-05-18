import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import "./Home.css";
import NavLink from 'react-router-dom';


function HomeForm(){

    const location = useLocation()

    return(
        <div className="home">

            <h1 class="welcome">hello {location.state.id}  </h1>
            {/* <NavLink to="/register">Logout</NavLink> */}
             
            <form>

                <input type="text" placeholder="Name"></input><br>
                </br>
                <br></br>
                <input type="number" placeholder="age"></input>
                <br></br>
                <br></br>
           
            </form>
        </div>
    )
}

 export default HomeForm