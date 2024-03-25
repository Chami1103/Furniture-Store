import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEdit, AiFillEye} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Side from './Side';

const AllOrders=() => {

      const[orders, setOrders] = useState([]);

      useEffect(()=>{

        loadOrder();

      },[]);

 

      const loadOrder = async ()=>{

        const result = await axios.get("http://localhost:8081/api/order/order/getallorders");

        setOrders(result.data.reverse());

      };

   

      const removeOrder= async id =>{

        await axios.delete(`http://localhost:8081/api/order/order/removeorder/${id}`);

        swal({

          title: "Success",

          text: "Successfully Cancel Order !",

          icon: "success",

          button: "OK"

          });

          loadOrder();

      };

     

    return(
     
      <Fragment>
        <div class="content-body">
          <div class="container-fluid">
            <div className="row">
                <div className="col-lg-2 pl-0">
                <Side />
                </div>
                <div class="col-lg-10">
                <div className="section">

<h2 className="cateTopic">My Orders</h2>

   <div className="catetb">

   <table className="table">

     <thead className="thead-dark">

          <tr>
             <th>Address</th>              
             <th>Contact Number</th>
             <th>Order Date</th>
             <th>Total Cost</th>
             <th>Action</th>
          </tr>

      </thead>

     <tbody className="tbody">
        { orders.map((orders, index) => (
         <tr>
         {/* <td>{orders.customerName}</td> */}
         <td>{orders.address}</td>
         <td>{orders.Phone}</td>
         <td>{orders.orderDate.split("T")[0]}</td>
         <td>{orders.totalCost}</td>
    

         <td style={{ display: 'flex', alignItems: 'center' }}>

            {/* <Link className="btn btn-info mr-2" to={`/viewcard/${card._id}`}>
            Select Card</Link>

            <Link className="btn btn-success mr-2" to={`/updatecard/${card._id}`}>
            <AiFillEdit size="20px" color="white"/></Link> */}

           <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeOrder(orders._id)}>
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

export default AllOrders;