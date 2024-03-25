import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEdit} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar'


const AllFeedbacks=() => {
      const[feedback, setFeedback] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8081/api/feedback/feedback/getallfeedbacks");
        setFeedback(result.data.reverse());
      };
    
      const removeFeedback = async id =>{
        await axios.delete(`http://localhost:8081/api/feedback/feedback/remove/${id}`);
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
       <h2 className="cateTopic">Customer Feedbacks</h2>
       <div className="btnadd">
              <div class="btn-group">
                  <Link to="/report-view11"><button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <th>Username</th>
                    <th>Date</th>
                    <th>Ratings</th>
                    <th>Feedback Msg</th>
                    <th>Suggestions</th>
                    <th>Action</th>
                 </tr>
             </thead>
            <tbody className="tbody">
              {feedback.filter(val =>{

                      if(searchTerm === ""){

                          return val;

                      } else if(

                        val.date.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.Email.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.Phone.toLowerCase().includes(searchTerm.toLowerCase())
                      ){

                      return val;

                      }

                      })
                      .map((feed, index) => (
                <tr>
                <td>{feed.Username}</td>
                <td>{feed.date.split("T")[0]}</td>
                <td>{feed.starCount}</td>
                <td>{feed.feedbackMsg}</td>
                <td>{feed.suggetion}</td>

                <td style={{ display: 'flex', alignItems: 'center' }}> 
               
                  <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeFeedback(feed._id)}>
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
export default AllFeedbacks;