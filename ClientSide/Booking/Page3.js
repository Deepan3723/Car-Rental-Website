import React from 'react';
// eslint-disable-next-line
import Navigation from '../Components/Navigation';
import NavLogout from './NavLogout';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line
import { useState,useContext } from 'react';
import { CarContextDetails } from '../Context/CarContext';
import '../Components/Style/page3.css';
import Home from '../Components/Home';

 function Page3(){
  const TokenUser= JSON.parse(localStorage.getItem("token-user"))
    const {setheaderData,inputdata,setInputData}=useContext(CarContextDetails);
    const navigate = useNavigate();
    
      const handleInput = ( e ) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputData( { ...inputdata, [name]: value } );
      }
      const save = (e)=>{
        e.preventDefault();
        const {origin,destination,startDate,endDate}=inputdata;
        const data = new FormData();
        data.append("origin",origin);
        data.append("destination",destination)
        data.append("startDate",startDate)
        data.append("endDate",endDate)
        console.log(inputdata);
        navigate('/orderpage')
      }
setheaderData(inputdata);

return(<>
{TokenUser?<>
  <NavLogout/>
    <div id="parent" >
    <h1 id="welcome">W E L C O M E !!</h1>
<div id='container'>

<h1 id="quote"> " Enter your trip details "</h1>
<form id="forms" onSubmit={save}>

  <input type="text" placeholder='Origin Place' className='Fields'
     name="origin"required onChange={handleInput}></input>
     
   <input type="text" placeholder='Destination Place' className="Fields" required
    name="destination"onChange={handleInput} ></input>

  <input type="date" placeholder='Starting Date' className="Fields" required
     name="startDate" onChange={handleInput}></input>

  <input type="date" placeholder='End Date' className="Fields" required
     name="endDate" onChange={handleInput}></input>

  <button type="submit" className="Fields" id="modifybtn">Save</button>
</form>
</div>
</div>
</>
:
<Home/>
}
</>
 )}
 export default Page3;
