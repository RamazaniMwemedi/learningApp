import React from 'react';
import './About.css';
import Footer from './Footer';
import onlineEducation from "../Images/online-education.jpg";
import Students from "../Images/Students.png";
import liz from"../Images/liz.png";
import tayar from "../Images/tayar.jpg";
import chan from "../Images/chan1.jpg";
import abri from "../Images/abri.jpg";
import Nav from './Nav';


// const onlineEducation = new URL("../Images/online-education.jpg", import.meta.url);
// const Students = new URL("../Images/Students.png", import.meta.url);
// const Person = new URL("../Images/Person.jpg", import.meta.url);



const About = () => {
  return (
    <>
      <Nav/>
    <div class="about">
      <div>
      <h1 className='header'>ABOUT US</h1><br></br>
      <h2 className='header2'>Welcome to course correct </h2><br></br>
      <p className='main'>We are the Italanta technology community our mission<br></br>
        is to transform the CBC refugee students to be able to<br></br>
        learn through the modern technology.And we do that by <br></br>
        providing an online platform for refugees to learn And<br></br>
       improve their skills.This program is open for kids from PP1,<br></br>
        PP2 and PP3.
      </p>
      </div>
      <div>
      <img className='img-about' src={onlineEducation} alt=""></img>
      </div>
    </div><br></br>
    <div className='mission'>
    <img className='img-mission' src={Students} alt=""></img>
    <div >
      <h1 className='part-1'>OUR MISSION</h1>
     <p className='note-0'>We aim to empower refugees by teaching <br></br>
     them the necessary knowledge and skills<br></br> 
     for easy reading and understanding </p>
     </div>
      <div>
     <h1 className='part-2'>OUR VISION</h1>
      <p className='note'>We believe in an IT world where everyone<br></br>
       has access to open knowledge and open <br></br>
       education, in order to participate actively <br></br>
       in society.</p>

    </div>
    </div><br></br>
    <div className='us'>
    <h1 className='team'>OUR TEAM</h1>
      <div className='members'>
        <img className='liz'src={liz} alt=""></img>
       <img className='abri'src={abri} alt=""></img>
        <img className='tayar'src={tayar} alt=""></img>
        <img className='chan'src={chan} alt=""></img>
        
      </div> 
      <div className='line-one'>
        <h3 className='aljabana'>Aljabana Elizabeth</h3>
      <h3 className='yusif'>Abri Yusif Samana</h3>
      <h3 className='chuol'>Chuol Tayar</h3>
      <h3 className='peter'>Peter Chan</h3>
      </div>
       </div>

      <Footer/>

    </>

    
  )
}

export default About