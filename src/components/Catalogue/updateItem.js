import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import Sidebar from '../common/sidebar/sidebar'


function UpdateItem() {

    let history = useHistory();
    const { id } = useParams();
    const [items,setItems] = useState({


        itemName:"",
        itemCategory:"",
        Material:"",
        price:"",
        stockStatus:"",
        itemDescription:"",
        image: ""

    });

     const {itemName,itemCategory,Material, price, stockStatus, itemDescription, image   } = items;
     const onInputChange = e =>{
        setItems({...items, [e.target.name]: e.target.value});

     };

   useEffect(() => {
     loadUser();
   }, []);

   const onSubmit = async e => {
    e.preventDefault();
   // setErrors(validation(values));
     
    await axios.put(`http://localhost:8081/api/catalogue/item/updateitem/${id}`, items)
    swal({

        title: "Success",
        text: " Updated Successfully !!",
        icon: "success",
        button: "OK"

      });
 
    history.push("/items");
    };


    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8081/api/catalogue/item/viewitembyid/${id}`);
     
      setItems(result.data);
      
  };
        return (
            <>
            <Sidebar/> 
                <div class="container" style={{ marginTop: '3%' }}>
                    <div class="title">Update Furniture</div>
                    <div class="content">
                    <form onSubmit={e => onSubmit(e)}>
                      <div class="user-details">     
                        <div class="input-box">
                            <span class="details">Item Name</span>
                            <input type="text" className="form-control" id="itemName" name="itemName"
                            value ={itemName} onChange={(e)=> onInputChange(e)}
                            pattern="[A-Za-z\s]+"
                            title="Item Name can only contain letters and spaces."
                            placeholder="Enter Item Name"
                            required
                            />
                        </div>  
                        <div class="input-box">
                            <span class="details">Item Category</span>
                            <input type="text" className="form-control" id="itemCategory" name="itemCategory" 
                            value ={itemCategory} onChange={(e)=> onInputChange(e)}
                            pattern="[A-Za-z\s]+"
                            title="Item Category can only contain letters and spaces."
                            placeholder="Enter Item Category"
                            required
                            />
                        </div>      
                        <div class="input-box">
                            <span class="details">Material</span>
                            <input type="text" className="form-control" id="Material" name="Material"  
                            value ={Material} onChange={(e)=> onInputChange(e)}
                            placeholder="Enter Material"
                            pattern="[A-Za-z\s]+"
                            title="Material can only contain letters and spaces."
                            required
                            />
                        </div>
                        <div class="input-box">
                            <span class="details">Price</span>
                            <input type="text" className="form-control" id="price" name="price"
                            value ={price} onChange={(e)=> onInputChange(e)}
                            pattern="^^\d+\.\d{2}$"
                            title="Price should be a number with up to 2 decimal places (e.g., 123.45)."
                            placeholder="Enter price"
                            required
                            />
                        </div>
                        {/* <div class="input-box">
                            <span class="details">Stock Status</span>
                            <input type="text" className="form-control" id="stockStatus" name="stockStatus" 
                            value ={stockStatus} onChange={(e)=> onInputChange(e)}
                            placeholder="Enter Status"
                            required
                            />
                        </div> */}
                        <div class="input-box">
                         <span class="details">Stock Status</span>
                            <select className="form-control" aria-label="Default select example" id="stockStatus" name="stockStatus" value ={stockStatus} onChange={(e)=> onInputChange(e)} >
                              <option default>Select Status</option>
                              <option value="Instock ">Instock </option>
                              <option value="Outstock">Outstock</option>
                            </select> 
                        
                       </div>
                        <div class="input-box">
                            <span class="details">Item Description</span>
                            <input type="text" className="form-control" id="itemDescription" name="itemDescription"
                            value ={itemDescription} onChange={(e)=> onInputChange(e)}
                            placeholder="Enter Description"
                            required
                            />
                        </div>

                        <div class="input-box">
                            <span class="details">Image</span>
                            <input type="text" className="form-control" id="image" name="image"
                            value ={image} onChange={(e)=> onInputChange(e)}
                            placeholder="Enter Image Name"
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

export default UpdateItem;