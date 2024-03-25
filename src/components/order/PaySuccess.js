import React, { Component } from 'react';
//import {Form,Button,Carousel,FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../../css/CardPay.css';
import BG from '../../images/2.webp';
import swal from 'sweetalert';
import {FaCheckCircle} from 'react-icons/fa';

const PaySuccess = () => {

    return (

      <div className="App" >
        <center>
          <img className="bg-img" src={BG} alt='bg img' />
        </center>

        <h1 className="topic" style={{ textAlign: 'center' }}><b><FaCheckCircle size="40px" color="green" />Your Order Process Is Completed. Delivery has started. </b></h1>
        <br />
        <h4 style={{ textAlign: 'center' }}>Thank You for joining with Us.</h4>
        <div className="col-12 mt-5">
          <center>
            <form>
              <div className="form-group">
                <Link to={"/home2" } style={{ textAlign: 'center' }} className="btn btn-warning btn-lg" role="button" ><span>Continue Shopping</span></Link>
              </div><br />
            </form>
          </center>
        </div>
      </div>

    );
}
export default PaySuccess;

