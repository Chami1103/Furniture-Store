import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGen5 from './reportGen5';
import { Link } from "react-router-dom";
import Sidebar from '../common/sidebar/sidebar'

export default function VehicleReport(){

    const[vehicle,setVehicle] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/api/delivery/vehicle/getallvehicles").then((res)=>{
            setVehicle(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])



    return(
        <>

        <Sidebar/> 

            <div>
                <div class="container">
                <center><h1> <b>All Vehicles in Furny</b></h1></center><br /><br />
                <center><p>Click the button below to get all the vehicle details in Furny. </p></center><br />

                <Link to="/vehicle-list"><button class="btn btn-secondary btn-lg active" style={{marginRight:'5px'}} role="button" aria-pressed="true">Back</button></Link>
                <button class="btn btn-success btn-lg active" onClick={()=>{ReportGen5(vehicle)}} role="button" aria-pressed="true">Generate PDF</button>
                </div>
            </div>
        </>
    )

}