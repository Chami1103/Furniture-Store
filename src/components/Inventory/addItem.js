import React,{useState} from 'react';
import {useHistory }  from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import axios from "axios";
import Sidebar from '../common/sidebar/sidebar'

export default function AddItem(){
    
    let history = useHistory();
    
    const [itemCategory,setItemCategory]= useState("");
    const [itemName,setItemName]= useState("");
    const [quantityOnHand,setQuantityOnHand]= useState("");
    const [minStockLevel,setMinStockLevel]= useState("");
    const [maxStockLevel,setMaxStockLevel]= useState("");
    const [purchasePrice,setPurchasePrice]= useState("");
    const [sellingPrice,setSellingPrice]= useState("");
    const [totalStockPrice,setTotalStockPrice]= useState("");
    const [supplierName,setSupplierName]= useState("");

    const [errors, setErrors] = useState({});

      // Calculate Total Stock Price when Quantity or Purchase Price changes
      const handleQuantityChange = (e) => {
        const quantity = e.target.value;
        setQuantityOnHand(quantity);
        const totalPrice = parseFloat(quantity) * parseFloat(purchasePrice);
        setTotalStockPrice(totalPrice.toFixed(2)); // Assuming 2 decimal places for the total price
      };

      const handlePurchasePriceChange = (e) => {
        const price = e.target.value;
        setPurchasePrice(price);
        const totalPrice = parseFloat(quantityOnHand) * parseFloat(price);
        setTotalStockPrice(totalPrice.toFixed(2)); // Assuming 2 decimal places for the total price
      };

    function sendDetails(e){
        e.preventDefault();
       // setErrors(validation(values));


         const  newItem = {

            itemCategory,
            itemName,
            quantityOnHand,
            minStockLevel,
            maxStockLevel,
            purchasePrice,
            sellingPrice,
            totalStockPrice,
            supplierName
         }
         
         axios.post("http://localhost:8081/api/inventory/inventory/addnewitem",newItem).then(()=>{
            swal({

                title: "Success",
    
                text: "Successfully Added Item !",
    
                icon: "success",
    
                button: "OK"
    
              });
  
             history.push("/inventory");

         }).catch((err)=> {
            console.log(err);
            alert(err)
         })

    }
    
        return (
          <>
           <Sidebar/> 

              <div class="container" style={{ marginTop: '0.5%' }}>
                <div class="title">Add New Item</div>
                <div class="content">
                  <form action="/inventory" onSubmit={sendDetails}>
                    <div class="user-details">

                      <div class="input-box">
                        <span class="details">Item Name</span>
                        <input type="text" className="form-control" id="itemname" onChange={(e)=>{
                          
                          setItemName(e.target.value); }}
                          placeholder="Enter Item Name"
                          required
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Item Category</span>
                        <input type="text" className="form-control" id="itemcategory"  onChange={(e)=>{
                         
                         setItemCategory(e.target.value);  }}
                         placeholder="Enter Item Category"
                         required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Quantity</span>
                        <input
                          type="number"
                          className="form-control"
                          id="quantityOnHand"
                          onChange={handleQuantityChange}
                          placeholder="Enter Quantity"
                          required
                        />

                      </div>
                      <div class="input-box">
                        <span class="details">Min Stock Level</span>
                        <input type="number" className="form-control" id="minStockLevel"  onChange={(e)=>{
                          
                         setMinStockLevel(e.target.value);}}
                         placeholder="Enter Min Stock"
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Max Stock Level</span>
                        <input type="number" className="form-control" id="maxStockLevel"  onChange={(e)=>{
                          
                         setMaxStockLevel(e.target.value);}}
                         placeholder="Enter Max Stock"
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Purcase Price</span>
                        <input
                          type="number"
                          className="form-control"
                          id="purchasePrice"
                          onChange={handlePurchasePriceChange}
                          placeholder="Enter purchase price"
                          required
                        />
                      </div>

                      <div class="input-box">
                        <span class="details">Selling Price</span>
                        <input type="number" className="form-control" id="sellingPrice"  onChange={(e)=>{
                          
                         setSellingPrice(e.target.value);}}
                         placeholder="Enter selling price"
                         required
                         />
                      </div>

                      <div class="input-box">
                        <span class="details">Total Stock</span>
                        <input
                          type="number"
                          className="form-control"
                          id="totalStockPrice"
                          value={totalStockPrice} // Autofilled calculated total
                          disabled
                        />
                      </div>

                      <div class="input-box">
                        <span class="details">Suplier Name</span>
                        <input type="text" className="form-control" id="supplierName"  onChange={(e)=>{
                          
                         setSupplierName(e.target.value);}}
                         placeholder="Enter Supplier Name"
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

