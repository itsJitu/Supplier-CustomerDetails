
import "./SupplierList.css";
import { IoManSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";



function SupplierList() {
  const [supplierData, setsupplierData] = useState([]);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const fetchSupplierData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/suppliers/");
        if (!response.ok) {
          throw new Error("Failed to fetch Supplier data");
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
        console.log(err.message);
      }
    };

    fetchSupplierData();
  }, []);

  const downloadXLSX = () => {
    const Headers = [
      ["S.no", "Party/Supplier", "Contact Number", "Date", "Product Category", "Unit Price", "Supplier/Manufacturer"]
    ];
    const rows = supplierData.map((row, index) => [
      index + 1,
      row.address || "",
      row.contact || "",
      new Date(row.date).toLocaleDateString("en-IN") || "",
      row.Category || "",
      row.unitPrice || "",
      row.sName || ""
    ]);

    const worksheetData = [...Headers, ...rows];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(WorkBook, worksheet, "Suppliers");

    XLSX.writeFile(WorkBook, "suppliers.xlsx");
  }

  {/* pagination Logic */}

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;

  const offset = currentPage * itemsPerPage;
  const currentItems = supplierData.slice(offset, offset+ itemsPerPage);
  const pageCount = Math.ceil(supplierData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  }

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
            <button className="download-btn" onClick={downloadXLSX}>
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
              {currentItems.map((row, idx) => (
                <tr key={row.id}>
                  <td>{offset + idx + 1}</td>
                  {/* <td>{idx + 1}</td> */}
                  <td>{row.address}</td>
                  <td>{row.contact}</td>
                  <td>{dayjs(row.date).format("YYYY-MM-DD")}</td>
                  <td>{row.category}</td>
                  <td>{row.unitPrice}</td>
                  <td>{row.sName}</td>
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

        <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={3}
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

export default SupplierList;
