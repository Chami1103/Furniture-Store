import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
// import swal from 'sweetalert';
import '../../css/Forms.css';
import Sidebar from '../common/sidebar/sidebar'


function ViewOrder() {

    let history = useHistory();
    const { id } = useParams();
    const [orders,setOrders] = useState({

        customerId:"",
        customerName:"",
        orderDate:"",
        totalCost:"",
        orderItems:"",
        odrerStatus:""

    });

     const {customerId,customerName,orderDate, totalCost, orderItems, odrerStatus } = orders;
     const onInputChange = e =>{
        setOrders({...orders, [e.target.name]: e.target.value});

     };

   useEffect(() => {
     loadUser();
   }, []);

    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8081/api/order/order/vieworderbyid/${id}`);
     
      setOrders(result.data);
      
  };
        return (
            <>
            <Sidebar/> 
                <div class="container" style={{ marginTop: '6%' }}>
                    <div class="title">View Order</div>
                    <div class="content">
                    <form>
                      <div class="user-details">     
                        <div class="input-box">
                            <span class="details">Customer Id</span>
                            <input type="text" className="form-control" id="customerId" name="customerId"
                            value ={customerId} 
                            required
                            disabled
                            />
                        </div>  
                        <div class="input-box">
                            <span class="details">Customer Name</span>
                            <input type="text" className="form-control" id="customerName" name="customerName" 
                            value ={customerName}
                            required
                            disabled
                            />
                        </div>      
                        <div class="input-box">
                            <span class="details">Order Date</span>
                            <input type="text" className="form-control" id="orderDate" name="orderDate"  
                            value ={orderDate}
                            required
                            disabled
                            />
                        </div>
                        <div class="input-box">
                            <span class="details">Total Cost</span>
                            <input type="text" className="form-control" id="totalCost" name="totalCost"
                            value ={totalCost}
                            required
                            disabled
                            />
                        </div>
                        <div class="input-box">
                            <span class="details">Order Items</span>
                            <input type="text" className="form-control" id="orderItems" name="orderItems" 
                            value ={orderItems} 
                            required
                            disabled
                            />
                        </div>
                        <div class="input-box">
                            <span class="details">Odrer Status</span>
                            <input type="text" className="form-control" id="odrerStatus" name="odrerStatus"
                            value ={odrerStatus}
                            required
                            disabled
                            />
                        </div>

                        </div>
                    </form>
                    </div>
                </div>
            </>
            
    );

};

export default ViewOrder;