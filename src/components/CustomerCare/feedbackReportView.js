import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGen11 from './reportGen11';
import { Link } from "react-router-dom";
import Sidebar from '../common/sidebar/sidebar'

export default function FeedbackReport(){

    const[feedback,setFeedback] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/api/feedback/feedback/getallfeedbacks").then((res)=>{
            setFeedback(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    return(
        <>
        <Sidebar/> 
            <div>
                <div class="container">
                <center><h1> <b>All Customer Feedbacks</b></h1></center><br /><br />
                <center><p>Click the button below to get all the customer feedbacks. </p></center><br />

                <Link to="/feedbacks"><button class="btn btn-secondary btn-lg active" style={{marginRight:'5px'}} role="button" aria-pressed="true">Back</button></Link>
                <button class="btn btn-success btn-lg active" onClick={()=>{ReportGen11(feedback)}} role="button" aria-pressed="true">Generate PDF</button>
                </div>
            </div>
        </>
    )

}