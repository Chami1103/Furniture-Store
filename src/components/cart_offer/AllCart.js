import React, { useState, useEffect,cre } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert';


export default function AllCart() {

    const history = useHistory();
    const [carRes, setCarRes] = useState([]);
    let Cost = 0;
      

    useEffect(() => {

        axios.get('http://localhost:8081/api/order/cart/getallcart')
            .then((res) => {
                setCarRes(res.data);
                console.log(res.data);
                console.log(res.data.product_price)
            }).catch((err) => {
                console.log(err.message);
            });
    }, []);


    function deleteCart(id) {
        axios.delete(`http://localhost:8081/api/order/cart/removecart/${id}`)
            .then(() => {
                swal({
                    title: "Success",
                    text: "Delete Item Successfully!",
                    icon: "success",
                    button: "OK"
                });
                window.location.assign("/cart")

            }).catch((err) => {
                alert(err);
            });
    }
    var count = 0;
    
    function handleCheckout() {
        // Navigate to the checkout page and pass totalCost as a URL parameter
        history.push(`/checkout?totalCost=${Cost}`);
      }

    return (
        <div className="raw">
            <div className="col-lg-7">

                {carRes.map((val, res) => {
                    return (
                        <div className="raw">
                            <div class="card3" >
                                <div className="card-body">
                                    <img src={`./prodImage/` + val.image} width="300px" height="300px" />
                                </div>
                            </div>

                            <div class="card4" >
                                <div className="card-body">
                                    <div className="add_itm">
                                        <div className="col-lg-6 text-light">
                                            <div className="col">
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" name="itemName" value={val.itemName} id="itemName" className="form-control0" readOnly />
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="text" name="price" id="product_price" value={val.price * val.quantity} className="form-control0" readOnly />
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="text" name="itemDescription" id="itemDescription" value={val.itemDescription} className="form-control0" readOnly />
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="text" name="quantity" id="quantity" value={val.quantity} className="form-control0" readOnly />
                                                    </div>
                                                    <div className="raw">
                                                        <a href={`/update/${val._id}`} className="btn btn-success">Update</a>
                                                        <input type="button" name="delete" value="Delete" className="btn btn-danger" onClick={() => deleteCart(val._id)} />

                                                    </div>
                                                </form>
                                            </div></div></div></div></div>
                        </div>
                    )
                })
                }

            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-20">
                <div className='se'>
                    {
                        carRes.map((val, res) => {
                            return (
                                <p>Item:  {Cost = Cost + (val.price * val.quantity)}</p>
                            )
                        })
                    }
                </div><br></br>
                <div className="res">
                    <p>Total: Rs.{Cost}.00</p>
                    <button onClick={handleCheckout}className="btn btn-success large">Process To Checkout</button>
                    </div>
                {/* <Link to="/checkout"> */}
                    
                    {/* </Link> */}
            </div>
        </div>
    )

}