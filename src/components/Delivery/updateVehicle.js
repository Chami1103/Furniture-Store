import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import Sidebar from '../common/sidebar/sidebar'


function UpdateVehicle() {

    let history = useHistory();
    const { id } = useParams();

    const [serviceReminderDateValue, setServiceReminderDateValue] = useState("");
    const [vehicles,setVehicles] = useState({

        vehicleType:"",
        vehicleModel:"",
        vehicleNo:"",
        Year:"",
        mileage:"",
        nextServiceReminder:""
    });

     const {vehicleType,vehicleModel,vehicleNo,Year,mileage,nextServiceReminder} = vehicles;
     const onInputChange = e =>{
        setVehicles({...vehicles, [e.target.name]: e.target.value});
        // setServiceReminderDateValue({...serviceReminderDateValue, [e.target.name]: e.target.value});
     };

   useEffect(() => {
     loadUser();
   }, []);

   const onSubmit = async e => {
    e.preventDefault();
   // setErrors(validation(values));
     
    await axios.put(`http://localhost:8081/api/delivery/vehicle/updatevehicle/${id}`, vehicles)
    swal({

        title: "Success",
        text: "Update Successfully !!",
        icon: "success",
        button: "OK"

      });
 
    history.push("/vehicle-list");
    };


    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8081/api/delivery/vehicle/getvehiclebyid/${id}`);
     
      setVehicles(result.data);
      setServiceReminderDateValue(formatDate(result.data.nextServiceReminder));
      
  };

    // Function to format date to yyyy-MM-dd
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

        return (
            <>
            <Sidebar/> 
                <div class="container" style={{ marginTop: '6%' }}>
                    <div class="title">Update Vehicle Details</div>
                    <div class="content">
                    <form onSubmit={e => onSubmit(e)}>
                        <div class="user-details">
                        <div class="input-box">
                            <span class="details">Vehicle Type</span>
                            <input type="text" className="form-control" id="vehicleType" name="vehicleType"
                            value ={vehicleType} onChange={(e)=> onInputChange(e)}
                            pattern="[A-Za-z\s]+"
                            title="Vahicle type can only contain letters and spaces."
                            />
                        </div>
                        <div class="input-box">
                            <span class="details">Vehicle Model</span>
                            <input type="text" className="form-control" id="vehicleModel" name="vehicleModel"
                            value ={vehicleModel} onChange={(e)=> onInputChange(e)}
                            />
                        </div>      
                        <div class="input-box">
                            <span class="details">Vehicle No</span>
                            <input type="text" className="form-control" id="vehicleNo" name="vehicleNo"
                            value ={vehicleNo} onChange={(e)=> onInputChange(e)}
                            pattern="[A-Z]{3}-\d{4}"
                            title="Please enter a valid Vehicle No in the format ABC-1234"
                            />
                        </div>
                        <div class="input-box">
                            <span class="details">Year</span>
                            <input type="number" className="form-control" id="Year" name="Year"
                            value ={Year} onChange={(e)=> onInputChange(e)}
                            min="1900"
                            max={new Date().getFullYear()}
                            />

                        </div>
                        <div class="input-box">
                            <span class="details">Mileage</span>
                            <input type="number" className="form-control" id="mileage" name="mileage" 
                            value ={mileage} onChange={(e)=> onInputChange(e)}

                                />
                        </div>
                        <div class="input-box">
                            <span class="details">Service Date</span>
                            <input type="date" className="form-control" id="nexServiceReminder" name="nextServiceReminder"
                            value ={serviceReminderDateValue}  onChange={(e)=> onInputChange(e)}

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

export default UpdateVehicle;