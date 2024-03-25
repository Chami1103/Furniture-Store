import React, { Fragment, useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import Swal from 'sweetalert';
import Rating from 'react-rating-stars-component';
import {useHistory }  from "react-router-dom";

export default function AddFeedback() {

  let history = useHistory();
  const [Username, setUsername] = useState('');
  const [date, setDate] = useState(getCurrentDate()); // Initialize with the current date
  const [starCount, setStarCount] = useState(0);
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [suggetion, setSuggetion] = useState('');

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function sendData(e) {
    e.preventDefault();

    const newFeedback = {
      Username,
      date,
      starCount,
      feedbackMsg,
      suggetion,
    };

    axios
      .post('http://localhost:8081/api/feedback/feedback/addfeedback', newFeedback)
      .then(() => {
        Swal({
          title: 'Success',
          text: 'Successfully Added Feedback!!',
          icon: 'success',
          button: 'OK',
        });
        history.push("/Myfeedback");
      })
      .catch((err) => {
        console.log(err);
        Swal({
          title: 'Warning',
          text: 'Please Try Again!!',
          icon: 'info',
          button: 'OK',
        });
      });
  }

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <div className="row wrapper">
            <div className="col-10 col-lg-5">
              <form className="shadow-lg" onSubmit={sendData}>
                <h1 className="mt-2 mb-5">New Feedback</h1>


                <div className="form-group" style={{ textAlign: 'left' }}>
                  <label htmlFor="rating_field">Rating</label>
                  <Rating
                    count={5}
                    value={starCount}
                    onChange={setStarCount}
                    size={54}
                    activeColor="#ffd700"
                    
                  />
                </div>
                <div className="form-group" style={{ textAlign: 'left' }}>
                  <label htmlFor="name_field">Username</label>
                  <input
                    type="text"
                    id="name_field"
                    className="form-control"
                    name="name"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group" style={{ textAlign: 'left' }} >
                  <label htmlFor="date_field">Date</label>
                  <input
                    type="date"
                    id="date_field"
                    className="form-control"
                    name="date"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    disabled
                  />
                </div>

                <div className="form-group" style={{ textAlign: 'left' }}>
                  <label htmlFor="description_field">Feedback Message</label>
                  <textarea
                    type="text"
                    rows={3}
                    id="description_field"
                    className="form-control"
                    name="description"
                    onChange={(e) => {
                      setFeedbackMsg(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div className="form-group" style={{ textAlign: 'left' }}>
                  <label htmlFor="description_field">Suggestions</label>
                  <textarea
                    type="text"
                    rows={3}
                    id="suggestion_field"
                    className="form-control"
                    name="suggestion"
                    onChange={(e) => {
                        setSuggetion(e.target.value);
                    }}
                  > </textarea>
                </div>

                <button type="submit" className="btn update-btn btn-block mt-4 mb-3">
                  Add Feedback
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

