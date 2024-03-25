import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGen7 from './reportGen7';
import { Link } from "react-router-dom";
import Sidebar from '../common/sidebar/sidebar'

export default function InquiryReport(){

    const[inquiry,setInquiry] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/api/feedback/inquiry/getallinquiries").then((res)=>{
            setInquiry(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])



    return(
        <>

        <Sidebar/> 

            <div>
                <div class="container">
                <center><h1> <b>All Customer Inquiries</b></h1></center><br /><br />
                <center><p>Click the button below to get all the customer Inquiries. </p></center><br />

                <Link to="/inquiries"><button class="btn btn-secondary btn-lg active" style={{marginRight:'5px'}} role="button" aria-pressed="true">Back</button></Link>
                <button class="btn btn-success btn-lg active" onClick={()=>{ReportGen7(inquiry)}} role="button" aria-pressed="true">Generate PDF</button>
                </div>
            </div>
        </>
    )

}