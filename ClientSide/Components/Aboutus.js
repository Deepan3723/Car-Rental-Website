
import React from 'react';
import  "../Components/Style/Aboutus.css";
//import About from '../Components/About';
// eslint-disable-next-line
import {Link} from "react-router-dom";
//import Home from "../Components/Home";

import { useNavigate } from "react-router-dom";

export default function AdminpageNav(){
    const Navigater = useNavigate();
    function logoutFunc(){
        localStorage.clear();
        Navigater("/")
    }
return<>
<nav id="admin-page-nav-container-my-nav">
<div id="logo-of-the-rental-car-app">
    <img src="https://img.freepik.com/premium-vector/car-rental-logo-template-design_316488-1614.jpg?w=2000" id="img-logo" />
    <span id="name-of-the-app-rental-car-app">AVIS Rental Cars</span>
</div>
<Link to="/" ><button id="logout-admin-page-butn-admin" >Home</button></Link>
</nav>
<div className="about">
        <h2><u>About us</u></h2>
        <div>
        <div className='aboutcar' >
            <pre></pre>
        <p>* We are AVIS Rental Cars. Founded in 1969, AVIS Rental Cars is India's most distinguished rental car company.
           We provide customers with approximately 850 locations and 42,000 vehicles throughout India.</p>
        <p>* As we are not affiliated with any specific automaker, we are able to provide a variety of vehicle makes and models for customers to rent.
           Rather than let vehicles age, we also replace our most popular passenger vehicles every few years.</p>
        <p>* Replacing used vehicles eliminates uncomfortable wear and tear, and reduces the risk of breakdown and other inconveniences to our customers.
           The most trusted name in vehicle rentals.</p>
           </div>
           </div>
        </div>
        <div>
        </div>
</>
};

