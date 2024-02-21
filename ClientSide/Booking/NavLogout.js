import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../Components/Style/navLog.css';
import { navigate, useNavigate,Link } from "react-router-dom";

const NavLogout = () => {
const navigate = useNavigate();
  return (
    <>
  <nav id="admin-page-nav-container-my-nav">
  <div id="logo-of-the-rental-car-app">
    <img src="https://img.freepik.com/premium-vector/car-rental-logo-template-design_316488-1614.jpg?w=2000" id="img-logo" />
    <span id="name-of-the-app-rental-car-app">AVIS Rental Cars</span>
</div>
<div>
<Link to="/Existbookings" ><button id="logout-admin-page-butn-admin"  >Mybooking</button></Link>
<Link to = "/"><button id="logout-admin-page-butn-admin" onClick={()=>localStorage.clear()} >Logout</button></Link>
</div>
</nav>
 </>
  )
}

export default NavLogout;