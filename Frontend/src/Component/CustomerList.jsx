import React, { useState, useEffect } from "react";
import "./SupplierList.css";
import { IoManSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import ReactPaginate from "react-paginate";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";

function CustomerList() {
  const [customerData, setCustomerData] = useState([]);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/customer/");
        if (!response.ok) {
          throw new Error("Failed to fetch Supplier data");
        }
        const data = await response.json();
        console.log(data);
        const updatedData = data.map((item) => ({
          ...item,
          id: item._id,
        }));
        setCustomerData(updatedData);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
      }
    };

    fetchCustomerData();
  }, []);

  const downloadXLSX = () => {
    const Headers = [
      [
        "S.No",
        "Customer Name",
        "Contact Number",
        "Email",
        "Billing Address",
        "Customer ID",
        "Product Category",
      ],
    ];
    const rows = customerData.map((row, index) => [
      index + 1,
      row.name || "",
      row.phone || "",
      row.email || "",
      row.billingAddress || "",
      row.code || "",
      row.productCategory || "",
    ]);

    const worksheetData = [...Headers, ...rows];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(WorkBook, worksheet, "Suppliers");

    XLSX.writeFile(WorkBook, "suppliers.xlsx");
  };

  {
    /* pagination Logic */
  }

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const offset = currentPage * itemsPerPage;
  const currentItems = customerData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(customerData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="list-page">
      <div className="container-list">
        <div className="list-header">
          <div className="left-block">
            <span className="icon">
              <IoManSharp />
            </span>
            <div className="text-block">
              <h3>Customer List</h3>
              <span>View and manage your Suppliers</span>
            </div>
          </div>

          <div className="list-btn">
            <button className="download-btn" onClick={downloadXLSX}>
              <FiDownload /> <span>Download CSV </span>
            </button>
            <Link to="/AddCustomer" className="add-btn">
              + Add
            </Link>
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
        <div>
          <table className="supplier-table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Customer</th>
                <th>Contact Number</th>
                <th>Product</th>
                <th>Product Category</th>
                <th>Unit Price</th>
                <th>Supplier/Manufacture</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((row, idx) => (
                <tr key={row.id}>
                  <td>{offset + idx + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.phone}</td>
                  <td>{row.email}</td>
                  <td>{row.billingAddress}</td>
                  <td>{row.code}</td>
                  <td>{row.productCategory}</td>
                  <td style={{disply: "flex", justifyContent: "space-between"}}>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* pagination */}

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={5}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousClassName={"page-label"}
          nextClassName={"page-label"}
          pageClassName={"page-number"}
          breakClassName={"break"}
        />
      </div>
    </div>
  );
}

export default CustomerList;
