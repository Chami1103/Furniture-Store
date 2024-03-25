import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEdit} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar'


const DriverList=() => {
      const[drivers, setDrivers] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8081/api/delivery/drivers/getalldrivers");
        setDrivers(result.data.reverse());
      };
    
      const deleteDriver = async id =>{
        await axios.delete(`http://localhost:8081/api/delivery/drivers/removedriver/${id}`);
        swal({
          title: "Success",
          text: "Driver Deleted Successfully!",
          icon: "success",
          button: "OK"
          });
        loadUsers();
      };
     
    return(
     
      <>
      <Sidebar/> 
      <div className="section">
       <h2 className="cateTopic">Driver List</h2>
          <div className="btnadd">
             <Link to={'/new-driver'}>
               <button type="button" class="btn btn-primary">+ New Driver</button>
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
                placeholder="search driver"
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
                    {/* <th>Emp.ID</th> */}
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>ContactNumber</th>
                    <th>LicenceType</th>
                    <th>Action</th>
                 </tr>
             </thead>
            <tbody className="tbody">
              {drivers.filter(val =>{

                      if(searchTerm === ""){

                          return val;

                      } else if(

                        val.empFirstName.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.empLastName.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.empEmail.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.licenceType.toLowerCase().includes(searchTerm.toLowerCase())
                      ){

                      return val;

                      }

                      })
                      .map((drive, index) => (
               
                <tr>
                {/* <td>{drive.driverId}</td> */}
                {/* <td>{drive.empID}</td> */}
                <td>{drive.empFirstName}</td>
                <td>{drive.empLastName}</td>
                <td>{drive.empEmail}</td>
                <td>{drive.contactNumber}</td>
                <td>{drive.licenceType}</td>
                <td style={{ display: 'flex', }}> 
                   
                   <Link className="btn btn-success mr-2" to={`/update-driver/${drive._id}`}>
                   <AiFillEdit size="20px" color="white"/></Link>
               
                  <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => deleteDriver(drive._id)}>
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
export default DriverList;