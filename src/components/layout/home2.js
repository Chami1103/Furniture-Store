import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {FaCartPlus, FaTimes} from 'react-icons/fa';

const Home2=() =>{
      const[products, setProducts] = useState([]);
      const[searchTerm, setsearchTerm] = useState("");
      const [selectedCategory, setSelectedCategory] = useState('');
      const [selectedImage, setSelectedImage] = useState(null);


      useEffect(()=>{
        loadUsers();
      },[]);

      const loadUsers = async ()=>{
        const result = await axios.get("http://localhost:8081/api/catalogue/item/getallitems");
        setProducts(result.data.reverse());
      };

      const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
      };

      const openImageOverlay = (imageSrc) => {
        setSelectedImage(imageSrc);
      };
    
      const closeImageOverlay = () => {
        setSelectedImage(null);
      };
      
    return(
      <div className="middle">
        
        <div class="header_section">
        <div class="container">
        <div class="banner_section layout_padding">
        <div class="container">
        <div id="costum_slider" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active">
        <h1 class="furniture_text">FURNITURE</h1>
        <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo</p>
        <div class="contact_bt_main">
        <div class="contact_bt"><a href="contact.html">Contact Us</a></div>
        </div>
        </div>
        <div class="carousel-item">
        <h1 class="furniture_text">FURNITURE</h1>
        <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo</p>
        <div class="contact_bt_main">
        <div class="contact_bt"><a href="contact.html">Contact Us</a></div>
        </div>
        </div>
        <div class="carousel-item">
        <h1 class="furniture_text">FURNITURE</h1>
        <p class="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some fo</p>
        <div class="contact_bt_main">
        <div class="contact_bt"><a href="contact.html">Contact Us</a></div>
        </div>
        </div>
        </div>
        <a class="carousel-control-prev" href="#costum_slider" role="button" data-slide="prev">
        <i class=""><img src="images/left-arrow.png"/></i>
        </a>
        <a class="carousel-control-next" href="#costum_slider" role="button" data-slide="next">
        <i class=""><img src="images/right-arrow.png"/></i>
        </a>
        </div>
        </div>
        </div>
        </div>
</div>

     <h3 className="text5">Latest Arrivals</h3>
  
     <div className="input-groups">
                <input
                    type="text"
                    id="search_fields"
                    className="form-control"
                    placeholder="Search Product..."onChange={(e)=>{
                      setsearchTerm(e.target.value);
             }} />
               
            </div>
     <div>
     <label>
        Filter by Category:
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">All Categories</option>
          <option value="Living Room Furniture">Living Room Furniture</option>
          <option value="Outdoor Furniture"> Outdoor Furniture</option>
          <option value="Office Furniture"> Office Furniture</option>
          <option value="Kids Furniture"> Kids Furniture</option>
          {/* Add more categories as needed */}
        </select>
      </label>
      </div> 

     {/* <div className="raw">

     {products.filter((val) => {
          if (searchTerm === "") {
            return true; // Show all products when no search term is provided
          } else if (
            val.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.itemCategory.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return true;
          } else {
            return false;
          }
        })
        .filter((val) => {
          if (selectedCategory === "") {
            return true; // Show all products when no category is selected
          } else if (val.itemCategory === selectedCategory) {
            return true;
          } else {
            return false;
          }
                }).map((prod, index) => (

                    <div class="card" >
                        <div className="card-body">
                       
                         <><img src={"./prodImage/"+prod.image} width="160px" height="160px"></img>
                         <h5 className="card-title">{prod.itemName}</h5>
                         <h6>Rs.{prod.price}.00</h6>
                         <a href={`add_cart/${prod._id}`} className="btn btn-warning "> <FaCartPlus /> Add to cart   </a></>
                        
                        </div>
                      
                  </div>
                      ))}
                  
  
                  </div> */}

        
<div className="raw">
        {products
          .filter((val) => {
            if (searchTerm === '') {
              return true;
            } else if (
              val.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.itemCategory.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return true;
            } else {
              return false;
            }
          })
          .filter((val) => {
            if (selectedCategory === '') {
              return true;
            } else if (val.itemCategory === selectedCategory) {
              return true;
            } else {
              return false;
            }
          })
          .map((prod, index) => (
            <div class="card" key={prod._id}>
              <div className="card-body">
                <>
                  <img
                    src={`./prodImage/${prod.image}`}
                    width="160px"
                    height="160px"
                    alt={prod.itemName}
                    onClick={() => openImageOverlay(`./prodImage/${prod.image}`)}
                  />
                  <h5 className="card-title">{prod.itemName}</h5>
                  <h6>Rs.{prod.price}.00</h6>
                  <a href={`add_cart/${prod._id}`} className="btn btn-warning ">
                    <FaCartPlus /> Add to cart
                  </a>
                </>
              </div>
            </div>
          ))}
      </div>

       {/* Image Overlay */}
      {selectedImage && (
        <div className="image-overlay" onClick={closeImageOverlay}>
           <FaTimes className="close-icon2" onClick={closeImageOverlay} />
          <img src={selectedImage} alt="Selected Furniture" />
        </div>
      )}
               
    </div>
    )
}
export default Home2;