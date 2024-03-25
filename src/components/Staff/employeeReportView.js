import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGen3 from './reportGen3';
import { Link } from "react-router-dom";
import Sidebar from '../common/sidebar/sidebar'

export default function EmployeeReport(){

    const[employee,setEmployee] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/api/staff/staff/getallemployees").then((res)=>{
            setEmployee(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])



    return(
        <>

        <Sidebar/> 

            <div>
                <div class="container">
                <center><h1> <b>All Staff Members</b></h1></center><br /><br />
                <center><p>Click the button below to get the report of our all staff. </p></center><br />
                <Link to="/employee-list"><button class="btn btn-secondary btn-lg active" style={{marginRight:'5px'}} role="button" aria-pressed="true">Back</button></Link>
                <button class="btn btn-success btn-lg active" onClick={()=>{ReportGen3(employee)}} role="button" aria-pressed="true">Generate PDF</button>
                </div>
            </div>
        </>
    )

}