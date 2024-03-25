import React,{useState} from 'react';
import {useHistory }  from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import axios from "axios";
import Sidebar from '../common/sidebar/sidebar'

export default function AssignTask(){
    
    let history = useHistory();
    
    const [employeeName,setEmployeeName]= useState("");
    const [taskName,setTaskName]= useState("");
    const [description,setDescription]= useState("");
    const [assignDates,setAssignDates]= useState("");


    const [errors, setErrors] = useState({});

    function sendDetails(e){
        e.preventDefault();
       // setErrors(validation(values));


         const  newTask = {
            employeeName,
            taskName,
            description,
            assignDates
         }
         
         axios.post("http://localhost:8081/api/staff/tasks/assigntask",newTask).then(()=>{
            swal({

                title: "Success",
                text: "Successfully Assign New Task !",
                icon: "success",
                button: "OK"
    
              });
  
             history.push("/employee-tasks");

         }).catch((err)=> {
            console.log(err);
            alert(err)
         })

    }
    
        return (
          <>
           <Sidebar/> 

              <div class="container" style={{ marginTop: '3%' }}>
                <div class="title">Assign New Task</div>
                <div class="content">
                  <form action="/employee-tasks" onSubmit={sendDetails}>
                    <div class="user-details">

                      <div class="input-box">
                        <span class="details">Employee Name</span>
                        <input type="text" className="form-control" id="employeeName" onChange={(e)=>{  
                          setEmployeeName(e.target.value); }}
                          placeholder="Enter Name"
                          required
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Task Name</span>
                        <input type="text" className="form-control" id="taskName"  onChange={(e)=>{
                         
                         setTaskName(e.target.value);  }}
                         placeholder="Enter Task"
                         required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Description</span>
                        <input type="text" className="form-control" id="description" onChange={(e)=>{
                          
                        setDescription(e.target.value); }}
                        placeholder="Enter Description"
                        required
                        />

                      </div>
                      <div class="input-box">
                        <span class="details">Assign Dates</span>
                        <input type="text" className="form-control" id="assignDates" onChange={(e)=>{
                          
                        setAssignDates(e.target.value);}}
                         placeholder="Ex: Friday,Monday"
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

