import React, { useState, useEffect } from 'react';
import axios from "axios";
import swal from 'sweetalert';
import { useHistory } from 'react-router';

export default function AddCart(props) {

  let id = props.match.params.id;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8081/api/catalogue/item/viewitembyid/${id}`).then((res) => {
      setData(res.data);
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])



  //Insert Part
  const itemName = data.itemName;
  const price = data.price;
  const itemDescription = data.itemDescription;
  const [quantity, setquantity] = useState("");
  const image = data.image;



  function AddCart(e) {
    e.preventDefault();

    const addCartRes = {
      itemName, price, itemDescription, quantity, image
    }

    console.log(addCartRes);
    axios.post("http://localhost:8081/api/order/cart/addNewcart", addCartRes).then(() => {
      swal({
        title: "Success",
        text: "Cart Added Successfully!",
        icon: "success",
        button: "OK"
      });
      window.location.assign("/cart")

    }).catch((err) => {
      alert(err);
    });
  }


  return (

    <div className="container">
      <div className="raw">
        <div class="card11" >
          <div className="card-body">
            <div className="image">
              <img src={`../prodImage/` + data.image} width="300px" height="300px" />
            </div>
          </div>
        </div>

        <div class="card2" >
          <div className="card-body">
            <div className="add_itm">
              <div className="col-lg-6 text-light">
                <div className="col">
                  <form onSubmit={AddCart}>
                    <div className="form-group">
                      <input type="text" name="itemName" value={data.itemName} id="itemName" className="form-control0" readOnly />
                    </div>

                    <div className="form-group">
                      <input type="text" name="price" id="price" value={data.price} className="form-control0" readOnly />
                    </div>

                    <div className="form-group">
                      <input type="text" name="itemDescription" id="itemDescription" value={data.itemDescription} className="form-control0" style={{ fontSize: "16px", width: "400px" }} readOnly />
                    </div>

                    <div className="form-group">
                      <input type="text" name="quantity" id="quantity" placeholder="Type Quantity" className="form-control0"
                        onChange={
                          (e) => {
                            setquantity(e.target.value);
                          }
                        } />
                    </div>
                    <button type="submit" className="btn btn-warning bt">Add To Cart</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}