import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEdit} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar'


const EmployeeList=() => {
      const[employees, setEmployees] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8081/api/staff/staff/getallemployees");
        setEmployees(result.data.reverse());
      };
    
      const removeEmployee = async id =>{
        await axios.delete(`http://localhost:8081/api/staff/staff/removeemployee/${id}`);
        swal({
          title: "Success",
          text: "Successfully Remove Employee!",
          icon: "success",
          button: "OK"
          });
        loadUsers();
      };
     
    return(
     
      <>
      <Sidebar/> 
      <div className="section">
       <h2 className="cateTopic">All Employees</h2>
          <div className="btnadd">
             <Link to={'/new-employee'}>
               <button type="button" class="btn btn-primary" style={{ marginRight: '15px' }}>+ Add New Employee</button>
              </Link>
              <div class="btn-group">
                  <Link to="/report-view3"><button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Export Report
                  </button>
                  </Link>
                </div>
          </div>

          <form >

        <div   className="search">
            <div className=" col-lg-16 mt-2 mb-2 ml-1">
                <input
                className="form-control"
                type="search"
                placeholder="search member"
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
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>Gender</th>
                    <th> Position</th>
                    <th> Joined Date</th>
                    <th>Action</th>
                 </tr>
             </thead>
            <tbody className="tbody">
              {employees.filter(val =>{

                      if(searchTerm === ""){

                          return val;

                      } else if(

                        val.empfirstName.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.empLastName.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.empEmail.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.Position.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.joinedDate.toLowerCase().includes(searchTerm.toLowerCase())
                      ){

                      return val;

                      }

                      })
                      .map((emp, index) => (
               
                <tr>
                {/* <td>{emp.empId}</td> */}
                <td>{emp.empfirstName}</td>
                <td>{emp.empLastName}</td>
                <td>{emp.empEmail}</td>
                <td>{emp.empContactNumber}</td>
                <td>{emp.Gender}</td>
                <td>{emp.Position}</td>
                <td>{emp.joinedDate.split("T")[0]}</td>
                <td style={{ display: 'flex', alignItems: 'center' }}> 
                   
                   <Link className="btn btn-success mr-2" to={`update-employee/${emp._id}`}>
                   <AiFillEdit size="20px" color="white"/></Link>
               
                  <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeEmployee(emp._id)}>
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
export default EmployeeList;