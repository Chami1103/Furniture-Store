import axios from 'axios';
import React,{useState,useEffect} from 'react';
import ReportGen4 from './reportGen4';
import { Link } from "react-router-dom";
import Sidebar from '../common/sidebar/sidebar'

export default function ItemReport(){

    const[item,setItem] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8081/api/catalogue/item/getallitems").then((res)=>{
            setItem(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])



    return(
        <>

        <Sidebar/> 

            <div>
                <div class="container">
                <center><h1> <b>All Furniture Items</b></h1></center><br /><br />
                <center><p>Click the button below to get all the furniture items in our store. </p></center><br />

                <Link to="/items"><button class="btn btn-secondary btn-lg active" style={{marginRight:'5px'}} role="button" aria-pressed="true">Back</button></Link>
                <button class="btn btn-success btn-lg active" onClick={()=>{ReportGen4(item)}} role="button" aria-pressed="true">Generate PDF</button>
                </div>
            </div>
        </>
    )

}