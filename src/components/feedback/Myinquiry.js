import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEdit} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from './Sidebar'

const Myinquiry=() => {

      const[inquiry, setInquiry] = useState([]);

      useEffect(()=>{

        loadInquiry();

      },[]);

 

      const loadInquiry = async ()=>{

        const result = await axios.get("http://localhost:8081/api/feedback/inquiry/getallinquiries");

        setInquiry(result.data.reverse());

      };

   

      const removeInquiry= async id =>{

        await axios.delete(`http://localhost:8081/api/feedback/inquiry/removeinquiry/${id}`);

        swal({

          title: "Success",

          text: "Successfully Removed Inquiry !",

          icon: "success",

          button: "OK"

          });

          loadInquiry();

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

<h2 className="cateTopic">My Inquries</h2>

   {/* <div className="btnadd">

      <Link to={'/feedback'}>

        <button type="button" class="btn btn-primary">+ Add Feedback</button>

       </Link>

   </div> */}

   {/* <div class="btn-group">

     <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

       Export as

     </button>

     <div class="dropdown-menu">

       <Link to="/reportView"><a class="dropdown-item" href="#">PDF</a></Link>

     </div>

   </div> */}

   <div className="catetb">

   <table className="table">

     <thead className="thead-dark">

          <tr>
             <th>First Name</th>
             <th>Last Name</th>
             <th>Phone</th>              
             <th>Email</th>
             <th>Title</th>
             <th>InquiryMsg</th>
             <th>Action</th>

          </tr>

      </thead>

     <tbody className="tbody">
        { inquiry.map((inquiry, index) => (
         <tr>
         {/* <td>{inquiry.inquiryId}</td> */}
         <td>{inquiry.firstName}</td>
         <td>{inquiry.lastName}</td>
         <td>{inquiry.Email}</td>
         <td>{inquiry.Phone}</td>
         <td>{inquiry.title}</td>
         <td>{inquiry.inquiryMsg}</td>

         <td style={{ display: 'flex', alignItems: 'center' }}>

           <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeInquiry(inquiry._id)}>
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

export default Myinquiry;