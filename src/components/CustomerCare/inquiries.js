import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEdit} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar'


const AllInquiries=() => {
      const[inquiry, setInquiry] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8081/api/feedback/inquiry/getallinquiries");
        setInquiry(result.data.reverse());
      };
    
      const removeInquiry = async id =>{
        await axios.delete(`http://localhost:8081/api/feedback/inquiry/removeinquiry/${id}`);
        swal({
          title: "Success",
          text: "Successfully Remove !",
          icon: "success",
          button: "OK"
          });
        loadUsers();
      };
     
    return(
     
      <>
      <Sidebar/> 
      <div className="section">
       <h2 className="cateTopic">Customer Inquiries</h2>
          <div className="btnadd">
             {/* <Link to={'#'}>
               <button type="button" class="btn btn-primary" style={{ marginRight: '15px' }}>+ Add New Vehicle</button>
              </Link> */}
              <div class="btn-group">
                  <Link to="/report-view7"><button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Title</th>
                    <th>Inquiry</th>
                    <th>Action</th>
                 </tr>
             </thead>
            <tbody className="tbody">
              {inquiry.filter(val =>{

                      if(searchTerm === ""){

                          return val;

                      } else if(

                        val.firstName.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.lastName.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.Phone.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.title.toLowerCase().includes(searchTerm.toLowerCase())
                      ){

                      return val;

                      }

                      })
                      .map((inq, index) => (
                <tr>
                <td>{inq.firstName}</td>
                <td>{inq.lastName}</td>
                <td>{inq.Phone}</td>
                <td>{inq.Email}</td>
                <td>{inq.title}</td>
                <td>{inq.inquiryMsg}</td>

                <td style={{ display: 'flex', alignItems: 'center' }}> 
               
                  <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeInquiry(inq._id)}>
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
export default AllInquiries;