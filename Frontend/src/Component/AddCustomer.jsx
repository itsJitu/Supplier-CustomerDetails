import "./AddSupplier.css";
import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import "./AddCustomer.css";

function AddCustomer() {

  const [formData, setFormData] = useState({
    name: "",
  })
  return (
    <div className="main">
      {/* Header & search & bell*/}
      <div className="header">
        <div className="supplier">
          <span>Customer</span>
          <br />
          <span style={{ fontSize: "large", color: "gray" }}>
            Explore customer related information and activities
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
        <h3>Add Customer</h3>
      </div>

      {/* Supplier Details */}
      <form>
        <div className="supplier-details">
          <span>Basic Information</span>

          <div className="details-bar">
            {/* Customer Name & Phone Number - First Set */}
            <div className="name-address">
              <div className="supplier-input">
                <span>Customer Name</span>
                <br />
                <input type="text" ></input>
              </div>
              <div>
                <span>Phone Number</span>
                <br />
                <input type="Number"></input>
              </div>
            </div>

            {/* Customer Email-Address & Type - Second Set */}
            <div className="name-address" style={{ marginTop: "15px" }}>
              <div>
                <span>Email Address</span>
                <br />
                <input type="text"></input>
              </div>
              <div>
                <span>Customer Type </span>
                <br />
                <input type="text"></input>
              </div>
            </div>
          </div>

          {/* Customer Address Details, Billing & Shipping */}
          <div className="address-bar">
            <span>Address Details</span>
            <div className="billing-address">
              <span>Billing Address</span>
              <br />
              <input type="text" className="full-width-input" />

              <div className="shipping-address">
                <span>Shipping Address</span>
                <br />
                <input type="text" className="full-width-input" />
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="account-details">
            <span>Account Details</span>
          </div>
          <div className="customer-details">
            <div className="customer-row">
              <div className="customer-input">
                <span>Customer Code/ID (Auto-Generated or Manual)</span>
                <input type="number" />
              </div>

              <div className="customer-input">
                <span>Payment Term</span>
                <select>
                  <option value="Prepayment">Prepayment</option>
                  <option value="PostPayment">Postpayment</option>
                  <option value="EMI">EMI</option>
                </select>
              </div>
            </div>

            {/* preferred Payment Method */}

            <div className="preferred-payment-method">
              <span>Preferred Payment Method </span>
              <br />
              <select
                name="Payment Method"
                id="Payment Method"
                className="select-payment"
              >
                <option value="">Bank Transfer</option>
                <option value="">Credit Card</option>
                <option value="">Debit Card</option>
                <option value="">cheque</option>
                <option value="">UPI</option>
              </select>
            </div>
          </div>

          <div className="order-preference">
            <span>Order Preference</span>

            <div className="product-Category">
              <span>Product Category</span>
              <br />
              <select name="" id="" className="multi-single">
                <option value="">Multi</option>
                <option value="">Single</option>
              </select>
            </div>
          </div>

          <hr />

           <div className="buttons">
          <button style={{ backgroundColor: "white", padding: "5px", borderRadius: "4px", border: "2px solid #f5f7fa"}}>Cancel</button>
          <button type="submit" style={{backgroundColor: "#077aff", color: "white", border: "none", padding: "5px", borderRadius: "4px"}}>Submit</button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default AddCustomer;
