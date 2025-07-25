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
        
      </div>
    </div>
  );
}

export default Supplier;
