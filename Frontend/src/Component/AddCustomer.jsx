import "./AddSupplier.css";
import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import "./AddCustomer.css";

function AddCustomer() {
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    customerType: "",
    billingAddress: "",
    shippingAddress: "",
    customerId: "",
    paymentTerm: "",
    paymentMethod: "",
    productCategory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill reqired fields.");
      return;
    }
    try {
      const res = await fetch(`${backend_url}/api/customer/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Customer added successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          customerType: "",
          billingAddress: "",
          shippingAddress: "",
          customerId: "",
          paymentTerm: "",
          paymentMethod: "",
          productCategory: "",
        });
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      console.error("Error adding customer:", err);
      alert("Server error");
    }
  };

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
                padding: "10px",
                color: "white",
              }}
            />
          </div>
          <CiBellOn style={{ backgroundColor: "white", padding: "10px" }} />
        </div>
      </div>

      {/* Add Supplier */}
      <div className="arrow-addsupplier">
        <FaArrowLeft />
        <h3>Add Customer</h3>
      </div>

      {/* Supplier Details */}
      <form onSubmit={handleSubmit}>
        <div className="supplier-details">
          <span>Basic Information</span>

          <div className="details-bar">
            {/* Customer Name & Phone Number - First Set */}
            <div className="name-address">
              <div className="supplier-input">
                <span>Customer Name</span>
                <br />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <span>Phone Number</span>
                <br />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Customer Email-Address & Type - Second Set */}
            <div className="name-address" style={{ marginTop: "15px" }}>
              <div>
                <span>Email Address</span>
                <br />
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <span>Customer Type </span>
                <br />
                <input
                  type="text"
                  name="customerType"
                  value={formData.customerType}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </div>

          {/* Customer Address Details, Billing & Shipping */}
          <div className="address-bar">
            <span>Address Details</span>
            <div className="billing-address">
              <span>Billing Address</span>
              <br />
              <input
                type="text"
                name="billingAddress"
                className="full-width-input"
                value={formData.billingAddress}
                onChange={handleChange}
              />

              <div className="shipping-address">
                <span>Shipping Address</span>
                <br />
                <input
                  type="text"
                  name="shippingAddress"
                  className="full-width-input"
                  value={formData.shippingAddress}
                  onChange={handleChange}
                />
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
                <input
                  type="number"
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleChange}
                />
              </div>

              <div className="customer-input">
                <span>Payment Term</span>
                <select
                  name="paymentTerm"
                  value={formData.paymentTerm}
                  onChange={handleChange}
                >
                  <option value="">Select Term</option>
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
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="select-payment"
              >
                <option value="">Select Method</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Cheque">Cheque</option>
                <option value="UPI">UPI</option>
              </select>
            </div>
          </div>

          <div className="order-preference">
            <span>Order Preference</span>

            <div className="product-Category">
              <span>Product Category</span>
              <br />
              <select
                name="productCategory"
                value={formData.productCategory}
                onChange={handleChange}
                className="multi-single"
              >
                <option value="">Select Category</option>
                <option value="Multi">Multi</option>
                <option value="Single">Single</option>
              </select>
            </div>
          </div>

          <hr />

          {/* Buttons */}
          <div className="buttons">
            <button
              type="button"
              style={{
                backgroundColor: "white",
                padding: "5px",
                borderRadius: "4px",
                border: "2px solid #f5f7fa",
              }}
              onClick={() =>
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  customerType: "",
                  billingAddress: "",
                  shippingAddress: "",
                  customerId: "",
                  paymentTerm: "",
                  paymentMethod: "",
                  productCategory: "",
                })
              }
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: "#077aff",
                color: "white",
                border: "none",
                padding: "5px",
                borderRadius: "4px",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddCustomer;
