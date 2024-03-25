import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from "react-icons/fa"
import {AiFillEdit} from 'react-icons/ai'
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar'


const Categories=() => {
      const[category, setCategory] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");

      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8081/api/catalogue/catalogue/getallcategories");
        setCategory(result.data.reverse());
      };
    
      const removeCategory= async id =>{
        await axios.delete(`http://localhost:8081/api/catalogue/catalogue/removecategory/${id}`);
        swal({
          title: "Success",
          text: "Successfully Remove Category !",
          icon: "success",
          button: "OK"
          });
        loadUsers();
      };
     
    return(
     
      <>
      <Sidebar/> 
      <div className="section">
       <h2 className="cateTopic">All Furniture Categories</h2>
          <div className="btnadd">
             <Link to={'/new-category'}>
               <button type="button" class="btn btn-primary">+ Add Category</button>
              </Link>
          </div>
          {/* <div class="btn-group">
            <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Export as
            </button>
            <div class="dropdown-menu">
              <Link to="/reportView"><a class="dropdown-item" href="#">PDF</a></Link>
            </div>
          </div> */}
          <form >

        <div   className="search">
            <div className=" col-lg-16 mt-2 mb-2 ml-1">
                <input
                className="form-control"
                type="search"
                placeholder="search category"
                name="searchTerm"
                onChange={(e)=>{ setsearchTerm(e.target.value);}}
                />
                </div>
        </div>   
      
      </form >
          <div className="catetb">
         < table className="table">
            <thead className="thead-dark">
                 <tr>
                    <th>CategoryName</th>
                    <th>Description</th>
                    <th>ItemVariations</th>               
                    <th>Action</th>
                 </tr>
             </thead>
            <tbody className="tbody">
              {category.filter(val =>{

                      if(searchTerm === ""){

                          return val;

                      } else if(

                        val.categoryName.toLowerCase().includes(searchTerm.toLowerCase())||
                        val.itemVariations.toLowerCase().includes(searchTerm.toLowerCase())

                      ){

                      return val;

                      }

                      })
                      .map((cat, index) => (
               
                <tr>

                <td>{cat.categoryName}</td>
                <td>{cat.description}</td>
                <td>{cat.itemVariations}</td>
                <td style={{ display: 'flex', alignItems: 'center' }}> 
                   
                   <Link className="btn btn-success mr-2" to={`/update-category/${cat._id}`}>
                   <AiFillEdit size="20px" color="white"/></Link>
               
                  <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeCategory(cat._id)}>
                  <FaTrashAlt size="20px" color="white"/></Link> 
                  </td>
               </tr>
                    ))}
            </tbody>
          </table>
          </div>
      </div>
      </>
    )
}
export default Categories;