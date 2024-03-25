import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
// import {AiFillEye} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar'


const Orders=() => {
      const[orders, setOrders] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8081/api/order/order/getallorders");
        setOrders(result.data.reverse());
      };
    
      const removeOrder= async id =>{
        await axios.delete(`http://localhost:8081/api/order/order/removeorder/${id}`);
        swal({
          title: "Success",
          text: "Successfully Remove Order !",
          icon: "success",
          button: "OK"
          });
        loadUsers();
      };
     
    return(
     
      <>
      <Sidebar/> 
      <div className="section">
       <h2 className="cateTopic">All Orders</h2>
       <div className="btnadd">
                <div class="btn-group">
                  <Link to="/report-view2"><button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                placeholder="search order"
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
                    <th>Customer Name</th>
                    <th>Date</th>    
                    <th>Address</th>    
                    <th>Phone</th>     
                    <th>Total</th>      
                    <th>Action</th>
                 </tr>
             </thead>
            <tbody className="tbody">
              {orders.filter(val =>{

                      if(searchTerm === ""){

                          return val;

                      } else if(

                        val.categoryName.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.orderDate.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.address.toLowerCase().includes(searchTerm.toLowerCase())

                      ){

                      return val;

                      }

                      })
                      .map((order, index) => (
                <tr>

                <td>Chamika</td>
                <td>{order.orderDate.split("T")[0]}</td>
                <td>{order.address}</td>
                <td>{order.Phone}</td>
                <td>{order.totalCost}</td>

                <td style={{ display: 'flex', alignItems: 'center' }}> 
                   
                   {/* <Link className="btn btn-info mr-2" to={`/view-order/${order._id}`}>
                   <AiFillEye size="20px" color="white"/></Link> */}
               
                  <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeOrder(order._id)}>
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
export default Orders;