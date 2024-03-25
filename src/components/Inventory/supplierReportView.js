import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGen9 from './reportGen9';
import { Link } from "react-router-dom";
import Sidebar from '../common/sidebar/sidebar'

export default function SupplierReport(){

    const[supplier,setSupplier] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/api/inventory/supplier/getallsuppliers").then((res)=>{
            setSupplier(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])



    return(
        <>

        <Sidebar/> 

            <div>
                <div class="container">
                <center><h1> <b>All Suppliers</b></h1></center><br /><br />
                <center><p>Click the button below to get all suppliers. </p></center><br />

                <Link to="/suppliers"><button class="btn btn-secondary btn-lg active" style={{marginRight:'5px'}} role="button" aria-pressed="true">Back</button></Link>
                <button class="btn btn-success btn-lg active" onClick={()=>{ReportGen9(supplier)}} role="button" aria-pressed="true">Generate PDF</button>
                </div>
            </div>
        </>
    )

}