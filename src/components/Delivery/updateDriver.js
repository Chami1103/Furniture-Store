import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import Sidebar from '../common/sidebar/sidebar'


function UpdateDriver() {

    let history = useHistory();
    const { id } = useParams();
    const [drivers,setDrivers] = useState({

           empFirstName: "",
           empLastName: "",
           empEmail: "",
           contactNumber: "",
           licenceType: "",
    });

     const {empFirstName,empLastName,empEmail,contactNumber,licenceType} = drivers;
     const onInputChange = e =>{
        setDrivers({...drivers, [e.target.name]: e.target.value});

     };

   useEffect(() => {
     loadUser();
   }, []);

   const onSubmit = async e => {
    e.preventDefault();
   // setErrors(validation(values));
     
    await axios.put(`http://localhost:8081/api/delivery/drivers/updatedriver/${id}`, drivers)
    swal({

        title: "Success",
        text: "Update Successfully !!",
        icon: "success",
        button: "OK"

      });
 
    history.push("/driver-list");
    };


    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8081/api/delivery/drivers/getdriverbyid/${id}`);
     
      setDrivers(result.data);
      
  };
        return (
            <>
            <Sidebar/> 
                <div class="container" style={{ marginTop: '6%' }}>
                    <div class="title">Update Driver Details</div>
                    <div class="content">
                    <form onSubmit={e => onSubmit(e)}>
                        <div class="user-details">
                        <div class="input-box">
                            <span class="details">First Name</span>
                            <input type="text" className="form-control" id="empFirstName" name="empFirstName"
                            pattern="[A-Za-z\s]+"
                            title="First name can only contain letters and spaces."
                            value ={empFirstName} onChange={(e)=> onInputChange(e)}
                            />
                        </div>      
                        <div class="input-box">
                            <span class="details">Last Name</span>
                            <input type="text" className="form-control" id="empLastName" name="empLastName"
                            pattern="[A-Za-z\s]+"
                            title="Last name can only contain letters and spaces."
                            value ={empLastName} onChange={(e)=> onInputChange(e)}
                            />
                        </div>
                        <div class="input-box">
                            <span class="details">Email</span>
                            <input type="email" className="form-control" id="empEmail" name="empEmail"
                            value ={empEmail} onChange={(e)=> onInputChange(e)}
                            />

                        </div>
                        <div class="input-box">
                            <span class="details">Contact Number</span>
                            <input type="number" className="form-control" maxLength="9" pattern="[1-9]{2}[0-9]{7}" id="contactNumber" name="contactNumber" 
                            value ={contactNumber} onChange={(e)=> onInputChange(e)}
                             />
                        </div>

                        <div class="input-box">
                         <span class="details">Licence Type</span>
                            <select className="form-control" aria-label="Default select example" id="licenceType" name="licenceType" value ={licenceType} onChange={(e)=> onInputChange(e)} >
                              <option default>Select Licence Type</option>
                              <option value="Heavy Vehicle ">Heavy Vehicle </option>
                              <option value="Normal Vehicle">Normal Vehicle</option>
                            </select> 
                        
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

export default UpdateDriver;