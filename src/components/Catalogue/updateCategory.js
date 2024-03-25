import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import Sidebar from '../common/sidebar/sidebar'


function UpdateCategory() {

    let history = useHistory();
    const { id } = useParams();
    const [categories,setCategory] = useState({


        categoryName:"",
        description:"",
        itemVariations:""

    });

     const {categoryName,description,itemVariations  } = categories;
     const onInputChange = e =>{
        setCategory({...categories, [e.target.name]: e.target.value});

     };

   useEffect(() => {
     loadUser();
   }, []);

   const onSubmit = async e => {
    e.preventDefault();
   // setErrors(validation(values));
     
    await axios.put(`http://localhost:8081/api/catalogue/catalogue/updatecategory/${id}`, categories)
    console.log('res',categories);
    swal({

        title: "Success",
        text: " Updated Successfully !!",
        icon: "success",
        button: "OK"

      });
 
    history.push("/categories");
    };


    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8081/api/catalogue/catalogue/viewcategorybyid/${id}`);
     
      setCategory(result.data);
      
  };
        return (
            <>
            <Sidebar/> 
                <div class="container" style={{ marginTop: '6%' }}>
                    <div class="title">Update Furniture Category Details</div>
                    <div class="content">
                    <form onSubmit={e => onSubmit(e)}>
                        <div class="user-details">     
                      <div class="input-box">
                        <span class="details">Category Name</span>
                        <input type="text" className="form-control" id="categoryName" name="categoryName" 
                          value ={categoryName} onChange={(e)=> onInputChange(e)}
                          placeholder="Enter Category Name"
                          required
                          />
                      </div>  
                      <div class="input-box">
                        <span class="details">Description</span>
                        <input type="text" className="form-control" id="description" name="description" 
                          value ={description} onChange={(e)=> onInputChange(e)}
                          placeholder="Enter Description"
                          required
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Item Variations</span>
                        <input type="text" className="form-control" id="itemVariations" name="itemVariations"
                         value ={itemVariations} onChange={(e)=> onInputChange(e)}
                         placeholder="Enter Item Variations"
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

export default UpdateCategory;