import React, { useState } from 'react';
import About from '../Components/About';
import UserLogin from '../User/UserLogin';
import UserSign from '../User/UserSign';
import AdminLogin from '../Admin/AdminLogin';
import AdminSign from '../Admin/AdminSign';
import './../Components/Style/Home.css';
import Navigation from './Navigation';
import {Link} from "react-router-dom";
function Home() {
  const [FormType, setFormType]  = useState(<UserLogin/>);
  function usersignup(){
    setFormType(<UserSign/>) 
  };

  function userlogin(){
    setFormType(<UserLogin/>) 
  };

  function Adminlogin(){
    setFormType(<AdminLogin/>) 
  };

  function AdminSignup(){
    setFormType(<AdminSign/>) 
  };
  return (
    <>
    
    <nav id="admin-page-nav-container-my-nav">
<div id="logo-of-the-rental-car-app">
    <img src="https://img.freepik.com/premium-vector/car-rental-logo-template-design_316488-1614.jpg?w=2000" id="img-logo" />
    <span id="name-of-the-app-rental-car-app">AVIS Rental Cars</span>
</div>
<Link to="/Aboutus" ><button id="logout-admin-page-butn-admin" >About us</button></Link>
</nav>

      <div className='Home-page'>
         
        <div className='Register'>
        <p className='slogan-of-the-home-page'><b> Enjoy your holidays with our wheels. </b></p> 
          <div className='user'>
            <p><h2><b><u>User</u></b></h2></p>
            <div className="button-user-admin-login-containecr">
            <button className="button-50" onClick={userlogin}> User Login </button>
            <button className="button-50" onClick={usersignup}> User Sign Up</button>
            </div>
          </div>
          <div className='Admin'>
            <p><h2><b><u>Admin</u></b></h2></p>
            <div className="button-user-admin-login-containecr">
            <button className="button-50" onClick={Adminlogin}>Admin login</button>
            <button className="button-50" onClick={AdminSignup}>Admin Sign Up</button> 
            
            </div>
          </div>
        </div>   
        <div className='form-type'>
          {FormType}
        </div>
      </div>     
    </>
  )
}


export default Home;