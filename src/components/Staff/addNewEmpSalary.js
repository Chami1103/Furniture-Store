import React,{useState} from 'react';
import {useHistory }  from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import axios from "axios";
import Sidebar from '../common/sidebar/sidebar'

export default function AddNewSalary(){
    
    let history = useHistory();
    
    const [employeeId,setEmpID]= useState("");
    const [employeeName,setEmpName]= useState("");
    const [position,setPosition]= useState("");
    const [basicSalary,setBasicSalary]= useState("");
    const [month,setMonth]= useState("");
    const [advancePayment,setAdvancePayment]= useState("");
    const [overtimePayment,setOvertimePayment]= useState("");
    const [totalPayment,setTotalPayment]= useState("");
    const [perDaySalary,setDaySalary]= useState("");
    const [totalDays,setTotalDays]= useState("");


    const [errors, setErrors] = useState({});

    function sendDetails(e){
        e.preventDefault();
       // setErrors(validation(values));


         const  newSalary = {

            employeeId,
            employeeName,
            position,
            basicSalary,
            month,
            advancePayment,
            overtimePayment,
            totalPayment,
            perDaySalary,
            totalDays
         }
         
         axios.post("http://localhost:8081/api/staff/salary/addnew",newSalary).then(()=>{
            swal({

                title: "Success",
                text: "Successfully Added New Filed !",
                icon: "success",
                button: "OK"
    
              });
  
             history.push("/employee-salaries");

         }).catch((err)=> {
            console.log(err);
            alert(err)
         })

    }
    
        return (
          <>
           <Sidebar/> 

              <div class="container" style={{ marginTop: '3%' }}>
                <div class="title">Add New Employee Salary</div>
                <div class="content">
                  <form action="/employee-salaries" onSubmit={sendDetails}>
                    <div class="user-details">

                      <div class="input-box">
                        <span class="details">Emp Id</span>
                        <input type="text" className="form-control" id="empid" onChange={(e)=>{
                          
                          setEmpID(e.target.value); }}
                          placeholder="Enter Emp Id"
                          required
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Emp Name</span>
                        <input type="text" className="form-control" id="empname"  onChange={(e)=>{
                         
                         setEmpName(e.target.value);  }}
                         placeholder="Enter Name"
                         required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Position</span>
                        <input type="text" className="form-control" id="position" onChange={(e)=>{
                          
                        setPosition(e.target.value); }}
                        placeholder="Enter Position"
                        required
                        />

                      </div>
                      <div class="input-box">
                        <span class="details">Basic Salary</span>
                        <input type="number" className="form-control" id="basicsalary" onChange={(e)=>{
                          
                         setBasicSalary(e.target.value);}}
                         placeholder="Enter Basic Salary"
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Month</span>
                        <input type="text" className="form-control" id="month" onChange={(e)=>{
                          
                         setMonth(e.target.value);}}
                         placeholder="Enter Month"
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Advance Payment</span>
                        <input type="number" className="form-control" id="advancepayment" onChange={(e)=>{
                          
                         setAdvancePayment(e.target.value);}}
                         placeholder="Enter Advance Payment"
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Overtime Payment </span>
                        <input type="number" className="form-control" id="overtimepayment" onChange={(e)=>{
                          
                          setOvertimePayment(e.target.value);}}
                         placeholder="Enter Overtime Payment "
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Total Payment </span>
                        <input type="number" className="form-control" id="totalpayment" onChange={(e)=>{
                          
                          setTotalPayment(e.target.value);}}
                         placeholder="Enter Total Payment "
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details"> Day Salary </span>
                        <input type="number" className="form-control" id="perdaysalary" onChange={(e)=>{
                          
                          setDaySalary(e.target.value);}}
                         placeholder="Enter Day Salary "
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details"> Total days </span>
                        <input type="number" className="form-control" id="totaldays" onChange={(e)=>{
                          
                          setTotalDays(e.target.value);}}
                         placeholder="Enter Total Days "
                         required
                         />
                      </div>

                     </div>
                     <div class="button">
                      <input type="submit" value="Save Details"/>
                    </div>
                  </form>
                </div>
              </div>
         </>
            
    );

};

