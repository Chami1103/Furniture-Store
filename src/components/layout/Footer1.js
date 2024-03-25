import React, { Fragment } from 'react'
//import SiMastercard from 'react-icons/si'
import {FaCcVisa} from 'react-icons/fa';
import {FaCcMastercard} from 'react-icons/fa';
import {SiAmericanexpress} from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer1 = () => {
    return (
        <Fragment>
            <footer class="footer1">
                <div class="footer1-container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>Our company</h4>
                            <div>
                              <img src="/images/logo.png" width={175} height={65}/>
                            </div><br/>
                            
                            
                               <p>
                                Introducing Furny <br/>
                                Your ultimate destination for exquisite<br/>
                                high-quality furniture.
                              
                               </p>
                            <p>
                               Discover the perfect blend of style <br/>
                               and comfort exclusively for you.<br/>
                               Explore ShopIt today<br/>
                               and transform your living spaces with elegance and flair.
                            </p>
                        </div>
                        <br/>
                        <div class="footer-col">
                            <h4>Explore</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Feedback</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Favourits</h4>
                            <ul>
                                <li><a href="#">Most popular</a></li>
                                <li><a href="#">Latest Products</a></li>
                            </ul>
                                <br/>
                                <h4 class="footer-col">Stay Connected</h4>

                                <p >Join with us to get an amazing shopping experience.</p><br/>
                              <Link to="/signup"><button type="button" class="btn btn-light"><b>SIGN UP</b></button></Link>   
                            
                        </div>


                        <div class="footer-col">
                            <h4>follow us</h4>
                           <div className="social-links">
                                <a href="www.facebook.com"><i class="fab fa-facebook-f"></i></a>
                                <a href="www.twitter.com"><i class="fab fa-twitter"></i></a>
                                <a href="www.intagam.com"><i class="fab fa-instagram"></i></a>
                                <a href="www.linkdin.com"><i class="fab fa-linkedin-in"></i></a>


                            </div> 
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h4>Payment methods</h4>
                            <div className="social-links">
                                
                                
                                <a href=""><FaCcVisa size='20px'/></a>
                                <a href=""><FaCcMastercard size='20px'/></a>
                                <a href=""><SiAmericanexpress size='20px'/></a>

                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="py-1">
                  <p className=" text-center mt-2 ml-5">
                  © 2023 Furny - All Rights Reserved.
                   </p>
               </div>
            </footer>

        </Fragment>
    )
}

export default Footer1;
