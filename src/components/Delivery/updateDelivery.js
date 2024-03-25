import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import Sidebar from '../common/sidebar/sidebar'


function UpdateDelivery() {

    let history = useHistory();
    const { id } = useParams();

    const [deliveryDateValue, setDeliveryDateValue] = useState("");
    const [delivery,setDelivery] = useState({

        receiverAddress:"",
        receiverContactNumber:"",
        assignedDriver:"",
        deliveryDate:"",
        deliveryStatus:"",
        vehicleNo:""

    });

     const {receiverAddress,receiverContactNumber,assignedDriver,deliveryDate,deliveryStatus,vehicleNo} = delivery;
     const onInputChange = e =>{
        setDelivery({...delivery, [e.target.name]: e.target.value});
       
     };

   useEffect(() => {
     loadUser();
   }, []);

   const onSubmit = async e => {
    e.preventDefault();
   // setErrors(validation(values));
     
    await axios.put(`http://localhost:8081/api/delivery/delivery/updatedelivery/${id}`, delivery)
    swal({

        title: "Success",
        text: "Update Successfully !!",
        icon: "success",
        button: "OK"

      });
 
    history.push("/all-deliveries");
    };

    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8081/api/delivery/delivery/getdeliverybyid/${id}`);
      setDelivery(result.data);
      setDeliveryDateValue(formatDate(result.data.deliveryDate));
      
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
                <div class="container" style={{ marginTop: '1%' }}>
                    <div class="title">Update Delivery Details</div>
                    <div class="content">
                    <form onSubmit={e => onSubmit(e)}>
                        <div class="user-details">
                        <div class="input-box">
                            <span class="details"> Receiver Address </span>
                            <input type="text" className="form-control" id="receiverAddress"  name="receiverAddress"
                            value ={receiverAddress}
                            onChange={(e)=> onInputChange(e)}
                            required
                            />
                        </div>  
                        <div class="input-box">
                            <span class="details">Contact Number</span>
                            <input type="number" className="form-control" maxLength="9" pattern="[1-9]{2}[0-9]{7}" id="receiverContactNumber"  name="receiverContactNumber" 
                            value ={receiverContactNumber}
                            onChange={(e)=> onInputChange(e)}
                            title="Phone number can only contain 9 numbers without leading '0' "
                            required
                            />
                        </div>      
                        <div class="input-box">
                            <span class="details">Driver Name</span>
                            <input type="text" className="form-control" id="assignedDriver"  name="assignedDriver"
                            value ={assignedDriver}
                            onChange={(e)=> onInputChange(e)}
                            pattern="[A-Za-z\s]+"
                            title="Driver name can only contain letters and spaces."
                            required
                            />
                        </div>
                        <div class="input-box">
                            <span class="details">Delivery Date</span>
                            <input type="date" className="form-control" id="deliveryDate" name="deliveryDate" 
                            value ={deliveryDateValue}
                            onChange={(e)=> onInputChange(e)}
                            required
                            />
                        </div>

                        <div class="input-box">
                         <span class="details">Delivery Status</span>
                            <select className="form-control" aria-label="Default select example"  id="deliveryStatus"  name="deliveryStatus" value ={deliveryStatus} onChange={(e)=> onInputChange(e)} >
                              <option default>Select Status</option>
                              <option value="Pending">Pending</option>
                              <option value="Out for Delivery">Out for Delivery</option>
                              <option value="Delivered">Delivered</option>
                            </select> 
                        
                       </div>
                        <div class="input-box">
                            <span class="details">Velicle No</span>
                            <input type="text" className="form-control" id="vehicleNo"  name="vehicleNo" 
                            value ={vehicleNo}
                            onChange={(e)=> onInputChange(e)}
                            pattern="[A-Z]{3}-\d{4}"
                            title="Please enter a valid Vehicle No in the format ABC-1234"
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

export default UpdateDelivery;