import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar'


const Card=() => {
      const[cards, setCard] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8081/api/payment/cardpay/getallcards");
        setCard(result.data.reverse());
      };
    
      const removeCard= async id =>{
        await axios.delete(`http://localhost:8081/api/payment/cardpay/removecard/${id}`);
        swal({
          title: "Success",
          text: "Successfully Remove Card !",
          icon: "success",
          button: "OK"
          });
        loadUsers();
      };
     
    return(
     
      <>
      <Sidebar/> 
      <div className="section">
       <h2 className="cateTopic">Customer Credit Card Details</h2>
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
                    <th>#No.</th>
                    <th>Card Number</th>
                    <th>Customer Id</th>
                    <th>Customer Name</th>
                    <th>Expire Date</th>
                    <th>CVC</th>              
                    <th>Action</th>
                 </tr>
             </thead>
            <tbody className="tbody">
              {cards.filter(val =>{

                      if(searchTerm === ""){

                          return val;

                      } else if(

                        val.cardnumber.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.customerId.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.customerName.toLowerCase().includes(searchTerm.toLowerCase())
                      ){

                      return val;

                      }

                      })
                      .map((card, index) => (
               
                <tr>
                <td>{card.cardId}</td>
                <td>{card.cardnumber}</td>
                <td>{card.customerId}</td>
                <td>{card.customerName}</td>
                <td>{card.expiry}</td>
                <td>{card.cvc}</td>

                <td> 
               
                  <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeCard(card._id)}>
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
export default Card;