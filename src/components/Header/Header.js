import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <navbar>
            <NavLink className="header-nav"
            to="/home"
        activeStyle={{
         fontWeight: "bold",
           color: "red"
            }}
        >
     Home
    </NavLink>
            <NavLink className="header-nav"
            to="/about"
        activeStyle={{
         fontWeight: "bold",
           color: "red"
            }}
        >
     About
    </NavLink>
            <NavLink className="header-nav"
            to="/services"
        activeStyle={{
         fontWeight: "bold",
           color: "red"
            }}
        >
     Services
    </NavLink>
    
            <NavLink className="header-nav"
            to="/servicedetails"
        activeStyle={{
         fontWeight: "bold",
           color: "red"
            }}
        >
     ServiceDetails
    </NavLink>
   
      

            
           
       </navbar>   
            <div class="hero-image">
          <div class="hero-text">
            <h1 style={{fontSize:"4rem"}}>Our Language Learning Team </h1>
            <p class="card-text fs-4">Language learning is an active process that begins at birth and continues throughout life.   </p>
            <button class="button draw-border p-3 header-button">SIGN UP</button>
          </div>
        </div>
              
        </div>
    );
};

export default Header;