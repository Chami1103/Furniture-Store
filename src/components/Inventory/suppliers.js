import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEdit} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar'


const Suppliers=() => {
      const[suppliers, setSupplier] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8081/api/inventory/supplier/getallsuppliers");
        setSupplier(result.data.reverse());
      };
    
      const removeSupplier= async id =>{
        await axios.delete(`http://localhost:8081/api/inventory/supplier/removesupplier/${id}`);
        swal({
          title: "Success",
          text: "Successfully Remove Supplier !",
          icon: "success",
          button: "OK"
          });
        loadUsers();
      };
     
    return(
     
      <>
      <Sidebar/> 
      <div className="section">
       <h2 className="cateTopic">All Suppliers</h2>
          <div className="btnadd">
             <Link to={'/new-supplier'}>
               <button type="button" class="btn btn-primary" style={{ marginRight: '15px' }}>+ Add Supplier</button>
              </Link>
              <div class="btn-group">
                  <Link to="/report-view9"><button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                placeholder="search supplier"
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
                    <th>Supplier Name</th>
                    <th>Email</th>
                    <th>Supplier ContactNumber</th>
                    <th>Supplier Address</th>
                    <th>Item Category</th>               
                    <th>Action</th>
                 </tr>
             </thead>
            <tbody className="tbody">
              {suppliers.filter(val =>{

                      if(searchTerm === ""){

                          return val;

                      } else if(

                        val.supplierName.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.supplierContactNumber.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.supplierEmail.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.supplierItemCategory.toLowerCase().includes(searchTerm.toLowerCase())
                      ){

                      return val;

                      }

                      })
                      .map((sup, index) => (
               
                <tr>
                {/* <td>{sup.supplierId}</td> */}
                <td>{sup.supplierName}</td>
                <td>{sup.supplierEmail}</td>
                <td>{sup.supplierContactNumber}</td>
                <td>{sup.supplierAddress}</td>
                <td>{sup.supplierItemCategory}</td>
                <td style={{ display: 'flex', alignItems: 'center' }}> 
                   
                   <Link className="btn btn-success mr-2" to={`update-supplier/${sup._id}`}>
                   <AiFillEdit size="20px" color="white"/></Link>
               
                  <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeSupplier(sup._id)}>
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
export default Suppliers;