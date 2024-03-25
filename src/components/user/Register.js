
import React, { Fragment, useState} from 'react';
import {useHistory}  from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert';

const Register = () => {

let history = useHistory();
const [firstName,setFirstName] = useState("");
const [lastName,setLastName] = useState("");
const [email,setEmail]= useState("");
const [password,setPassword]= useState("");
const [confirmPassword,setConfirmPassword]= useState("");

function sendDetails(e){
e.preventDefault();

     const  newCustomer = {

     firstName,
     lastName,
     email,
     password,
     confirmPassword
     
     }

axios.post("http://localhost:8081/api/customer/customer/signup",newCustomer).then(()=>{

swal({

     title: "Success",

     text: "Registration Successfull !!",

     icon: "success",

     button: "OK"

   });


console.log(" Registration Successfull");


history.push("/");


}).catch((err)=> {


swal({

     title: "Warning",

     text: "Invalid Registration !!",

     icon: "warning",

     button: "OK"

   });

console.log("Invalid Registration");
})

};




    return (
        <Fragment>

            <div className="row wrapper">
                <div className="col-10 col-lg-4">
                    <form  action="" onSubmit={sendDetails} className="shadow-lg" encType='multipart/form-data'>
                        <h1 className="mb-3">Register</h1>

                        <div className="form-group">
                            <label htmlFor="email_field">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="form-control"
                                onChange={(e)=>{ setFirstName(e.target.value); }}
                                placeholder="Enter First Name"
                                required
                             
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email_field">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                className="form-control"
                                name='lastName'
                                onChange={(e)=>{ setLastName(e.target.value); }}
                                placeholder="Enter Last Name"
                                required

                               
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              name='email'
                              onChange={(e)=>{ setEmail(e.target.value); }}
                              placeholder="Enter Email"
                              required
                              
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password_field">Confirm Password</label>
                            <input
                                 type="password"
                                 id="password"
                                 className="form-control"
                                 name='password'
                                 onChange={(e)=>{ setPassword(e.target.value); }}
                                 placeholder="Enter Password"
                                 required
                              
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password_field">Confirm Password</label>
                            <input
                               type="password"
                               id="confirmPassword"
                               className="form-control"
                               name='confirmPassword'
                               onChange={(e)=>{ setConfirmPassword(e.target.value); }}
                               placeholder="Enter Confirm Password"
                               required
                              
                            />
                        </div>
                      
                        <button
                            id="register_button"
                            type="submit"
                            className="btn btn-block py-3"
                          
                        >
                            REGISTER
                        </button>
                        <Link to="/login" className="float-right mt-3">Login Here?</Link>
                    </form>
                </div>
            </div>

        </Fragment>
    )
}

export default Register
