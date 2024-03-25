import React from 'react';
import '../../css/about.css';
import { Link } from 'react-router-dom';

function About(){
     
    return(
      
     <>
        <div class="wra">
    
            <div class="background-container">
                <div class="bg-1"></div>
                <div class="bg-2"></div>
        
            </div>
            <div class="about-container">
                
                <div class="image-container">
                    <img src="https://cdn.dribbble.com/users/2424870/screenshots/9681857/media/e2ba35a0106e60cb0960f3963304cef8.gif" alt="" />
                    
                </div>
    
                <div class="text-container">
                    <h1>About us</h1>
                    <p><b>We are Furny and this is a Online Furniture Store.You can Join with us. You can choose and buy any category type of furniture in our online mart. We are Furny Group. Colombo 7, Sri Lanka.</b></p>
                     <Link to='/home2'>Back To Page</Link>
                </div>
                
            </div>
        </div>
        
     </>
    )
}
export default About;