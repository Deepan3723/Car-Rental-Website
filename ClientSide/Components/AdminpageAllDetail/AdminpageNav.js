import React from "react";
import "../Style/AdminPagenav.css";
import { useNavigate } from "react-router-dom";

export default function AdminpageNav(){
    const Navigater = useNavigate();
    function logoutFunc(){
        localStorage.clear();
        Navigater("/");
    }
return<>
<nav id="admin-page-nav-container-my-nav">
<div id="logo-of-the-rental-car-app">
    <img src="https://img.freepik.com/premium-vector/car-rental-logo-template-design_316488-1614.jpg?w=2000" id="img-logo" />
    <span id="name-of-the-app-rental-car-app">AVIS Rental Cars</span>
</div>
<button id="logout-admin-page-butn-admin" onClick={logoutFunc} >Logout</button>
</nav>
</>
}