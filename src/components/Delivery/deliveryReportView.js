import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGen6 from './reportGen6';
import { Link } from "react-router-dom";
import Sidebar from '../common/sidebar/sidebar'

export default function DeliveryReport(){

    const[delivery,setDelivery] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/api/delivery/delivery/getalldeliveries").then((res)=>{
            setDelivery(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])



    return(
        <>

        <Sidebar/> 

            <div>
                <div class="container">
                <center><h1> <b>All Deliveries</b></h1></center><br /><br />
                <center><p>Click the button below to get all delivery details report. </p></center><br />

                <Link to="/all-deliveries"><button class="btn btn-secondary btn-lg active" style={{marginRight:'5px'}} role="button" aria-pressed="true">Back</button></Link>
                <button class="btn btn-success btn-lg active" onClick={()=>{ReportGen6(delivery)}} role="button" aria-pressed="true">Generate PDF</button>
                </div>
            </div>
        </>
    )

}