import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEdit} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar'


const Items=() => {
      const[item, setItem] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8081/api/catalogue/item/getallitems");
        setItem(result.data.reverse());
      };
    
      const removeItem= async id =>{
        await axios.delete(`http://localhost:8081/api/catalogue/item/removeitem/${id}`);
        swal({
          title: "Success",
          text: "Successfully Remove Item !",
          icon: "success",
          button: "OK"
          });
        loadUsers();
      };
     
    return(
     
      <>
      <Sidebar/> 
      <div className="section">
       <h2 className="cateTopic">All Furnitures </h2>
          <div className="btnadd">
             <Link to={'/add-Item'}>
               <button type="button" class="btn btn-primary" style={{ marginRight: '15px' }}>+ Add Item</button>
              </Link>
              <div class="btn-group">
                  <Link to="/report-view4"><button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                placeholder="search item"
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
                    {/* <th>#No.</th> */}
                    <th>Item Name</th>
                    <th>Item Category</th>
                    <th>Material</th>
                    <th>Price</th>      
                    <th>StockStatus</th>   
                    <th>Description</th> 
                    <th>Image</th> 
                    <th>Action</th>
                 </tr>

             </thead>
            <tbody className="tbody">
              {item.filter(val =>{

                      if(searchTerm === ""){

                          return val;

                      } else if(

                        val.itemName.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.itemCategory.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.price.toLowerCase().includes(searchTerm.toLowerCase())

                      ){

                      return val;

                      }

                      })
                      .map((itm, index) => (
               
                <tr>
                {/* <td>{itm.itemId}</td> */}
                <td>{itm.itemName}</td>
                <td>{itm.itemCategory}</td>
                <td>{itm.Material}</td>
                <td>{itm.price}</td>
                <td>{itm.stockStatus}</td>
                <td>{itm.itemDescription}</td>
                <td>{itm.image}</td>
                <td style={{ display: 'flex', alignItems: 'center' }}> 
                   
                   <Link className="btn btn-success mr-2" to={`edit-item/${itm._id}`}>
                   <AiFillEdit size="20px" color="white"/></Link>
               
                  <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeItem(itm._id)}>
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
export default Items;