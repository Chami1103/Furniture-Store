import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import Sidebar from '../common/sidebar/sidebar'


function UpdateInventory() {

    let history = useHistory();
    const { id } = useParams();
    const [items,setItems] = useState({

        itemCategory:"",
        itemName:"",
        quantityOnHand:"",
        minStockLevel:"",
        maxStockLevel:"",
        purchasePrice:"",
        sellingPrice:"",
        supplierName:""

    });

     const {itemCategory,itemName,quantityOnHand,minStockLevel,maxStockLevel,purchasePrice,sellingPrice, supplierName  } = items;
     const onInputChange = e =>{
        setItems({...items, [e.target.name]: e.target.value});

     };

   useEffect(() => {
     loadUser();
   }, []);

   const onSubmit = async e => {
    e.preventDefault();
   // setErrors(validation(values));
     
    await axios.put(`http://localhost:8081/api/inventory/inventory/updateitem/${id}`, items)
    swal({

        title: "Success",
        text: "Item Details Updated Successfully !!",
        icon: "success",
        button: "OK"

      });
 
    history.push("/inventory");
    };


    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8081/api/inventory/inventory/getitembyid/${id}`);
     
      setItems(result.data);
      
  };
        return (
            <>
            <Sidebar/> 
                <div class="container" style={{ marginTop: '3%' }}>
                    <div class="title">Update Employee Details</div>
                    <div class="content">
                    <form onSubmit={e => onSubmit(e)}>
                        <div class="user-details">

                        <div class="input-box">
                        <span class="details">Item Name</span>
                        <input type="text" className="form-control" id="itemName" name="itemName" 
                          value ={itemName} onChange={(e)=> onInputChange(e)}
                          required
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Item Category</span>
                        <input type="text" className="form-control" id="itemCategory" name="itemCategory" 
                        value ={itemCategory} onChange={(e)=> onInputChange(e)}
                         required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Quantity</span>
                        <input type="number" className="form-control" id="quantityOnHand" name="quantityOnHand" 
                        value ={quantityOnHand} onChange={(e)=> onInputChange(e)}
                        required
                        />

                      </div>
                      <div class="input-box">
                        <span class="details">Min Stock Level</span>
                        <input type="number" className="form-control" id="minStockLevel" name="minStockLevel" 
                         value ={minStockLevel} onChange={(e)=> onInputChange(e)}
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Max Stock Level</span>
                        <input type="number" className="form-control" id="maxStockLevel" name="maxStockLevel" 
                         value ={maxStockLevel} onChange={(e)=> onInputChange(e)}
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Purcase Price</span>
                        <input type="number" className="form-control" id="purchasePrice" name="purchasePrice"
                        value ={purchasePrice} onChange={(e)=> onInputChange(e)}
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Selling Price</span>
                        <input type="number" className="form-control" id="sellingPrice" name="sellingPrice"
                        value ={sellingPrice} onChange={(e)=> onInputChange(e)}
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Suplier Name</span>
                        <input type="text" className="form-control" id="supplierName" name="supplierName"
                         value ={supplierName} onChange={(e)=> onInputChange(e)}
                         required
                         />
                      </div>
                        </div>
                        <div class="button">
                            <input type="submit" value="Update Details"/>
                        </div>
                    </form>
                    </div>
                </div>
            </>
            
    );

};

export default UpdateInventory;