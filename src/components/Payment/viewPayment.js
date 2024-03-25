import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
// import swal from 'sweetalert';
import '../../css/Forms.css';
import Sidebar from '../common/sidebar/sidebar'


function ViewPayment() {

    let history = useHistory();
    const { id } = useParams();
    const [onepayment,setOnepayment] = useState({

        paymentMethod:"",
        paymentAmount:"",
        customerId:"",
        customerName:"",
        odrerId:"",
        transactionDate:"",
        status:""

    });

     const {paymentMethod,paymentAmount,customerId,customerName,odrerId,transactionDate,status  } = onepayment;
     const onInputChange = e =>{
        setOnepayment({...onepayment, [e.target.name]: e.target.value});

     };

   useEffect(() => {
     loadUser();
   }, []);

    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8081/api/payment/payment/viewpaymentbyid/${id}`);
     
      setOnepayment(result.data);
      
  };
        return (
            <>
            <Sidebar/> 
                <div class="container" style={{ marginTop: '6%' }}>
                    <div class="title">View Payment Details</div>
                    <div class="content">
                    <form>
                        <div class="user-details">

                        <div class="input-box">
                        <span class="details">Payment Method</span>
                        <input type="text" className="form-control" id="paymentMethod" name="paymentMethod" 
                          value ={paymentMethod} 
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Amount</span>
                        <input type="text" className="form-control" id="paymentAmount" name="paymentAmount" 
                        value ={paymentAmount} 
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Customer Id</span>
                        <input type="text" className="form-control" id="customerId" name="customerId" 
                        value ={customerId} 
                        />

                      </div>
                      <div class="input-box">
                        <span class="details">Customer Name</span>
                        <input type="number" className="form-control" id="customerName" name="customerName" 
                         value ={customerName}
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Odrer Id</span>
                        <input type="number" className="form-control" id="odrerId" name="odrerId" 
                         value ={odrerId} 
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Transaction Date</span>
                        <input type="text" className="form-control" id="transactionDate" name="transactionDate"
                        value ={transactionDate} 
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Status</span>
                        <input type="text" className="form-control" id="status" name="status"
                        value ={status} 
                         />
                      </div>
                        </div>
                    </form>
                    </div>
                </div>
            </>
            
    );

};

export default ViewPayment;