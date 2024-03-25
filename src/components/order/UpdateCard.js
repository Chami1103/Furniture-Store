import React, { useState, useEffect , Fragment} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Sidebar from './Sidebar'

function Updatecard() {

  let history = useHistory();
  const { id } = useParams();

  const [expiryDateValue, setExpiryDateValue] = useState("");
  const [val, setVal] = useState({
    cardnumber: "",
    customerName: "",
    expiry: "",
    cvc: ""
  });

  const { cardnumber, customerName, expiry, cvc} = val;
  const onInputChange = e => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadVal();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();

    await axios.put(`http://localhost:8081/api/payment/cardpay/updatecard/${id}`, val)
    swal({

      title: "Success",
      text: "Card Details Updated Successfully!",
      icon: "success",
      button: "OK"

    });
    history.push('/cardDetails');

  };

  const loadVal = async () => {

    const result = await axios.get(`http://localhost:8081/api/payment/cardpay/getcardbyid/${id}`);
    setVal(result.data);
    setExpiryDateValue(formatDate(result.data.expiry));
  };

        // Function to format date to yyyy-MM-dd
          const formatDate = (dateString) => {
          const date = new Date(dateString);
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          return `${year}-${month}-${day}`;
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
                    <form className="shadow-lg" onSubmit={e => onSubmit(e)}>
                        <h1 className="mt-2 mb-5">Update Card Details</h1>

                        <div className="form-group">
                            <label htmlFor="cardnumber_field">Card Number</label>
                            <input
                                type="text"
                                id="cardnumber"
                                className="form-control"
                                name='cardnumber'
                                pattern="^\d{4}-\d{4}-\d{4}-\d{4}$" 
                                title="Please enter a valid card number in the format 1234-5678-1234-5678"
                                value={cardnumber}
                                onChange={(e) => onInputChange(e)}  required

                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="email_field">Holder Name</label>
                            <input
                                type="text"
                                id="customerName"
                                className="form-control"
                                name='customerName'
                                value={customerName}
                                pattern="[A-Za-z\s]+"
                                title="Holder name can only contain letters and spaces."
                                onChange={(e) => onInputChange(e)} required
                            />

                        </div>


                  <div className="form-group">
                    <label htmlFor="date_field">Expire Date</label>
                    <input

                         type="date"
                         id="expiry"
                         className="form-control"
                         name='expiry'
                         value={expiryDateValue}
                         onChange={(e) => onInputChange(e)} required
                     />

                  </div>
                  <div className="form-group">

                    <label htmlFor="description_field">CVC</label>
                    <input
                         type="number"
                         id="cvc"
                         className="form-control"
                         name='cvc'
                         value={cvc}
                         pattern="\d{3,4}"
                         title="Please enter a valid CVC code (3 or 4 digits)"
                         onChange={(e) => onInputChange(e)} required
                     />

                  </div>
                        <button type="submit" className="btn update-btn btn-block mt-4 mb-3" >Update Card Details</button>
                    </form>

                </div>
            </div>
        </div>
    </div>

</Fragment>

  );

}

export default Updatecard;