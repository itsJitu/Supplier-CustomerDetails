import React from "react";
import "./SupplierList.css";
import { IoManSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

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

          <div>
            <button className="download-btn"> <FiDownload />Download csv</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupplierList;
