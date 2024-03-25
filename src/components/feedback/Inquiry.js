import React, { Fragment, useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import axios from "axios";
import Swal from 'sweetalert';
import {useHistory }  from "react-router-dom";

export default function AddInquiry() {
    let history = useHistory();
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [title, settitle] = useState("");
    const [inquiryMsg, setinquiryMsg] = useState("");

    function sendData(e) {
        e.preventDefault();

    const newInquiry = {
        firstName,
        lastName,
        Email,
        Phone,
        title,
        inquiryMsg
    }
    axios.post("http://localhost:8081/api/feedback/inquiry/addinquiry", newInquiry).then(() => {
        Swal({

            title: "Success",
            text: "Successfully Added  Inquiry!",
            icon: "success",
            button: "OK"
  
            });
            history.push("/Myinquiry");
    }).catch((err) => {
        console.log(err);
        Swal({

            title: "warning",
            text: "Please Try Again!",
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
                                <h1 className="mt-2 mb-5">New Inquiry</h1>
                                <div className="form-group"  style={{ textAlign: 'left' }}>
                                    <label htmlFor="name_field">First Name</label>
                                    <input

                                        type="name"
                                        id="firstname_field"
                                        className="form-control"
                                        name='firstname'
                                        onChange={(e) => {
                                            setfirstName(e.target.value);  }}
                                    />

                                </div>
                                <div className="form-group"  style={{ textAlign: 'left' }}>
                                   <label htmlFor="name_field">Last Name</label>
                                 <input

                                     type="name"
                                     id="lastname_field"
                                     className="form-control"
                                     name='lastname'
                                     onChange={(e) => {
                                     setlastName(e.target.value);  }}
                                   />
                                </div>

                                <div className="form-group" style={{ textAlign: 'left' }}>
                                    <label htmlFor="email_field">Email</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        name='email'
                                        onChange={(e) => {
                                            setEmail(e.target.value);  }}
                                    />
                                </div>


                            <div className="form-group"  style={{ textAlign: 'left' }}>
                            <label htmlFor="phone_field">Phone Number</label>
                            <input
                                 type="tel"
                                 id="phone" maxLength="9" pattern="[1-9]{2}[0-9]{7}"
                                 className="form-control"
                                 title="Phone number can only contain 9 numbers without leading '0' "
                                 name='phone'
                                 onChange={(e) => {
                                    setPhone(e.target.value);  }}
                             />
                          </div>

                          <div className="form-group"  style={{ textAlign: 'left' }}>
                                   <label htmlFor="name_field">Title</label>
                                 <input

                                     type="text"
                                     id="title_field"
                                     className="form-control"
                                     name='title'
                                     onChange={(e) => {
                                        settitle(e.target.value);  }}

                                   />
                                </div>

                          <div className="form-group"  style={{ textAlign: 'left' }}>
                            <label htmlFor="description_field">Inquiry Message</label>
                            <input

                                 type="text"
                                 id="inquiry_field"
                                className="form-control"
                                 name='inquiryMsg'
                                 onChange={(e) => {
                                    setinquiryMsg(e.target.value);  }}
                             />
                          </div>
                                <button type="submit" className="btn update-btn btn-block mt-4 mb-3" >Add Inquiry</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>

    )

}
