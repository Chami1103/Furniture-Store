import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEdit} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar'


const VehicleList=() => {
      const[vehicles, setVehicles] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8081/api/delivery/vehicle/getallvehicles");
        setVehicles(result.data.reverse());
      };
    
      const deleteVehicle = async id =>{
        await axios.delete(`http://localhost:8081/api/delivery/vehicle/removevehicle/${id}`);
        swal({
          title: "Success",
          text: "Successfully Remove Vehicle!",
          icon: "success",
          button: "OK"
          });
        loadUsers();
      };
     
    return(
     
      <>
      <Sidebar/> 
      <div className="section">
       <h2 className="cateTopic">Vehicle List</h2>
          <div className="btnadd">
             <Link to={'/new-vehicle'}>
               <button type="button" class="btn btn-primary" style={{ marginRight: '15px' }}>+ Add New Vehicle</button>
              </Link>
              <div class="btn-group">
                  <Link to="/report-view5"><button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                placeholder="search vehicle"
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
                    <th>VehicleType</th>
                    <th>VehicleModel</th>
                    <th>VehicleNo</th>
                    <th>Year</th>
                    <th>Mileage</th>
                    <th>Next Service</th>
                    <th>Action</th>
                 </tr>
             </thead>
            <tbody className="tbody">
              {vehicles.filter(val =>{

                      if(searchTerm === ""){

                          return val;

                      } else if(

                        val.vehicleType.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.vehicleModel.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.vehicleNo.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.nextServiceReminder.toLowerCase().includes(searchTerm.toLowerCase())
                      ){

                      return val;

                      }

                      })
                      .map((vehi, index) => (
               
                <tr>
                {/* <td>{vehi.vehicleId}</td> */}
                <td>{vehi.vehicleType}</td>
                <td>{vehi.vehicleModel}</td>
                <td>{vehi.vehicleNo}</td>
                <td>{vehi.Year}</td>
                <td>{vehi.mileage}</td>
                <td>{vehi.nextServiceReminder.split("T")[0]}</td>
                <td style={{ display: 'flex', alignItems: 'center' }}> 
                   
                   <Link className="btn btn-success mr-2" to={`update-vehicle/${vehi._id}`}>
                   <AiFillEdit size="20px" color="white"/></Link>
               
                  <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => deleteVehicle(vehi._id)}>
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
export default VehicleList;