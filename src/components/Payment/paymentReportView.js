import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGen10 from './reportGen10';
import { Link } from "react-router-dom";
import Sidebar from '../common/sidebar/sidebar'

export default function PaymentReport(){

    const[payment,setPayment] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/api/payment/payment/getallpayments").then((res)=>{
            setPayment(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])



    return(
        <>

        <Sidebar/> 

            <div>
                <div class="container">
                <center><h1> <b>All Payments</b></h1></center><br /><br />
                <center><p>Click the button below to get all payment details report. </p></center><br />

                <Link to="/Payments"><button class="btn btn-secondary btn-lg active" style={{marginRight:'5px'}} role="button" aria-pressed="true">Back</button></Link>
                <button class="btn btn-success btn-lg active" onClick={()=>{ReportGen10(payment)}} role="button" aria-pressed="true">Generate PDF</button>
                </div>
            </div>
        </>
    )

}