import React, { useState, useEffect, Fragment } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Sidebar from './Sidebar';
import Rating from 'react-rating-stars-component';

function UpdateFeedback() {
  const { id } = useParams();
  const [val, setVal] = useState({
    Username: "",
    date: getCurrentDate(),
    starCount: "",
    feedbackMsg: "",
    suggetion: ""
  });

  const { Username, date, starCount, feedbackMsg, suggetion } = val;

  const onInputChange = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    loadVal();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/api/feedback/feedback/update/${id}`, val);
    swal({
      title: "Success",
      text: "Feedback Updated Successfully!",
      icon: "success",
      button: "OK"
    });
    window.location.assign("/Myfeedback");
  };

  const loadVal = async () => {
    const result = await axios.get(`http://localhost:8081/api/feedback/feedback/getfeedbackbyid/${id}`);
    setVal(result.data);
    console.log(result.data)
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>
        <div className="col-12 col-md-10">
          <div className="row wrapper">
            <div className="col-10 col-lg-5">
              <form className="shadow-lg" onSubmit={onSubmit}>
                <h1 className="mt-2 mb-5">Update Feedback</h1>

                <div className="form-group" style={{ textAlign: 'left' }}>
                  <label htmlFor="rating_field">Rating</label>
                  <Rating
                    count={5}
                    value={4}
                    onChange={(newRating) => setVal({ ...val, starCount: newRating })}
                    size={54}
                    activeColor="#ffd700"
                    edit={true}
                  />
                </div>

                <div className="form-group" style={{ textAlign: 'left' }}>
                  <label htmlFor="name_field">User Name</label>
                  <input
                    type="text"
                    id="Username"
                    className="form-control"
                    name="Username"
                    value={Username}
                    onChange={onInputChange}
                    required
                  />
                </div>

                <div className="form-group" style={{ textAlign: 'left' }}>
                  <label htmlFor="date_field">Date</label>
                  <input
                    type="text"
                    id="date"
                    className="form-control"
                    name="date"
                    value={date.split('T')[0]}
                    onChange={onInputChange}
                    readOnly
                  />
                </div>

                <div className="form-group" style={{ textAlign: 'left' }}>
                  <label htmlFor="description_field">Feedback</label>
                  <input
                    type="text"
                    id="feedbackMsg"
                    className="form-control"
                    name="feedbackMsg"
                    value={feedbackMsg}
                    onChange={onInputChange}
                    required
                  />
                </div>

                <div className="form-group" style={{ textAlign: 'left' }}>
                  <label htmlFor="description_field">Suggestions</label>
                  <input
                    type="text"
                    id="suggetion"
                    className="form-control"
                    name="suggetion"
                    value={suggetion}
                    onChange={onInputChange}
                  />
                </div>

                <button type="submit" className="btn update-btn btn-block mt-4 mb-3">Update Feedback</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default UpdateFeedback;

