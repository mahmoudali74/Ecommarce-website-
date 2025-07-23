import'./slide.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Slider= () => {
  return (
   <>
   <Carousel>
   <div style={{height:"30%",width:'100%'}}>
       <img src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400" />
   
   </div>
   <div style={{height:"40%",width:'80%'}}>
       <img src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=400" />
      
   </div>
   <div style={{height:"40%",width:'80%'}}>
       <img src="assets/3.jpeg" />
     
   </div>
</Carousel></> 
   
  );
};

export default Slider;
