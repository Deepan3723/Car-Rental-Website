import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../Components/Style/navLog.css';
import {Link} from "react-router-dom";


const About = () => {
///const navigate = useNavigate();
  return (
    <>
  <nav id="aboutus">
  
<div >
<Link to="/Aboutus" ><button id="logout-admin-page-butn-admin" >About us</button></Link>
</div>
</nav>
 </>
  )
}

export default About;