import React, { Fragment, useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import axios from "axios";
import Swal from 'sweetalert';
import {useHistory }  from "react-router-dom";

export default function AddCard() {

    let history = useHistory();
    const [cardnumber, setCardNumber] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCVC] = useState("");

    function sendData(e) {
        e.preventDefault();

    const newCard = {
        cardnumber,
        customerName,
        expiry,
        cvc
    
    }
    axios.post("http://localhost:8081/api/payment/cardpay/addnewcard", newCard).then(() => {
        Swal({

            title: "Success",
            text: "Successfully Added Card!!",
            icon: "success",
            button: "OK"
  
            });
            history.push("/cardDetails");
    }).catch((err) => {
        console.log(err);
        Swal({

            title: "warning",
            text: "Please Try Again!!",
            icon: "info",
            button: "OK"
  
            });      
        
    })

}

    return (

        <Fragment>

            <div className="row">
            <div className="col-12 col-md-2">
               <Sidebar />
            </div>

                <div className="col-12 col-md-10">
                    <div className="row wrapper">
                        <div className="col-10 col-lg-5">
                            <form className="shadow-lg" onSubmit={sendData}>
                                <h1 className="mt-2 mb-5">Add New Card</h1>
                                <div className="form-group">
                                    <label htmlFor="name_field">Card Number</label>
                                    <input
                                        type="text"
                                        id="cardnumber-field"
                                        className="form-control"
                                        name='cardnumber'
                                        pattern="^\d{4}-\d{4}-\d{4}-\d{4}$" 
                                        title="Please enter a valid card number in the format 1234-5678-1234-5678"
                                        placeholder='Ex:1234-5678-9876-5678'
                                        onChange={(e) => {
                                            setCardNumber(e.target.value);  }}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email_field">Card Holder</label>

                                    <input
                                        type="text"
                                        id="customerName-field"
                                        className="form-control"
                                        name='customerName'
                                        placeholder="Enter Holder Name"
                                        pattern="[A-Za-z\s]+"
                                        title="Holder name can only contain letters and spaces."
                                        onChange={(e) => {
                                            setCustomerName(e.target.value);  }}
                                    />

                                </div>

                          <div className="form-group">
                            <label htmlFor="date_field">Expire Date</label>
                            <input
                                 type="date"
                                 id="expiry_field"
                                 className="form-control"
                                 placeholder="Enter Expire date"
                                 name='expiry'
                                 onChange={(e) => {
                                    setExpiry(e.target.value);  }}

                             />

                          </div>

                          <div className="form-group">
                                <label htmlFor="cvc_field">CVC</label>
                                <input
                                    type="number"
                                    id="cvc_field"
                                    className="form-control"
                                    name="cvc"
                                    pattern="\d{3,4}"
                                    title="Please enter a valid CVC code (3 or 4 digits)"
                                    placeholder='Ex: 345'
                                    onChange={(e) => {
                                    setCVC(e.target.value);
                                    }}
                                    required
                                />
                            </div>
                                <button type="submit" className="btn update-btn btn-block mt-4 mb-3" >Add Card</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
