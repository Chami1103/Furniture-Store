import React,{useState} from 'react';
import {useHistory }  from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import axios from "axios";
import Sidebar from '../common/sidebar/sidebar'

export default function AddNewSupplier(){
    
    let history = useHistory();
    
    const [supplierName,setSupplierName]= useState("");
    const [supplierEmail,setSupplierEmail]= useState("");
    const [supplierContactNumber,setSupplierContactNumber]= useState("");
    const [supplierAddress,setSupplierAddress]= useState("");
    const [supplierItemCategory,setSupplierItemCategory]= useState("");

    const [errors, setErrors] = useState({});

    function sendDetails(e){
        e.preventDefault();
       // setErrors(validation(values));


         const  newSupplier = {

            supplierName,
            supplierEmail,
            supplierContactNumber,
            supplierAddress,
            supplierItemCategory
         }
         
         axios.post("http://localhost:8081/api/inventory/supplier/addnewsupplier",newSupplier).then(()=>{
            swal({

                title: "Success",
    
                text: "Successfully Added New Supplier !",
    
                icon: "success",
    
                button: "OK"
    
              });
  
             history.push("/suppliers");

         }).catch((err)=> {

            alert(err)
         })

    }
    
        return (
          <>
           <Sidebar/> 

              <div class="container" style={{ marginTop: '6%' }}>
                <div class="title">Add New Supplier</div>
                <div class="content">
                  <form action="/suppliers" onSubmit={sendDetails}>
                    <div class="user-details">

                    <div class="input-box">
                        <span class="details">Supplier Name</span>
                        <input type="text" className="form-control" id="supplierName" onChange={(e)=>{
                          
                          setSupplierName(e.target.value); }}
                          placeholder="Enter Supplier Name"
                          required
                          />
                      </div>  
                      <div class="input-box">
                        <span class="details">Supplier Email</span>
                        <input type="email" className="form-control" id="supplierEmail" onChange={(e)=>{
                          
                          setSupplierEmail(e.target.value); }}
                          placeholder="Enter Supplier Email"
                          required
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Contact Number</span>
                        <input type="tel" className="form-control" id="supplierContactNumber" maxLength="9" pattern="[1-9]{2}[0-9]{7}" onChange={(e)=>{
                         
                         setSupplierContactNumber(e.target.value);  }}
                         placeholder="Enter Contact Number"
                         required
                        />
                      </div>

                      <div class="input-box">
                         <span class="details">Address</span>
                         <input type="text" className="form-control" id="supplierAddress" onChange={(e)=>{
                          
                          setSupplierAddress(e.target.value);
                          }}
                          placeholder="Enter Address"
                          required
                          />
                       </div>

                       <div class="input-box">
                         <span class="details">Item Category</span>
                         <input type="text" className="form-control" id="supplierItemCategory" onChange={(e)=>{
                          
                          setSupplierItemCategory(e.target.value);
                          }}
                          placeholder="Enter Item Category"
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

