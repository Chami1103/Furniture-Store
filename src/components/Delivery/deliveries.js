import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEdit} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar'


const AllDeliveries=() => {
      const[delivery, setDelivery] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8081/api/delivery/delivery/getalldeliveries");
        setDelivery(result.data.reverse());
      };
    
      const removeDelivery = async id =>{
        await axios.delete(`http://localhost:8081/api/delivery/delivery/removedelivery/${id}`);
        swal({
          title: "Success",
          text: "Successfully Remove Delivery!",
          icon: "success",
          button: "OK"
          });
        loadUsers();
      };
     
    return(
     
      <>
      <Sidebar/> 
      <div className="section">
       <h2 className="cateTopic">All Deliveries</h2>
          <div className="btnadd">
             <Link to={'/new-delivery'}>
               <button type="button" class="btn btn-primary" style={{ marginRight: '15px' }}>+ New Delivery</button>
              </Link>
              <div class="btn-group">
                  <Link to="/report-view6"><button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <th>Receiver Address</th>
                    <th>Phone</th>
                    <th>Driver</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Vehicle No</th>
                    <th>Action</th>
                 </tr>
             </thead>
            <tbody className="tbody">
              {delivery.filter(val =>{

                      if(searchTerm === ""){

                          return val;

                      } else if(

                        val.assignedDriver.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.deliveryDate.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.vehicleNo.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.deliveryStatus.toLowerCase().includes(searchTerm.toLowerCase())
                      ){

                      return val;

                      }

                      })
                      .map((deli, index) => (
               
                <tr>

                <td>{deli.receiverAddress}</td>
                <td>{deli.receiverContactNumber}</td>
                <td>{deli.assignedDriver}</td>
                <td>{deli.deliveryDate.split("T")[0]}</td>
                <td>{deli.deliveryStatus}</td>
                <td>{deli.vehicleNo}</td>
                <td style={{ display: 'flex', alignItems: 'center' }}> 
                   
                   <Link className="btn btn-success mr-2" to={`update-delivery/${deli._id}`}>
                   <AiFillEdit size="20px" color="white"/></Link>
               
                  <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeDelivery(deli._id)}>
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
export default AllDeliveries;