import React,{useState} from 'react';
import {useHistory }  from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import axios from "axios";
import Sidebar from '../common/sidebar/sidebar'

export default function CreateEmployee(){
    
    let history = useHistory();
    
    const [empfirstName,setEmpFirstName]= useState("");
    const [empLastName,setEmpLastName]= useState("");
    const [empEmail,setEmpEmail]= useState("");
    const [empPassword,setEmpPassword]= useState("");
    const [empConfirmPassword,setEmpConfirmPassword]= useState("");
    const [empContactNumber,setEmpContactNumber]= useState("");
    const [Gender,setGender]= useState("");
    const [Position,setPosition]= useState("");
    const [joinedDate,setJoinedDate]= useState("");


    const [errors, setErrors] = useState({});

    function sendDetails(e){
        e.preventDefault();
       // setErrors(validation(values));


         const  newEmployee = {

            empfirstName,
            empLastName,
            empEmail,
            empPassword,
            empConfirmPassword,
            empContactNumber,
            Gender,
            Position,
            joinedDate
         }
         
         axios.post("http://localhost:8081/api/staff/staff/addnewemployee",newEmployee).then(()=>{
            swal({

                title: "Success",
    
                text: "Successfully Added New Employee !",
    
                icon: "success",
    
                button: "OK"
    
              });
  
             history.push("/employee-list");

         }).catch((err)=> {
            console.log(err);
            alert(err)
         })

    }
    
        return (
          <>
           <Sidebar/> 

              <div class="container" style={{ marginTop: '1%' }}>
                <div class="title">Add New Employee</div>
                <div class="content">
                  <form action="/employee-list" onSubmit={sendDetails}>
                    <div class="user-details">

                      <div class="input-box">
                        <span class="details">First Name</span>
                        <input type="text" className="form-control" id="fname" onChange={(e)=>{
                          
                          setEmpFirstName(e.target.value); }}
                          placeholder="Enter First Name"
                          required
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Last Name</span>
                        <input type="text" className="form-control" id="lname"  onChange={(e)=>{
                         
                         setEmpLastName(e.target.value);  }}
                         placeholder="Enter Last Name"
                         required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Email</span>
                        <input type="email" className="form-control" id="email" onChange={(e)=>{
                          
                        setEmpEmail(e.target.value); }}
                        placeholder="Enter Email"
                        required
                        />

                      </div>
                      <div class="input-box">
                        <span class="details">Password</span>
                        <input type="password" className="form-control" id="empPassword" onChange={(e)=>{  
                        setEmpPassword(e.target.value); }}
                        placeholder="Enter Password"
                        required
                        />

                      </div>
                      <div class="input-box">
                        <span class="details">Confirm Password</span>
                        <input type="password" className="form-control" id="empConfirmPassword" onChange={(e)=>{
                        setEmpConfirmPassword(e.target.value); }}
                        placeholder="Enter Confirm Password"
                        required
                        />

                      </div>
                      <div class="input-box">
                        <span class="details">Contact Number</span>
                        <input type="number" className="form-control" id="contactNumber" maxLength="9" pattern="[1-9]{2}[0-9]{7}" onChange={(e)=>{ 
                         setEmpContactNumber(e.target.value);}}
                         placeholder="Enter Contact Number"
                         required
                         />
                      </div>

                       <div class="input-box">
                         <span class="details">Gender</span>
                            <select className="form-control" aria-label="Default select example" onChange={(e)=>{  setGender(e.target.value);}} required>
                            
                            <option default>Select Gender</option>
                            <option value="Male ">Male </option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            </select> 
                        
                       </div>

                       <div class="input-box">
                         <span class="details">Position</span>
                         <select className="form-control" aria-label="Default select example" onChange={(e)=>{  setPosition(e.target.value);}} required>
                        
                            <option default>Select Position</option>
                            <option value="Admin">Admin </option>
                            <option value="Operator">Operator</option>
                            <option value="Assistant">Assistant</option>
                            <option value="Worker">Worker</option>
                        </select> 
                        
                       </div>

                       <div class="input-box">
                         <span class="details">Joined Date</span>
                         <input type="date" className="form-control" id="joineddate" onChange={(e)=>{
                          
                          setJoinedDate(e.target.value);
                          }}
                          placeholder="Enter Date"
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

