import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEdit} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar'


const EmployeeSalaries=() => {
      const[salaries, setSalaries] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8081/api/staff/salary/getall");
        setSalaries(result.data.reverse());
      };
    
      const removeEmployeeSalary = async id =>{
        await axios.delete(`http://localhost:8081/api/staff/salary/remove/${id}`);
        swal({
          title: "Success",
          text: "Successfully Remove Field!",
          icon: "success",
          button: "OK"
          });
        loadUsers();
      };
     
    return(
     
      <>
      <Sidebar/> 
      <div className="section">
       <h2 className="cateTopic">Employee Salaries</h2>
          <div className="btnadd">
             <Link to={'/new-salaryfield'}>
               <button type="button" class="btn btn-primary">+ Add New</button>
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
                    <th>Emp.Id</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>BasicSalary</th>
                    <th>Month</th>
                    <th>Advance</th>
                    <th>Overtime</th>
                    <th>Total</th>
                    <th>perDaySalary</th>
                    <th>TotalDays</th>                   
                    <th>Action</th>
                 </tr>
             </thead>
            <tbody className="tbody">
              {salaries.filter(val =>{

                      if(searchTerm === ""){

                          return val;

                      } else if(

                        val.employeeId.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.employeeName.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.month.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.totalDays.toLowerCase().includes(searchTerm.toLowerCase())
                      ){

                      return val;

                      }

                      })
                      .map((sal, index) => (
               
                <tr>
                <td>{sal.employeeId}</td>
                <td>{sal.employeeName}</td>
                <td>{sal.position}</td>
                <td>{sal.basicSalary}</td>
                <td>{sal.month}</td>
                <td>{sal.advancePayment}</td>
                <td>{sal.overtimePayment}</td>
                <td>{sal.totalPayment}</td>
                <td>{sal.perDaySalary}</td>
                <td>{sal.totalDays}</td>
                <td style={{ display: 'flex', alignItems: 'center' }}> 
                   
                   <Link className="btn btn-success mr-2" to={`update-salary/${sal._id}`}>
                   <AiFillEdit size="20px" color="white"/></Link>
               
                  <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeEmployeeSalary(sal._id)}>
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
export default EmployeeSalaries;