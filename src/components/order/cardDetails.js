import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEdit, AiFillEye} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from './Sidebar'

const CardDetails=() => {

      const[card, setCard] = useState([]);

      useEffect(()=>{

        loadCard();

      },[]);

 

      const loadCard = async ()=>{

        const result = await axios.get("http://localhost:8081/api/payment/cardpay/getallcards");

        setCard(result.data.reverse());

      };

   

      const removeCard= async id =>{

        await axios.delete(`http://localhost:8081/api/payment/cardpay/removecard/${id}`);

        swal({

          title: "Success",

          text: "Successfully Removed Card !",

          icon: "success",

          button: "OK"

          });

          loadCard();

      };

     

    return(
     
      <Fragment>
        <div class="content-body">
          <div class="container-fluid">
            <div className="row">
                <div className="col-lg-2 pl-0">
                <Sidebar />
                </div>
                <div class="col-lg-10">
                <div className="section">

<h2 className="cateTopic">My Cards</h2>

   <div className="catetb">

   <table className="table">

     <thead className="thead-dark">

          <tr>

             <th>Card Number</th>
             <th>Name</th>
             <th>Expiry Date</th>              
             <th>cvv</th>
             <th>Action</th>
          </tr>

      </thead>

     <tbody className="tbody">
        { card.map((card, index) => (
         <tr>
         <td>{card.cardnumber}</td>
         <td>{card.customerName}</td>
         <td>{card.expiry.split("T")[0]}</td>
         <td>{card.cvc}</td>
    

         <td style={{ display: 'flex', alignItems: 'right' }}>

            <Link className="btn btn-info mr-2" to={`/viewcard/${card._id}`}>
            Select Card</Link>

            <Link className="btn btn-success mr-2" to={`/updatecard/${card._id}`}>
            <AiFillEdit size="20px" color="white"/></Link>

           <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeCard(card._id)}>
           <FaTrashAlt size="20px" color="white"/></Link>

           </td>

        </tr>
           ))}
     </tbody>
        
   </table>

   </div>

</div>
                </div>
            </div>
           </div>
        </div>
      </Fragment>

    )

}

export default CardDetails;