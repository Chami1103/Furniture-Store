import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import Sidebar from '../common/sidebar/sidebar'


function UpdateEmployee() {

    let history = useHistory();
    const { id } = useParams();

    // New state variable for the date input value
    const [joinedDateValue, setJoinedDateValue] = useState("");
    const [employees,setEmployees] = useState({

        empfirstName:"",
        empLastName:"",
        empEmail:"",
        empPassword:"",
        empConfirmPassword: "",
        empContactNumber:"",
        Gender:"",
        Position:"",
        joinedDate:""

    });

     const {empfirstName,empLastName,empEmail, empContactNumber,Gender,Position,joinedDate } = employees;
     const onInputChange = e =>{
        setEmployees({...employees, [e.target.name]: e.target.value});

     };

   useEffect(() => {
     loadUser();
   }, []);

   const onSubmit = async e => {
    e.preventDefault();
   // setErrors(validation(values));
     
    await axios.put(`http://localhost:8081/api/staff/staff/updateemployee/${id}`, employees)
    swal({

        title: "Success",
        text: "User Updated Successfully !!",
        icon: "success",
        button: "OK"

      });
 
    history.push("/employee-list");
    };


    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8081/api/staff/staff/getemployeebyid/${id}`);
     
      setEmployees(result.data);
      setJoinedDateValue(formatDate(result.data.joinedDate));
      
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
                <div class="container" style={{ marginTop: '3%' }}>
                    <div class="title">Update Employee Details</div>
                    <div class="content">
                    <form onSubmit={e => onSubmit(e)}>
                        <div class="user-details">
                        <div class="input-box">
                            <span class="details">First Name</span>
                            <input type="text" className="form-control" id="empfirstName" name="empfirstName"
                            value ={empfirstName} onChange={(e)=> onInputChange(e)}
                            />
                        </div>
                        <div class="input-box">
                            <span class="details">Last Name</span>
                            <input type="text" className="form-control" id="empLastName" name="empLastName"
                            value ={empLastName} onChange={(e)=> onInputChange(e)}
                            />
                        </div>      
                        <div class="input-box">
                            <span class="details">Email</span>
                            <input type="email" className="form-control" id="empEmail" name="empEmail"
                            value ={empEmail} onChange={(e)=> onInputChange(e)}
                            />
                        </div>
                        {/* <div class="input-box">
                            <span class="details">Password</span>
                            <input type="email" className="form-control" id="empEmail" name="empEmail"
                            value ={empPassword} onChange={(e)=> onInputChange(e)}
                            />
                        </div>
                        <div class="input-box">
                            <span class="details">Email</span>
                            <input type="email" className="form-control" id="empEmail" name="empEmail"
                            value ={} onChange={(e)=> onInputChange(e)}
                            />
                        </div> */}
                        <div class="input-box">
                            <span class="details">Contact Number</span>
                            <input type="number" className="form-control" id="empContactNumber" maxLength="9" pattern="[1-9]{2}[0-9]{7}" name="empContactNumber"
                            value ={empContactNumber} onChange={(e)=> onInputChange(e)}
                            />

                        </div>

                        <div class="input-box">
                         <span class="details">Gender</span>
                            <select className="form-control" aria-label="Default select example" id="Gender" name="Gender" value ={Gender} onChange={(e)=> onInputChange(e)} >
                            
                            <option value="" disabled >Select Gender</option>
                            <option value="Male ">Male </option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            </select> 
                        
                       </div>

                       <div class="input-box">
                         <span class="details">Position</span>
                         <select className="form-control" aria-label="Default select example"  id="Position" name="Position" value ={Position} onChange={(e)=> onInputChange(e)} >
                        
                            <option value="" disabled >Select Position</option>
                            <option value="Admin">Admin </option>
                            <option value="Operator">Operator</option>
                            <option value="Assistant">Assistant</option>
                            <option value="Worker">Worker</option>
                        </select> 
                        
                       </div>
                       <div class="input-box">
                            <span class="details">Joined Date</span>
                            <input
                                type="date"
                                className="form-control"
                                id="joinedDate"
                                name="joinedDate"
                                value={joinedDateValue}
                                onChange={(e)=> onInputChange(e)}
                            
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

export default UpdateEmployee;