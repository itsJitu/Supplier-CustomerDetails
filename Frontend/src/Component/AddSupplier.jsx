import "./AddSupplier.css";
import { FaSearch } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";


function AddSupplier() {
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const [toast, setToast] = useState('');
  const [sName, setSName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [currentStock, setCurrentStock] = useState('');
  const [stockInTransit, setStockInTransit] = useState('');
  const [availableStock, setAvailableStock] = useState('');
  const [category, setCategory] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [totalInventory, setTotalInventory] = useState("");
  const [lorem, setLorem] = useState('');
  const [date, setDate] = useState('');
  const [emailId, setEmailId] = useState('');
  
  const handleSubmit = async(e) => {
  e.preventDefault();
  setToast();
  try {
    const res = await fetch(`${backend_url}/api/suppliers/add`,{
    method: "POST",
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({ sName, address, contact, currentStock, stockInTransit, availableStock, category, unitPrice, totalInventory, lorem, date, emailId, })
  });

   const data = await res.json();
      if(res.ok){
        setToast(data.message);
        setSName('');
      }else{
        setToast(data.message);
      }
    }
    catch(error){
      setToast(error.message);
    }
  }
//   const fetchUsers = () => {
//     fetch(`${backend_url}$/api/Suppliers/add=${encodedURIComponent()}`)
//     .then(res => res.json())
//     .then(data => { setAllUUsers(Array.isArray(data) ? data : data.uers ||)})
//   }
// };

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
        <h3>Add Supplier</h3>
      </div>

      {/* Supplier Details */}
      <form onSubmit={handleSubmit}>
      <div className="supplier-details">
        <span>Basic details</span>

        <div className="details-bar">
          {/* Supplier Name & Address - First Set */}
          <div className="name-address">
            <div className="supplier-input">
              <span>Supplier Name</span>
              <br />
              <input type="text" value={sName} onChange={e => setSName(e.target.value)}></input>
            </div>
            <div>
              <span>Address</span>
              <br />
              <input type="text" value={address} onChange={e => setAddress(e.target.value)}></input>
            </div>
          </div>

          {/* Supplier Name & Address - Second Set */}
          <div className="name-address" style={{ marginTop: "15px" }}>
            <div>
              <span>Contact</span>
              <br />
              <input type="text" value={contact} onChange={e => setContact(e.target.value)}></input>
            </div>
            <div>
              <span>Current Stock</span>
              <br />
              <input type="text" value={currentStock} onChange={e => setCurrentStock(e.target.value)}></input>
            </div>
          </div>

          {/* Stock in transit & Available stock */}
          <div className="name-address" style={{ marginTop: "15px" }}>
            <div>
              <span>Stock in transit</span>
              <br />
              <input type="text" value={stockInTransit} onChange={e => setStockInTransit(e.target.value)} style={{backgroundColor: "#bbc4d9ff"}}></input>
            </div>
            <div>
              <span>Available stock</span>
              <br />
              <input type="text" value={availableStock} onChange={e => setAvailableStock(e.target.value)} style={{backgroundColor: "#bbc4d9ff"}}></input>
            </div>
          </div>

          {/* Category & unit Price */}
           <div className="name-address" style={{ marginTop: "15px" }}>
            <div>
              <span>Category</span>
              <br />
              <input type="text" value={category} onChange={e => setCategory(e.target.value)}></input>
            </div>
            <div>
              <span>Unit Price</span>
              <br />
              <input type="text" value={unitPrice} onChange={e => setUnitPrice(e.target.value)}></input>
            </div>
          </div>

          {/* Total Inventory, Lorem & Lorem */}
           <div className="name-address" style={{ marginTop: "15px" }}>
            <div className="total-inventory-container">
              <span>Total Inventory</span>
              <br />
              <input type="text" value={totalInventory} onChange={e => setTotalInventory(e.target.value)}className="total-inventory-input" style={{backgroundColor: "#bbc4d9ff"}}></input>
            </div>
            <div className="lorem-wrapper">
              <div>
                <span>Lorem</span>
                <br />
                <input type="text" value={lorem} onChange={e => setLorem(e.target.value)}></input>
              </div>
              <div>
                <span>Lorem</span>
                <br />
                <input type="text" value={lorem} onChange={e => setLorem(e.target.value)}></input>
              </div>
            </div>
          </div>

          {/* Date */}
            <div className="full-width-field">
              <span>Date</span>
              <br />
              <input type="date" value={date} onChange={e => setDate(e.target.value)}></input>
            </div>

            {/* Email id */}
            <div className="full-width-field">
              <span>
                Email id
              </span>
              <br />
              <input type="email" value={emailId} onChange={e => setEmailId(e.target.value)}/>
            </div>
        </div>
        <hr />

        {/* buttons cancel & submit */}

        <div className="buttons">
          <button style={{ backgroundColor: "white", padding: "5px", borderRadius: "4px", border: "2px solid #f5f7fa"}}>Cancel</button>
          <button type="submit" style={{backgroundColor: "#077aff", color: "white", border: "none", padding: "5px", borderRadius: "4px"}}>Submit</button>
        </div>
      </div>
      </form>

      {toast && <p>{toast}</p>}

      
    </div> //main div
  );
}

export default AddSupplier;
