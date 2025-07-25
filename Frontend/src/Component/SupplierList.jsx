import React, { useState } from "react";
import "./SupplierList.css";
import { IoManSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";


const supplierData = [
  {
    id: 1,
    name: "Ramesh Traders",
    contact: "9876543210",
    product: "Iron Rod",
    category: "Construction",
    price: "₹1200",
    type: "Supplier",
  },
  {
    id: 2,
    name: "SteelWorks Ltd.",
    contact: "9123456780",
    product: "Steel Sheet",
    category: "Raw Material",
    price: "₹500",
    type: "Manufacturer",
  },
  {
    id: 3,
    name: "Cement House",
    contact: "9988776655",
    product: "Cement",
    category: "Construction",
    price: "₹350",
    type: "Supplier",
  },
];


function SupplierList() {
  const [currentPage, setCurrentPage] = useState(1);
  const ROWS_PER_PAGE = 1;
  const totalPages = Math.ceil(supplierData.length / ROWS_PER_PAGE);
  const startIdx = (currentPage - 1) * ROWS_PER_PAGE;
  const endIdx = startIdx + ROWS_PER_PAGE;
  const currentRows = supplierData.slice(startIdx, endIdx);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
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
        <div>
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
              {currentRows.map((row, idx) => (
                <tr key={row.id}>
                  <td>{startIdx + idx + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.contact}</td>
                  <td>{row.product}</td>
                  <td>{row.category}</td>
                  <td>{row.price}</td>
                  <td>{row.type}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* pagination */}
        <div className="pagination-bar">
          <button className="pagination-btn prev" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
          <div className="pagination-pages">
            {/* Always show first page */}
            <button
              className={`pagination-page${currentPage === 1 ? " active" : ""}`}
              onClick={() => goToPage(1)}
            >
              1
            </button>
            {/* Show 2nd page if totalPages > 1 */}
            {totalPages > 1 && (
              <button
                className={`pagination-page${currentPage === 2 ? " active" : ""}`}
                onClick={() => goToPage(2)}
              >
                2
              </button>
            )}
            {/* If on page 1, 2, 3: show 3rd page, then ellipsis */}
            {currentPage <= 3 && totalPages > 3 && (
              <>
                <button
                  className={`pagination-page${currentPage === 3 ? " active" : ""}`}
                  onClick={() => goToPage(3)}
                >
                  3
                </button>
                {totalPages > 5 && <span className="pagination-ellipsis">...</span>}
              </>
            )}
            {/* If in the middle: show ellipsis, P-1, P, P+1, ellipsis */}
            {currentPage > 3 && currentPage < totalPages - 2 && totalPages > 5 && (
              <>
                <span className="pagination-ellipsis">...</span>
                <button
                  className="pagination-page"
                  onClick={() => goToPage(currentPage - 1)}
                >
                  {currentPage - 1}
                </button>
                <button
                  className="pagination-page active"
                  onClick={() => goToPage(currentPage)}
                >
                  {currentPage}
                </button>
                <button
                  className="pagination-page"
                  onClick={() => goToPage(currentPage + 1)}
                >
                  {currentPage + 1}
                </button>
                <span className="pagination-ellipsis">...</span>
              </>
            )}
            {/* If on last 3 pages: show ellipsis, N-2, N-1, N */}
            {currentPage >= totalPages - 2 && totalPages > 5 && (
              <>
                <span className="pagination-ellipsis">...</span>
                {totalPages - 2 > 2 && (
                  <button
                    className={`pagination-page${currentPage === totalPages - 2 ? " active" : ""}`}
                    onClick={() => goToPage(totalPages - 2)}
                  >
                    {totalPages - 2}
                  </button>
                )}
              </>
            )}
            {/* Always show last two pages if more than 2 pages */}
            {totalPages > 2 && [totalPages - 1, totalPages].map(page => (
              page > 2 && (
                <button
                  key={page}
                  className={`pagination-page${currentPage === page ? " active" : ""}`}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              )
            ))}
          </div>
          <button className="pagination-btn next" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default SupplierList;
