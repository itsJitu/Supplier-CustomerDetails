import React from "react";
import "./SupplierList.css";
import { IoManSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";

function SupplierList() {
  return (
    <div className="list-page">
      <div className="container-list">
        <div className="list-header">
          <div className="left-block">
            <span className="icon">
              <IoManSharp />
            </span>
            <div className="text-block">
              <h3>Suppliers list</h3>
              <span>View and manage your Suppliers</span>
            </div>
          </div>
 
          <div className="list-btn">
            <button className="download-btn"> <FiDownload /> <span>Download csv </span></button>
            <button className="add-btn"> + Add</button>
          </div>
        </div>

        <div style={{display: "flex", alignItems: "center"}}>
          <div className="list-search">
          <input type="search" placeholder="Search by name" />
        </div>
        <div>
          <CiSearch />
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default SupplierList;
