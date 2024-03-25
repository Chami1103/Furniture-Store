import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import Sidebar from '../common/sidebar/sidebar'


function UpdateSalary() {

    let history = useHistory();
    const { id } = useParams();
    const [salaries,setSalaries] = useState({

        employeeId:"",
        employeeName:"",
        position:"",
        basicSalary:"",
        month:"",
        advancePayment:"",
        overtimePayment:"",
        totalPayment:"",
        perDaySalary:"",
        totalDays:""

    });

     const {employeeId,employeeName,position,basicSalary,month,advancePayment,overtimePayment,totalPayment,perDaySalary,totalDays  } = salaries;
     const onInputChange = e =>{
        setSalaries({...salaries, [e.target.name]: e.target.value});

     };

   useEffect(() => {
     loadUser();
   }, []);

   const onSubmit = async e => {
    e.preventDefault();
   // setErrors(validation(values));
     
    await axios.put(`http://localhost:8081/api/staff/salary/updatesalary/${id}`, salaries)
    swal({

        title: "Success",
        text: " Updated Successfully !!",
        icon: "success",
        button: "OK"

      });
 
    history.push("/employee-salaries");
    };


    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8081/api/staff/salary/getonebyid/${id}`);
     
      setSalaries(result.data);
      
  };
        return (
            <>
            <Sidebar/> 
                <div class="container" style={{ marginTop: '1%' }}>
                    <div class="title">Update Employee Salary Details</div>
                    <div class="content">
                    <form onSubmit={e => onSubmit(e)}>
                        <div class="user-details">

                      <div class="input-box">
                        <span class="details">Emp Id</span>
                        <input type="text" className="form-control" id="employeeId" name="employeeId"
                          value ={employeeId} onChange={(e)=> onInputChange(e)}
                          placeholder="Enter Emp Id"
                          required
                          disabled
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Emp Name</span>
                        <input type="text" className="form-control" id="employeeName" name="employeeName"
                         value ={employeeName} onChange={(e)=> onInputChange(e)}
                         placeholder="Enter Name"
                         required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Position</span>
                        <input type="text" className="form-control" id="position" name="position"
                        value ={position} onChange={(e)=> onInputChange(e)}
                        placeholder="Enter Position"
                        required
                        />

                      </div>
                      <div class="input-box">
                        <span class="details">Basic Salary</span>
                        <input type="number" className="form-control"  id="basicSalary" name="basicSalary"
                         value ={basicSalary} onChange={(e)=> onInputChange(e)}
                         placeholder="Enter Basic Salary"
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Month</span>
                        <input type="text" className="form-control"  id="month" name="month" 
                         value ={month} onChange={(e)=> onInputChange(e)}
                         placeholder="Enter Month"
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Advance Payment</span>
                        <input type="number" className="form-control"  id="advancePayment" name="advancePayment"
                         value ={advancePayment} onChange={(e)=> onInputChange(e)}
                         placeholder="Enter Advance Payment"
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Overtime Payment </span>
                        <input type="number" className="form-control" id="overtimePayment" name="overtimePayment"
                         value ={overtimePayment} onChange={(e)=> onInputChange(e)}
                         placeholder="Enter Overtime Payment "
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Total Payment </span>
                        <input type="number" className="form-control" id="totalPayment" name="totalPayment"
                         value ={totalPayment} onChange={(e)=> onInputChange(e)}
                         placeholder="Enter Total Payment "
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details"> Day Salary </span>
                        <input type="number" className="form-control" id="perDaySalary" name="perDaySalary"
                         value ={perDaySalary} onChange={(e)=> onInputChange(e)}
                         placeholder="Enter Day Salary "
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details"> Total days </span>
                        <input type="number" className="form-control" id="totalDays" name="totalDays"
                         value ={totalDays} onChange={(e)=> onInputChange(e)}
                         placeholder="Enter Total Days "
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

export default UpdateSalary;