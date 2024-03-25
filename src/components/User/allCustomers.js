
import React, { useState, useEffect } from "react";
import axios from "axios";
// import {ImUserPlus } from 'react-icons/im'
import { Link } from "react-router-dom";
import {AiFillEdit, AiFillEye} from 'react-icons/ai'
import {FaTrashAlt} from 'react-icons/fa'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar'



const CustomerList = () => {
  const [users, setUser] = useState([]);
  const[searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8081/api/customer/customer/getallcustomers");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:8081/api/customer/customer/removecustomer/${id}`);
    swal({

      title: "Success",

      text: "Delete Successfully !!",

      icon: "success",

      button: "OK"

    });
    loadUsers();
  };

    return(
      <>
         <Sidebar/> 
        <main id="site-main"> 

        <div className="container-list">

            <h2 className="cateTopic">All Registered Customers</h2>
              <div className="btnadd">
                <div class="btn-group">
                  <Link to="/report-view1"><button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Export Report
                  </button>
                  </Link>
                </div>
            </div>
            <div className="search">
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

    
                <form>
                    <div className="cateb">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody className="tbody">
                            {users.filter(val =>{

                                    if(searchTerm === ""){

                                        return val;

                                    } else if(

                                        val.firstName.toLowerCase().includes(searchTerm.toLowerCase())||
                                        val.lastName.toLowerCase().includes(searchTerm.toLowerCase())||
                                        val.email.toLowerCase().includes(searchTerm.toLowerCase())

                                    ){

                                        return val;

                                    }

                                    })
                                                            
                            
                            
                            .map((user, index) => (
                                <tr>
                                
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>********</td>
                                    <td>
                                        

                                    {/* <Link class="btn btn-info"  to={`/update/${user._id}`}>
                                        <AiFillEye size="23px" color="white"/>
                                        </Link> */}
                                        

                                        <Link class="btn btn-danger" onClick={() => deleteUser(user._id)}>
                                        <FaTrashAlt size="23px" color="white"/>
                                        </Link>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                      </div>
                    </form>       
            </div>
        </main>  

     </>
    )
}

export default CustomerList;