import React from "react";
import "./Supplier.css";
import { CiSearch } from "react-icons/ci";
import { LuBell } from "react-icons/lu";
import { IoArrowBack } from "react-icons/io5";
import Foods from "../img/Foods.png";
import Zomato from "../img/Zomato.png";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineRequestQuote } from "react-icons/md";


function Supplier() {
  return (
    <div className="supplier-page">
      <div className="container">
        {/* Header Row */}
        <div className="header-row">
          <div className="text-block">
            <h3>Supplier</h3>
            <span className="subtitle">
              Explore Supplier related information and activities
            </span>
          </div>

          <div className="header-actions">
            <div className="list-search">
              <input
                type="search"
                placeholder="Search by SKU, product name..."
              />
              <CiSearch size={15} />
            </div>
            <div className="bell-wrapper">
              <LuBell size={22} className="bell-icon" />
            </div>
          </div>
        </div>

        {/* Full-width image */}
        <div className="image-container">
          <button className="back-arrow-btn">
            <IoArrowBack size={22} />
          </button>
          <img src={Foods} alt="Foods" className="full-width-image" />
        </div>

        {/* zomato img & text & buttons */}
        <div className="img-text-button">
          <div className="zomato-img-container">
            <img src={Zomato} alt="Zomato" className="zomato" />
            <div className="zomato-text">
              <p>Zomato</p>
              <span>Zomato, Inc.</span>
            </div>
          </div>
          {/* buttons */}
          <div className="contact-quote">
            <button className="contact">
              Contact <FiMessageSquare />
            </button>
            <button className="quote"> 
              Start Quote <MdOutlineRequestQuote />
            </button>
          </div>
        </div>

        {/* Details & active order & products */}

        <div className="three-button">
          <button className="details">Details</button>
          <button className="activeO">Active Orders</button>
          <button className="products">Products</button>
        </div>

        {/* details Tab */}
        
         <div className="supplier-details">
        <span>Basic details</span>

        <div className="details-bar">
          {/* Supplier Name & Address - First Set */}
          <div className="name-address">
            <div className="supplier-input">
              <span>Supplier Name</span>
              <br />
              <input type="text"></input>
            </div>
            <div>
              <span>Address</span>
              <br />
              <input type="text"></input>
            </div>
          </div>

          {/* Supplier Name & Address - Second Set */}
          <div className="name-address" style={{ marginTop: "15px" }}>
            <div>
              <span>Contact</span>
              <br />
              <input type="text"></input>
            </div>
            <div>
              <span>Current Stock</span>
              <br />
              <input type="text"></input>
            </div>
          </div>

          {/* Stock in transit & Available stock */}
          <div className="name-address" style={{ marginTop: "15px" }}>
            <div>
              <span>Stock in transit</span>
              <br />
              <input type="text" style={{backgroundColor: "#bbc4d9ff"}}></input>
            </div>
            <div>
              <span>Available stock</span>
              <br />
              <input type="text" style={{backgroundColor: "#bbc4d9ff"}}></input>
            </div>
          </div>

          {/* Category & unit Price */}
           <div className="name-address" style={{ marginTop: "15px" }}>
            <div>
              <span>Category</span>
              <br />
              <input type="text"></input>
            </div>
            <div>
              <span>Unit Price</span>
              <br />
              <input type="text"></input>
            </div>
          </div>

          {/* Total Inventory, Lorem & Lorem */}
           <div className="name-address" style={{ marginTop: "15px" }}>
            <div className="total-inventory-container">
              <span>Lorem</span>
              <br />
              <input type="text" className="total-inventory-input"></input>
            </div>
            <div className="lorem-wrapper">
              <div>
                <span>Upload a photo</span>
                <br />
                <input type="text" ></input>
              </div>
              <div>
                <span>Company Logo</span>
                <br />
                <input type="text"></input>
              </div>
            </div>
          </div>

          {/* Date */}
            <div className="full-width-field">
              <span>Date</span>
              <br />
              <input type="date"></input>
            </div>

            {/* Email id 
            <div className="full-width-field">
              <span>
                Email id
              </span>
              <br />
              <input type="email" />
            </div>
            */}
        </div>
        <hr />

        {/* buttons cancel & submit */}

        <div className="buttons">
          <button style={{ backgroundColor: "white", padding: "5px", borderRadius: "4px", border: "2px solid #f5f7fa"}}>Cancel</button>
          <button style={{backgroundColor: "#077aff", color: "white", border: "none", padding: "5px", borderRadius: "4px"}}>Submit</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Supplier;
