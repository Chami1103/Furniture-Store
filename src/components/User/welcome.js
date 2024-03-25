import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../common/sidebar/sidebar'
import {RiAdminFill} from 'react-icons/ri'
import {FaChartLine,FaCreditCard,FaUsers, FaHandsHelping} from 'react-icons/fa'
import {BiSolidCategory, BiSolidCar} from 'react-icons/bi'
import {BsCartFill} from 'react-icons/bs'



function Welcome() {
    return (
        <>
            <Sidebar/>
            <section id="team" class="team section-bg">
                <div data-aos="fade-up">

                    <h2 className="cateTopic">Dashboard</h2>

                    <div class="row">


                    {/* <div class="col-lg-4 mt-4 mt-lg-0 p-4" data-aos="zoom-in" data-aos-delay="200">
                        <div class="member d-flex align-items-start">
                        <div class="pic"><img src="img/customer.png" class="img-fluid" alt=""/></div>
                        <div class="member-info">
                            <h4>Customer Management</h4>
                            <span>Product Manager</span>           
                        </div>
                        </div>
                    </div> */}
                
                    </div>
                    </div>
                </section>

                        <React.Fragment>
                                <div className="row" id="home-row">
                                    
                                    <div className="col-lg-3 mt-2 mt-lg-0 p-4">
                                    <div class="card" >
                                    
                                        <div className="card-body">
                                        <RiAdminFill size="85px" />
                                            <h5>Customer Management</h5>         
                                            <Link className="btn btn-primary" to={'/all-customers' }>Click Here</Link>
                                        </div>
                                    </div>
                                   </div>


                                    <div className="col-lg-3 mt-2 mt-lg-0 p-4">
                                    <div className="card" >
                                    
                                        <div className="card-body">
                                        <BsCartFill size="85px"/>
                                            <h5 className="card-title">Order Management</h5>
                                            <Link className="btn btn-primary" to={'/orders'}>Click Here</Link>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="col-lg-3 mt-2 mt-lg-0 p-4">
                                    <div className="card" >
                                        
                                        <div className="card-body">
                                        <BiSolidCategory size="85px"/>
                                            <h5 className="card-title">Catalogue Management</h5>
                                            <Link className="btn btn-primary ml-0" to={'/categories' }>Click Here</Link>
                                        </div>
                                    </div>
                                    </div>
                                    

                                    <div className="col-lg-3 mt-2 mt-lg-0 p-4">
                                    <div className="card" color="red" >  
                                        <div className="card-body">
                                        <FaChartLine size="85px"/>
                                            <h5 className="card-title">Inventory Management</h5>           
                                            <Link className="btn btn-primary ml-0" to={'/inventory' }>Click Here</Link>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="col-lg-3 mt-2 mt-lg-0 p-4">
                                    <div className="card" color="red" >
                                        
                                        <div className="card-body">
                                        <FaUsers size="85px"/>
                                            <h5 className="card-title">Staff Management</h5>           
                                            <Link className="btn btn-primary ml-0" to={'/employee-list' }>Click Here</Link>
                                        </div>
                                   </div>
                                   </div>

                                    
                                   <div className="col-lg-3 mt-2 mt-lg-0 p-4">
                                   <div className="card" >
                                        
                                        <div className="card-body">
                                        <FaCreditCard size="85px"/>
                                            <h5 className="card-title">Payment Management</h5>
                                            <Link className="btn btn-primary ml-0" to={'/payments' }>Click Here</Link>
                                        </div>
                                    </div>
                                    </div>

                                   <div className="col-lg-3 mt-2 mt-lg-0 p-4">
                                   <div className="card" >
                                        
                                        <div className="card-body">
                                        <BiSolidCar size="85px"/>
                                            <h5 className="card-title">Delivery Management</h5>
                                            <Link className="btn btn-primary ml-0" to={'/driver-list' }>Click Here</Link>
                                        </div>
                                    </div>
                                    </div>

                                   <div className="col-lg-3 mt-2 mt-lg-0 p-4">
                                   <div className="card" >
                                        
                                        <div className="card-body">
                                        <FaHandsHelping size="85px"/>
                                            <h5 className="card-title">Customer Care Management</h5>
                                            <Link className="btn btn-primary ml-0" to={'/all-customers' }>Click Here</Link>
                                        </div>
                                    </div>
                                    </div>

                                </div>
                            
                        </React.Fragment>


        </>
    );
}

export default Welcome; 
