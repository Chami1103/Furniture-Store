import React,{useState} from 'react';
import {useHistory }  from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import axios from "axios";
import Sidebar from '../common/sidebar/sidebar'

export default function CreateVehicle(){
    
    let history = useHistory();
    
    const [vehicleType,setVehicleType]= useState("");
    const [vehicleModel,setVehicleModel]= useState("");
    const [vehicleNo,setVehicleNo]= useState("");
    const [Year,setYear]= useState("");
    const [mileage,setMileage]= useState("");
    const [nextServiceReminder,setNextServiceReminder]= useState("");


    const [errors, setErrors] = useState({});

    function sendDetails(e){
        e.preventDefault();
       // setErrors(validation(values));


         const  newVehicle = {

            vehicleType,
            vehicleModel,
            vehicleNo,
            Year,
            mileage,
            nextServiceReminder
         }
         
         axios.post("http://localhost:8081/api/delivery/vehicle/addnewvehicle",newVehicle).then(()=>{
            swal({

                title: "Success",
    
                text: "Successfully Added New Vehicle !",
    
                icon: "success",
    
                button: "OK"
    
              });
  
             history.push("/vehicle-list");

         }).catch((err)=> {

            alert(err)
         })

    }
    
        return (
          <>
           <Sidebar/> 

              <div class="container" style={{ marginTop: '6%' }}>
                <div class="title">Add New Vehicle</div>
                <div class="content">
                  <form action="/vehicle-list" onSubmit={sendDetails}>
                    <div class="user-details">

                    <div class="input-box">
                        <span class="details"> Vehicle Type </span>
                        <input type="text" className="form-control" id="vehicleType" onChange={(e)=>{
                          setVehicleType(e.target.value); }}
                          placeholder="Enter Vehicle Type"
                          pattern="[A-Za-z\s]+"
                          title="Vahicle type can only contain letters and spaces."
                          required
                          />
                      </div>  
                      <div class="input-box">
                        <span class="details">Vehicle Model</span>
                        <input type="text" className="form-control" id="vehicleModel" onChange={(e)=>{
                          setVehicleModel(e.target.value); }}
                          placeholder="Enter Vehicle Model "
                          required
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Vehicle No</span>
                        <input
                          type="text"
                          className="form-control"
                          id="vehicleNo"
                          onChange={(e) => {
                            setVehicleNo(e.target.value);
                          }}
                          placeholder="Enter Vehicle No (Ex: ABC-1234)"
                          required
                          pattern="[A-Z]{3}-\d{4}"
                          title="Please enter a valid Vehicle No in the format ABC-1234"
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Year</span>
                        <input
                          type="number"
                          className="form-control"
                          id="year"
                          onChange={(e) => {
                            setYear(e.target.value);
                          }}
                          placeholder="Enter Year"
                          required
                          min="1900"
                          max={new Date().getFullYear()}
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Mileage</span>
                        <input type="number" className="form-control" id="mileage" onChange={(e)=>{ 
                         setMileage(e.target.value);}}
                         placeholder="Enter Mileage"
                         required
                         />
                      </div>
                      <div class="input-box">
                         <span class="details">Next Service Date</span>
                         <input type="date" className="form-control" id="nextServiceReminder" onChange={(e)=>{
                          setNextServiceReminder(e.target.value);
                          }}
                          placeholder="Enter Service Date"
                          required
                          />
                       </div>

                     </div>
                     <div class="button">
                      <input type="submit" value="Save Details"/>
                    </div>
                  </form>
                </div>
              </div>
         </>
            
    );

};

