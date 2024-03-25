import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const ViewOffer = () => {
  const [offer, setOffer] = useState({
    offer_image: "",
    offer_id: "",
    pro_name: "",
    description: "",
    for_whom: ""
  })

  const { id } = useParams();
  useEffect(() => {
    loadVal();
  }, []);
  const loadVal = async () => {
    const res = await axios.get(`http://localhost:8070/offer/get_offer/${id}`);
    setOffer(res.data);
  }

  return (
    <div className="raw">
      <div class="card1" >
        <div className="card-body">
          <div className="image">
            <img src={`../images/` + offer.offer_image} width="300px" height="300px" />
          </div>
        </div>
      </div>

      <div class="card2" >
        <div className="card-body">
          <div className="add_itm">
            <div className="col-lg-6 text-light">
              <div className="col">
                <form>
                  <div className="form-group">
                    <input type="text" name="offer_id" value={offer.offer_id} id="offer_id" className="form-control0" readOnly />
                  </div>

                  <div className="form-group">
                    <input type="text" name="pro_name" id="pro_name" value={offer.pro_name} className="form-control0" readOnly />
                  </div>

                  <div className="form-group">
                    <input type="text" name="description" id="description" value={offer.description} className="form-control0" readOnly />
                  </div>

                  <div className="form-group">
                    <input type="text" name="for_whom" id="for_whom" value={offer.for_whom} className="form-control0" readOnly />
                  </div><br></br>
                  <Link><button type="submit" className="btn btn-warning bt">Claim Now</button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default ViewOffer;