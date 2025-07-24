import "./AddSupplier.css";
import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";

function AddSupplier() {
  return (
    <div className="main">
      {/* Header & search & bell*/}
      <div className="header">
        <div className="supplier">
          <span>Supplier</span>
          <br />
          <span style={{ fontSize: "large", color: "gray" }}>
            Explore supplier related information and activities
          </span>
        </div>
        {/* search & bell */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="search-bell">
            <input
              className="search"
              type="search"
              placeholder="Search by sku, product name..."
            />
            <FaSearch
              style={{
                backgroundColor: "#007aff",
                padding: "5px",
                color: "white",
              }}
            />
          </div>
          <CiBellOn style={{ backgroundColor: "white", padding: "5px" }} />
        </div>
      </div>

      {/* Add Supplier */}
      <div className="arrow-addsupplier">
        <FaArrowLeft />
        <h3>Add Supplier</h3>
      </div>

      {/* Supplier Details */}
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
        </div>
      </div>
    </div> //main div
  );
}

export default AddSupplier;
