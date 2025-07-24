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
              <span>Total Inventory</span>
              <br />
              <input type="text" className="total-inventory-input" style={{backgroundColor: "#bbc4d9ff"}}></input>
            </div>
            <div className="lorem-wrapper">
              <div>
                <span>Lorem</span>
                <br />
                <input type="text" ></input>
              </div>
              <div>
                <span>Lorem</span>
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

            {/* Email id */}
            <div className="full-width-field">
              <span>
                Email id
              </span>
              <br />
              <input type="email" />
            </div>
        </div>
        <hr />

        {/* buttons cancel & submit */}

        <div className="buttons">
          <button style={{ backgroundColor: "white", padding: "5px", borderRadius: "4px", border: "2px solid #f5f7fa"}}>Cancel</button>
          <button style={{backgroundColor: "#077aff", color: "white", border: "none", padding: "5px", borderRadius: "4px"}}>Submit</button>
        </div>
      </div>

      
    </div> //main div
  );
}

export default AddSupplier;
