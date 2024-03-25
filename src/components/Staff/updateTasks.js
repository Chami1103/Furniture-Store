import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import Sidebar from '../common/sidebar/sidebar'


function UpdateTasks() {

    let history = useHistory();
    const { id } = useParams();
    const [tasks,setTasks] = useState({

        employeeName:"",
        taskName:"",
        description:"",
        assignDates:""

    });

     const {employeeName,taskName,description,assignDates } = tasks;
     const onInputChange = e =>{
        setTasks({...tasks, [e.target.name]: e.target.value});

     };

   useEffect(() => {
     loadUser();
   }, []);

   const onSubmit = async e => {
    e.preventDefault();
   // setErrors(validation(values));
     
    await axios.put(`http://localhost:8081/api/staff/tasks/updatetask/${id}`, tasks)
    swal({

        title: "Success",
        text: " Updated Successfully !!",
        icon: "success",
        button: "OK"

      });
 
    history.push("/employee-tasks");
    };


    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8081/api/staff/tasks/gettaskbyid/${id}`);
     
      setTasks(result.data);
      
  };
        return (
            <>
            <Sidebar/> 
                <div class="container" style={{ marginTop: '3%' }}>
                    <div class="title">Update Employee Tasks</div>
                    <div class="content">
                    <form onSubmit={e => onSubmit(e)}>
                        <div class="user-details">

                      <div class="input-box">
                        <span class="details">Employee Name</span>
                        <input type="text" className="form-control" id="employeeName" name="employeeName"
                          value ={employeeName} onChange={(e)=> onInputChange(e)}
                          required
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Task Name</span>
                        <input type="text" className="form-control" id="taskName" name="taskName"
                         value ={taskName} onChange={(e)=> onInputChange(e)}
                         required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Description</span>
                        <input type="text" className="form-control" id="description" name="description"
                        value ={description} onChange={(e)=> onInputChange(e)}
                        required
                        />

                      </div>
                      <div class="input-box">
                        <span class="details">Assign Dates</span>
                        <input type="text" className="form-control"  id="assignDates" name="assignDates"
                         value ={assignDates} onChange={(e)=> onInputChange(e)}
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

export default UpdateTasks;