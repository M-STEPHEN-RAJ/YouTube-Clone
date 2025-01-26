import React, { useState } from 'react';
import './Explore.css';

const Explore = ({category, setCategory}) => {

  return (
    <div className='explore'>
      <div 
        className={`background ${category === 0 ? "e-active" : ""}`} 
        onClick={() => setCategory(0)}
      >
        <p>All</p>
      </div>
      <div 
        className={`background ${category === 20 ? "e-active" : ""}`} 
        onClick={() => setCategory(20)}
      >
        <p>Gaming</p>
      </div>
      <div 
        className={`background ${category === 2 ? "e-active" : ""}`} 
        onClick={() => setCategory(2)}
      >
        <p>Automobiles</p>
      </div>
      <div 
        className={`background ${category === 17 ? "e-active" : ""}`} 
        onClick={() => setCategory(17)}
      >
        <p>Sports</p>
      </div>
      <div 
        className={`background ${category === 24 ? "e-active" : ""}`} 
        onClick={() => setCategory(24)}
      >
        <p>Entertainment</p>
      </div>
      <div 
        className={`background ${category === 28 ? "e-active" : ""}`} 
        onClick={() => setCategory(28)}
      >
        <p>Technology</p>
      </div>
      <div 
        className={`background ${category === 10 ? "e-active" : ""}`} 
        onClick={() => setCategory(10)}
      >
        <p>Music</p>
      </div>
      <div 
        className={`background ${category === 22 ? "e-active" : ""}`} 
        onClick={() => setCategory(22)}
      >
        <p>Blogs</p>
      </div>
      <div 
        className={`background ${category === 25 ? "e-active" : ""}`} 
        onClick={() => setCategory(25)}
      >
        <p>News</p>
      </div>


      <div 
        className={`background ${category === 23 ? "e-active" : ""}`} 
        onClick={() => setCategory(23)}
      >
        <p>Comedy</p>
      </div>

      <div 
        className={`background ${category === 1 ? "e-active" : ""}`} 
        onClick={() => setCategory(1)}
      >
        <p>Film & Animation</p>
      </div>
      
      <div 
        className={`background ${category === 26 ? "e-active" : ""}`} 
        onClick={() => setCategory(26)}
      >
        <p>Style</p>
      </div>
      
        
    </div>
  );
};

export default Explore;
