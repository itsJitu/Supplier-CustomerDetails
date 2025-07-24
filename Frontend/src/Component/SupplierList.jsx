import React from "react";
import "./SupplierList.css";
import { IoManSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";

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

        <div className="list-search-bar">
          <div className="list-search">
            <input type="search" placeholder="Search by name" />
            <CiSearch size={28} />
          </div>
          <div className="filter-div">
            <IoFilter size={20} style={{ marginRight: "6px" }} />
            Filter
          </div>
        </div>

        {/* table*/}
        <table className="supplier-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Party/Supplier</th>
              <th>Contact Number</th>
              <th>Product</th>
              <th>Product Category</th>
              <th>Unit Price</th>
              <th>Supplier/Manufacture</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row, replace with dynamic data as needed */}
            <tr>
              <td>1</td>
              <td>ABC Traders</td>
              <td>9876543210</td>
              <td>Widget</td>
              <td>Gadgets</td>
              <td>₹100</td>
              <td>Supplier</td>
              <td>
                {/* Action buttons/icons can go here */}
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SupplierList;
