import React,{useState} from 'react';
import {useHistory }  from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import axios from "axios";
import Sidebar from '../common/sidebar/sidebar'

export default function AddNewCategory(){
    
    let history = useHistory();
    
    const [categoryName,setCategoryName]= useState("");
    const [description,setDescription]= useState("");
    const [itemVariations,setItemVariations]= useState("");

    const [errors, setErrors] = useState({});

    function sendDetails(e){
        e.preventDefault();
       // setErrors(validation(values));


         const  newCategory = {

            categoryName,
            description,
            itemVariations
         }
         
         axios.post("http://localhost:8081/api/catalogue/catalogue/addnewcategory",newCategory).then(()=>{
            swal({

                title: "Success",
    
                text: "Successfully Added New Furniture Category !",
    
                icon: "success",
    
                button: "OK"
    
              });
  
             history.push("/categories");

         }).catch((err)=> {

            alert(err)
         })

    }
    
        return (
          <>
           <Sidebar/> 

              <div class="container" style={{ marginTop: '6%' }}>
                <div class="title">Add New Furniture Category</div>
                <div class="content">
                  <form action="/categories" onSubmit={sendDetails}>
                    <div class="user-details">

                    <div class="input-box">
                        <span class="details">Category Name</span>
                        <input type="text" className="form-control" id="categoryName" onChange={(e)=>{ 
                          setCategoryName(e.target.value); }}
                          placeholder="Enter Category Name"
                          pattern="[A-Za-z\s]+"
                          title="Category name can only contain letters and spaces."
                          required
                          />
                      </div>  
                      <div class="input-box">
                        <span class="details">Item Variations</span>
                        <input type="text" className="form-control" id="itemVariations"  onChange={(e)=>{
                         setItemVariations(e.target.value);  }}
                         placeholder="Enter Item Variations"
                         pattern="[A-Za-z\s]+"
                         title="Item variations can only contain letters and spaces."
                         required
                        />
                      </div>
                      <div class="input-box">
                            <span class="details">Description</span>
                            <input type="text" className="form-control" id="description" onChange={(e)=>{
                            setDescription(e.target.value); }}
                            placeholder="Enter Description"
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

