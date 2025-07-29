import React, { useState } from "react";
import "./SupplierList.css";
import { IoManSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect } from "react";

// const supplierData = [
//   {
//     id: 1,
//     name: "Ramesh Traders",
//     contact: "9876543210",
//     product: "Iron Rod",
//     category: "Construction",
//     price: "₹1200",
//     type: "Supplier",
//   },
//   {
//     id: 2,
//     name: "SteelWorks Ltd.",
//     contact: "9123456780",
//     product: "Steel Sheet",
//     category: "Raw Material",
//     price: "₹500",
//     type: "Manufacturer",
//   },
//   {
//     id: 3,
//     name: "Cement House",
//     contact: "9988776655",
//     product: "Cement",
//     category: "Construction",
//     price: "₹350",
//     type: "Supplier",
//   },
// ];

// const downloadCSV = () => {
//   try {
//     const headers = [
//       "S.no",
//       "Party/Supplier",
//       "Contact Number",
//       "Product",
//       "Product Category",
//       "Unit Price",
//       "Supplier/Manufacturer",
//     ];

//     const rows = supplierData.map((row, index) => [
//       index + 1,
//       `"${row.name.replace(/"/g, '""')}"`,
//       row.contact,
//       `"${row.product.replace(/"/g, '""')}"`,
//       `"${row.category.replace(/"/g, '""')}"`,
//       `"${row.price.replace(/"/g, '""')}"`,
//       `"${row.type.replace(/"/g, '""')}"`,
//     ]);

//     let csvContent =
//       "data:text/csv;charset=utf-8," +
//       headers.join(",") +
//       "\n" +
//       rows.map((e) => e.join(",")).join("\n");

//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "suppliers.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   } catch (error) {
//     console.error("Download failed:", error);
//   }
// };

function SupplierList() {
  const [supplierData, setsupplierData] = useState([]);

  useEffect(() => {
    const fetchSupplierData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/suppliers/");
        if (!response.ok) {
          throw new Error("Failed to fetch giftcard data");
        }
        const data = await response.json();
        console.log(data);
        const updatedData = data.map((item) => ({
          ...item,
          id: item._id,
        }));
        setsupplierData(updatedData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchSupplierData();
  }, []);

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
            <button className="download-btn">
              <FiDownload /> <span>Download CSV </span>
            </button>
            <Link to="/AddSupplier" className="add-btn">
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
              {supplierData.map((row, idx) => (
                <tr key={row.id}>
                  {/* <td>{startIdx + idx + 1}</td> */}
                  <td>{row.stockInTransit}</td>
                  <td>{row.address}</td>
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
        {/* <div className="pagination-bar">
          <button
            className="pagination-btn prev"
           
          >
            Previous
          </button>
          <div className="pagination-pages">
           
            <button
              
            >
              1
            </button>
          
            {totalPages > 1 && (
              <button
                
              >
                2
              </button>
            )}
            If on page 1, 2, 3: show 3rd page, then ellipsis
            {currentPage <= 3 && totalPages > 3 && (
              <>
                <button
                  className={`pagination-page${
                    currentPage === 3 ? " active" : ""
                  }`}
                  onClick={() => goToPage(3)}
                >
                  3
                </button>
                {totalPages > 5 && (
                  <span className="pagination-ellipsis">...</span>
                )}
              </>
            )}
           
              currentPage < totalPages - 2 &&
              totalPages > 5 && (
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
           
            {currentPage >= totalPages - 2 && totalPages > 5 && (
              <>
                <span className="pagination-ellipsis">...</span>
                {totalPages - 2 > 2 && (
                  <button
                    className={`pagination-page${
                      currentPage === totalPages - 2 ? " active" : ""
                    }`}
                    onClick={() => goToPage(totalPages - 2)}
                  >
                    {totalPages - 2}
                  </button>
                )}
              </>
            )}
           
            {totalPages > 2 &&
              [totalPages - 1, totalPages].map(
                (page) =>
                  page > 2 && (
                    <button
                      key={page}
                      className={`pagination-page${
                        currentPage === page ? " active" : ""
                      }`}
                      onClick={() => goToPage(page)}
                    >
                      {page}
                    </button>
                  )
              )}
          </div>
          <button
            className="pagination-btn next"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default SupplierList;
