import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEye} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar'


const Payments=() => {
      const[payments, setPayment] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8081/api/payment/payment/getallpayments");
        setPayment(result.data.reverse());
      };
    
      const removePayment= async id =>{
        await axios.delete(`http://localhost:8081/api/payment/payment/removepayment/${id}`);
        swal({
          title: "Success",
          text: "Successfully Remove Payment !",
          icon: "success",
          button: "OK"
          });
        loadUsers();
      };
     
    return(
     
      <>
      <Sidebar/> 
      <div className="section">
       <h2 className="cateTopic">All Payments</h2>
       <div className="btnadd">
             <Link to={'/report-view10'}>
               <button type="button" class="btn btn-warning">Export Report</button>
              </Link>
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

                    <th>Payment Method</th>
                    <th>Amount</th>
                    <th>Customer Name</th>
                    <th>TransactionDate</th>              
                    <th>Action</th>
                 </tr>
             </thead>
            <tbody className="tbody">
              {payments.filter(val =>{

                      if(searchTerm === ""){

                          return val;

                      } else if(

                        val.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.customerName.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.transactionDate.toLowerCase().includes(searchTerm.toLowerCase())
                      ){

                      return val;

                      }

                      })
                      .map((pay, index) => (
               
                <tr>

                <td>{pay.paymentMethod}</td>
                <td>{pay.paymentAmount}.00</td>
                <td>{pay.customerName}</td>
                <td>{pay.transactionDate.split("T")[0]}</td>
                <td style={{ display: 'flex', alignItems: 'center' }}> 
               
                  <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removePayment(pay._id)}>
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
export default Payments;