import React, { useState, useEffect , Fragment} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Sidebar from './Sidebar'

function Viewcard() {


  let history = useHistory();
  const { id } = useParams();
  const [val, setVal] = useState({
    cardnumber: "",
    customerName: "",
    expiry: "",
    cvc: ""
  });

  const { cardnumber, customerName, expiry, cvc} = val;
//   const onInputChange = e => {
//     setVal({ ...val, [e.target.name]: e.target.value });
//   };


  useEffect(() => {
    loadVal();
  }, []);

//   const onSubmit = async e => {
//     e.preventDefault();

//     await axios.put(`http://localhost:8081/api/payment/cardpay/updatecard/${id}`, val)
//     swal({

//       title: "Success",

//       text: "Card Details Updated Successfully!",

//       icon: "success",

//       button: "OK"

//     });
//     //window.location.assign("/cardDetails")
//     history.push('/cardDetails');

//   };

  const loadVal = async () => {

    const result = await axios.get(`http://localhost:8081/api/payment/cardpay/getcardbyid/${id}`);
    setVal(result.data);
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

                    <form className="shadow-lg" >

                        <h1 className="mt-2 mb-5"> Card Details for Pay</h1>



                        <div className="form-group">

                            <label htmlFor="cardnumber_field">Card Number</label>

                            <input

                                type="text"

                                id="cardnumber"

                                className="form-control"

                                name='cardnumber'

                                value={cardnumber}

                            readOnly

                            />

                        </div>



                        <div className="form-group">

                            <label htmlFor="email_field">Name</label>

                            <input

                                type="name"

                                id="customerName"

                                className="form-control"

                                name='customerName'

                                value={customerName}

                             readOnly
                            />

                        </div>


                  <div className="form-group">

                    <label htmlFor="date_field">Expire Date</label>

                    <input

                         type="text"

                         id="expiry"

                        className="form-control"

                         name='expiry'

                         
                         value={expiry.split("T")[0]}

                         readOnly


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

                         readOnly


                     />

                  </div>


                        <Link to={'/paySuccess'}><button type="submit" className="btn update-btn btn-block mt-4 mb-3" >Pay Now</button></Link>

                    </form>

                </div>

            </div>

        </div>

    </div>



</Fragment>


  );

}

export default Viewcard;