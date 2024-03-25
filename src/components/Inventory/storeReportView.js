import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGen8 from './reportGen8';
import { Link } from "react-router-dom";
import Sidebar from '../common/sidebar/sidebar'

export default function InventoryReport(){

    const[inventory,setInventory] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/api/inventory/inventory/getallitems").then((res)=>{
            setInventory(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])



    return(
        <>

        <Sidebar/> 

            <div>
                <div class="container">
                <center><h1> <b>Inventory Details - Report</b></h1></center><br /><br />
                <center><p>Click the button below to get all the information about inventory. </p></center><br />

                <Link to="/inventory"><button class="btn btn-secondary btn-lg active" style={{marginRight:'5px'}} role="button" aria-pressed="true">Back</button></Link>
                <button class="btn btn-success btn-lg active" onClick={()=>{ReportGen8(inventory)}} role="button" aria-pressed="true">Generate PDF</button>
                </div>
            </div>
        </>
    )

}