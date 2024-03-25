import React, { useState, useEffect, Fragment, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from './Sidebar';
// import { UserContext } from '../../UserContext';

const MyFeedback = () => {
  // const { user } = useContext(UserContext); // Access the user ID from the UserContext
  // console.log(user);

  const [feed, setFeedback] = useState([]);

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const loadFeedbacks = async () => {
    // Fetch feedbacks for the logged-in user
    const result = await axios.get(`http://localhost:8081/api/feedback/feedback/getallfeedbacks`);
    setFeedback(result.data.reverse());
  };

  const removeFeedback = async (id) => {
    await axios.delete(`http://localhost:8081/api/feedback/feedback/remove/${id}`);
    swal({
      title: 'Success',
      text: 'Successfully Removed Feedback !',
      icon: 'success',
      button: 'OK',
    });
    loadFeedbacks();
  };

  return (
    <Fragment>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 pl-0">
              <Sidebar />
            </div>
            <div className="col-lg-10">
              <div className="section">
                <h2 className="cateTopic">My Feedbacks</h2>
                <div className="catetb">
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        {/* <th>Name</th> */}
                        <th>Date</th>
                        <th>Rating</th>
                        <th>Feedback Msg</th>
                        <th>Suggetion</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="tbody">
                      {feed.map((feedback, index) => (
                        <tr key={feedback._id}>
                          {/* <td>{feedback.Username}</td> */}
                          <td>{feedback.date.split('T')[0]}</td>
                          <td>{feedback.starCount}</td>
                          <td>{feedback.feedbackMsg}</td>
                          <td>{feedback.suggetion}</td>
                          
                          <td style={{ display: 'flex', alignItems: 'center' }}>
                            <Link className="btn btn-success mr-2" to={`/Updatefeed/${feedback._id}`}>
                              <AiFillEdit size="20px" color="white" />
                            </Link>
                            <button className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeFeedback(feedback._id)}>
                              <FaTrashAlt size="20px" color="white" />
                            </button>
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
  );
};

export default MyFeedback;






// import React, {useState, useEffect, Fragment} from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import {FaTrashAlt} from "react-icons/fa"
// import {AiFillEdit} from 'react-icons/ai'
// import swal from 'sweetalert';
// import '../../css/Table.css';
// import Sidebar from './Sidebar'

// const Myfeedback=() => {

//       const[feed, setFeedback] = useState([]);

//       useEffect(()=>{

//         loadFeedbacks();

//       },[]);

 

//       const loadFeedbacks = async ()=>{

//         const result = await axios.get("http://localhost:8081/api/feedback/feedback/getallfeedbacks");
//         setFeedback(result.data.reverse());

//       };

//       const removeFeedback= async id =>{

//         await axios.delete(`http://localhost:8081/api/feedback/feedback/remove/${id}`);

//         swal({

//           title: "Success",
//           text: "Successfully Removed Feedback !",
//           icon: "success",
//           button: "OK"

//           });

//           loadFeedbacks();

//       };

//     return(
     
//       <Fragment>
//         <div class="content-body">
//           <div class="container-fluid">
//             <div className="row">
//                 <div className="col-lg-2 pl-0">
//                 <Sidebar />
//                 </div>
//                 <div class="col-lg-10">
//                 <div className="section">

// <h2 className="cateTopic">My Feedbacks</h2>

//    <div className="catetb">
//    <table className="table">
//      <thead className="thead-dark">
//           <tr>

//              <th>Name</th>
//              <th>Phone</th>
//              <th>Email</th>              
//              <th>Date</th>
//              <th>Feedback Msg</th>
//              <th>Action</th>

//           </tr>

//       </thead>

//      <tbody className="tbody">
//         { feed.map((feed, index) => (
//          <tr>
//          {/* <td>{feed.feedbackId}</td> */}
//          <td>{feed.Username}</td>
//          <td>{feed.Phone}</td>
//          <td>{feed.Email}</td>
//          <td>{feed.date.split("T")[0]}</td>
//          <td>{feed.feedbackMsg}</td>

//          <td style={{ display: 'flex', alignItems: 'center' }}>

            
//             <Link className="btn btn-success mr-2" to={`/Updatefeed/${feed._id}`}>
//             <AiFillEdit size="20px" color="white"/></Link>

//            <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeFeedback(feed._id)}>
//            <FaTrashAlt size="20px" color="white"/></Link>

//            </td>

//         </tr>
//            ))}
//      </tbody>
        
//    </table>

//    </div>

// </div>
//                 </div>
//             </div>
//            </div>
//         </div>
//       </Fragment>

//     )

// }

// export default Myfeedback;