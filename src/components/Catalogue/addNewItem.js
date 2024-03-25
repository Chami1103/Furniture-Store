import React,{useState} from 'react';
import {useHistory }  from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import axios from "axios";
import Sidebar from '../common/sidebar/sidebar'
import {AiOutlineWarning} from 'react-icons/ai'

export default function AddNewItem(){
    
    let history = useHistory();
    
    const [itemName,setItemName]= useState("");
    const [itemCategory,setItemCategory]= useState("");
    const [Material,setMaterial]= useState("");
    const [price,setPrice]= useState("");
    const [stockStatus,setStockStatus]= useState("");
    const [itemDescription,setItemDescription]= useState("");
    const [image,setImage]= useState("");

    const [errors, setErrors] = useState({});

    function sendDetails(e){
        e.preventDefault();
       // setErrors(validation(values));


         const  newItem = {

            itemName,
            itemCategory,
            Material,
            price,
            stockStatus,
            itemDescription,
            image
         }
         
         axios.post("http://localhost:8081/api/catalogue/item/addnewitem",newItem).then(()=>{
            swal({

                title: "Success",
                text: "Successfully Added New Furniture !",
                icon: "success",
                button: "OK"
    
              });
  
             history.push("/items");

         }).catch((err)=> {

            alert(err)
         })

    }

    const redTextStyle = {
      color: 'red'
    };
    
        return (
          <>
           <Sidebar/> 

              <div class="container" style={{ marginTop: '3%' }}>
                <div class="title">Add New Furniture </div>
                <div class="content">
                  <form action="/items" onSubmit={sendDetails}>
                    <div class="user-details">

                    <div class="input-box">
                        <span class="details">Item Name</span>
                        <input type="text" className="form-control" id="itemName" onChange={(e)=>{
                          setItemName(e.target.value); }}
                          pattern="[A-Za-z\s]+"
                          title="Item Name can only contain letters and spaces."
                          placeholder="Enter Item Name"
                          required
                          />
                      </div>  
                      <div class="input-box">
                        <span class="details">Item Category</span>
                        <input type="text" className="form-control" id="itemCategory" onChange={(e)=>{ 
                          setItemCategory(e.target.value); }}
                          placeholder="Enter Item Category"
                          pattern="[A-Za-z\s]+"
                          title="Item Category can only contain letters and spaces."
                          required
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Material</span>
                        <input type="text" className="form-control" id="Material"  onChange={(e)=>{ 
                         setMaterial(e.target.value);  }}
                         placeholder="Enter Material"
                         pattern="[A-Za-z\s]+"
                         title="Material can only contain letters and spaces."
                         required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Price</span>
                        <input type="text" className="form-control" id="price"  onChange={(e)=>{ 
                         setPrice(e.target.value);  }}
                         pattern="^^\d+\.\d{2}$"
                         title="Price should be a number with up to 2 decimal places (e.g., 123.45)."
                         placeholder="Enter price"
                         required
                        />
                      </div>

                      <div class="input-box">
                         <span class="details">Stock Status</span>
                            <select className="form-control"  aria-label="Default select example" onChange={(e)=>{  setStockStatus(e.target.value);}} required>
                              <option default>Select Status</option>
                              <option value="Instock ">Instock </option>
                              <option value="Outstock">Outstock</option>
                            </select>   
                       </div>
                      <div class="input-box">
                        <span class="details">Item Description</span>
                        <input type="text" className="form-control" id="itemDescription"  onChange={(e)=>{
                         setItemDescription(e.target.value);  }}
                         placeholder="Enter Description"
                         required
                        />
                      </div>
                      <div class="input-box">
                         <p className='text-align' style={redTextStyle}><AiOutlineWarning size="25px"/>Attention!!. Before enter the image name, Please upload item image to the database.  </p>
                      </div>

                      <div class="input-box">
                        <span class="details">Image</span>
                        <input type="text" className="form-control" id="image"  onChange={(e)=>{
                         setImage(e.target.value);  }}
                         placeholder="Enter Image Name"
                         required
                        />
                      </div>

                     </div>
                     <div class="button">
                      <input type="submit" value="Save Details"/>
                    </div>
                  </form>
                </div>
              </div>
         </>
            
    );

};