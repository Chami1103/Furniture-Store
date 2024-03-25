import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import Sidebar from '../common/sidebar/sidebar'


function UpdateSupplier() {

    let history = useHistory();
    const { id } = useParams();
    const [supplier,setSupplier] = useState({


        
        supplierName:"",
        supplierEmail:"",
        supplierContactNumber:"",
        supplierAddress:"",
        supplierItemCategory:""

    });

     const {supplierName,supplierEmail,supplierContactNumber,supplierAddress,supplierItemCategory  } = supplier;
     const onInputChange = e =>{
        setSupplier({...supplier, [e.target.name]: e.target.value});

     };

   useEffect(() => {
     loadUser();
   }, []);

   const onSubmit = async e => {
    e.preventDefault();
   // setErrors(validation(values));
     
    await axios.put(`http://localhost:8081/api/inventory/supplier/updatesupplier/${id}`, supplier)
    swal({

        title: "Success",
        text: " Updated Successfully !!",
        icon: "success",
        button: "OK"

      });
 
    history.push("/suppliers");
    };


    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8081/api/inventory/supplier/getsupplierbyid/${id}`);
     
      setSupplier(result.data);
      
  };
        return (
            <>
            <Sidebar/> 
                <div class="container" style={{ marginTop: '6%' }}>
                    <div class="title">Update Supplier Details</div>
                    <div class="content">
                    <form onSubmit={e => onSubmit(e)}>
                        <div class="user-details">
      
                      <div class="input-box">
                        <span class="details">Supplier Name</span>
                        <input type="text" className="form-control" id="supplierName" name="supplierName" 
                          value ={supplierName} onChange={(e)=> onInputChange(e)}
                          placeholder="Enter Supplier Name"
                          required
                          />
                      </div>  
                      <div class="input-box">
                        <span class="details">Supplier Email</span>
                        <input type="email" className="form-control" id="supplierEmail" name="supplierEmail"
                          value ={supplierEmail} onChange={(e)=> onInputChange(e)}
                          placeholder="Enter Supplier Email"
                          required
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Contact Number</span>
                        <input type="tel" className="form-control" id="supplierContactNumber" name="supplierContactNumber" maxLength="9" pattern="[1-9]{2}[0-9]{7}" 
                        value ={supplierContactNumber} onChange={(e)=> onInputChange(e)}
                         placeholder="Enter Contact Number"
                         required
                        />
                      </div>

                      <div class="input-box">
                         <span class="details">Address</span>
                         <input type="text" className="form-control" id="supplierAddress" name="supplierAddress"
                          value ={supplierAddress} onChange={(e)=> onInputChange(e)}
                          placeholder="Enter Address"
                          required
                          />
                       </div>

                       <div class="input-box">
                         <span class="details">Item Category</span>
                         <input type="text" className="form-control" id="supplierItemCategory" name="supplierItemCategory" 
                         value ={supplierItemCategory} onChange={(e)=> onInputChange(e)}
                          placeholder="Enter Item Category"
                          required
                          />
                       </div>
                        
                        </div>
                        <div class="button">
                            <input type="submit" value="Update Details"/>
                        </div>
                    </form>
                    </div>
                </div>
            </>
            
    );

};

export default UpdateSupplier;