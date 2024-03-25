import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGen1 from './ReportGen1';
import { Link } from "react-router-dom";
import Sidebar from '../common/sidebar/sidebar'

export default function CustomerReport(){

    const[customer,setCustomer] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/api/customer/customer/getallcustomers").then((res)=>{
            setCustomer(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])



    return(
        <>

        <Sidebar/> 

            <div>
                <div class="container">
                <center><h1> <b>All Curently Registered Customer List In Our System </b></h1></center><br /><br />
                <center><p>Click the button below to get all the details about all customers in our system. </p></center><br />

                <Link to="/all-customers"><button class="btn btn-secondary btn-lg active" style={{marginRight:'5px'}} role="button" aria-pressed="true">Back</button></Link>
                <button class="btn btn-success btn-lg active" onClick={()=>{ReportGen1(customer)}} role="button" aria-pressed="true">Generate PDF</button>
                </div>
            </div>
        </>
    )

}