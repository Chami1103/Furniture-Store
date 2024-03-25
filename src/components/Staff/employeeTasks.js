import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEdit} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar'


const EmployeeTasks=() => {
      const[tasks, setTasks] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8081/api/staff/tasks/getallemployeetasks");
        setTasks(result.data.reverse());
      };
    
      const removeEmployeeTask = async id =>{
        await axios.delete(`http://localhost:8081/api/staff/tasks/removetask/${id}`);
        swal({
          title: "Success",
          text: "Successfully Remove Employee Task!",
          icon: "success",
          button: "OK"
          });
        loadUsers();
      };
     
    return(
     
      <>
      <Sidebar/> 
      <div className="section">
       <h2 className="cateTopic">Tasks Assign For Common Workers</h2>
          <div className="btnadd">
             <Link to={'/assign-task'}>
               <button type="button" class="btn btn-primary">+ Assign New Task</button>
              </Link>
          </div>
          {/* <div class="btn-group">
            <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Export as
            </button>
            <div class="dropdown-menu">
              <Link to="/reportView"><a class="dropdown-item" href="#">PDF</a></Link>
            </div>
          </div> */}
          <form >

        <div   className="search">
            <div className=" col-lg-16 mt-2 mb-2 ml-1">
                <input
                className="form-control"
                type="search"
                placeholder="search here"
                name="searchTerm"
                onChange={(e)=>{ setsearchTerm(e.target.value);}}
                />
                
                </div>
        </div>   
      
      </form >
          <div className="catetb">
         < table className="table">
            <thead className="thead-dark">
                 <tr>
                    {/* <th>#No</th> */}
                    <th>Employee Name</th>
                    <th width='30%'>Task Name</th>
                    <th width='30%'>Description</th>
                    <th>Assign Dates</th>
                    <th>Action</th>
                 </tr>
             </thead>
            <tbody className="tbody">
              {tasks.filter(val =>{

                      if(searchTerm === ""){

                          return val;

                      } else if(

                        val.employeeName.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.taskName.toLowerCase().includes(searchTerm.toLowerCase())
                      ){

                      return val;

                      }

                      })
                      .map((tas, index) => (
               
                <tr>
                <td>{tas.employeeName}</td>
                <td>{tas.taskName}</td>
                <td>{tas.description}</td>
                <td>{tas.assignDates}</td>
                <td style={{ display: 'flex', alignItems: 'center' }}> 
                   
                   <Link className="btn btn-success mr-2" to={`update-task/${tas._id}`}>
                   <AiFillEdit size="20px" color="white"/></Link>
               
                  <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeEmployeeTask(tas._id)}>
                  <FaTrashAlt size="20px" color="white"/></Link> 
                  </td>
               </tr>
                    ))}
            </tbody>
          </table>
          </div>
      </div>
      </>
    )
}
export default EmployeeTasks;