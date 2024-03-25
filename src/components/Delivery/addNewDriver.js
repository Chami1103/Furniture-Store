import React,{useState} from 'react';
import {useHistory }  from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import axios from "axios";
import Sidebar from '../common/sidebar/sidebar'

export default function CreateDriver(){
    
    let history = useHistory();
    
    const [empFirstName,setFirstName]= useState("");
    const [empLastName,setLastName]= useState("");
    const [empEmail,setEmail]= useState("");
    const [contactNumber,setContactNumber]= useState("");
    const [licenceType,setLicenceType]= useState("");


    const [errors, setErrors] = useState({});

    function sendDetails(e){
        e.preventDefault();
       // setErrors(validation(values));


         const  newDriver = {

            empFirstName,
            empLastName,
            empEmail,
            contactNumber,
            licenceType
         }
         
         axios.post("http://localhost:8081/api/delivery/drivers/addnewdriver",newDriver).then(()=>{
            swal({

                title: "Success",
                text: "Successfully Added New Driver !",
                icon: "success",
                button: "OK"
    
              });
  
             history.push("/driver-list");

         }).catch((err)=> {

            alert(err)
         })

    }
    
        return (
          <>
           <Sidebar/> 

              <div class="container" style={{ marginTop: '6%' }}>
                <div class="title">Add New Driver</div>
                <div class="content">
                  <form action="/driver-list" onSubmit={sendDetails}>
                    <div class="user-details">

                      <div class="input-box">
                        <span class="details">First Name</span>
                        <input type="text" className="form-control" id="fname" onChange={(e)=>{
                          setFirstName(e.target.value); }}
                          pattern="[A-Za-z\s]+"
                          title="First name can only contain letters and spaces."
                          placeholder="Enter First Name"
                          required
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Last Name</span>
                        <input type="text" className="form-control" id="lname"  onChange={(e)=>{
                         setLastName(e.target.value);  }}
                         pattern="[A-Za-z\s]+"
                         title="Last name can only contain letters and spaces."
                         placeholder="Enter Last Name"
                         required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Email</span>
                        <input type="email" className="form-control" id="email" onChange={(e)=>{  
                        setEmail(e.target.value); }}
                        placeholder="Enter Email"
                        required
                      />

                      </div>
                      <div class="input-box">
                        <span class="details">Contact Number</span>
                        <input type="tel" className="form-control" id="contactNumber" maxLength="9" pattern="[1-9]{2}[0-9]{7}" onChange={(e)=>{ 
                         setContactNumber(e.target.value);}}
                         title="Phone number can only contain 9 numbers without leading '0' "
                         placeholder="Enter Contact Number"
                         required
                         />
                      </div>

                       <div class="input-box">
                         <span class="details">Licence Type</span>
                            <select className="form-control"  aria-label="Default select example" id="licenceType" onChange={(e)=>{ 
                               setLicenceType(e.target.value);
                               }} required>
                              <option default>Select Licence Type</option>
                              <option value="Heavy Vehicle ">Heavy Vehicle </option>
                              <option value="Normal Vehicle">Normal Vehicle</option>
                            </select>   
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

