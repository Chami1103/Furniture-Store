import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGen2 from './reportGen2';
import { Link } from "react-router-dom";
import Sidebar from '../common/sidebar/sidebar'

export default function OrderReport(){

    const[order,setOrder] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/api/order/order/getallorders").then((res)=>{
            setOrder(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])



    return(
        <>

        <Sidebar/> 

            <div>
                <div class="container">
                <center><h1> <b>All Furniture Orders</b></h1></center><br /><br />
                <center><p>Click the button below to get all the details about all orders from our online store. </p></center><br />

                <Link to="/orders"><button class="btn btn-secondary btn-lg active" style={{marginRight:'5px'}} role="button" aria-pressed="true">Back</button></Link>
                <button class="btn btn-success btn-lg active" onClick={()=>{ReportGen2(order)}} role="button" aria-pressed="true">Generate PDF</button>
                </div>
            </div>
        </>
    )

}