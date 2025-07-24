import React from 'react'
import './SupplierList.css'
import { IoManSharp } from "react-icons/io5";

function SupplierList() {
  return (
    <div className='list-page' style={{backgroundColor: "rgb(227, 233, 217)"}}>
      <div className='container-list'>
        <div className='list-header'>
          <span><IoManSharp /></span>
          <p>Suppliers list</p>
        </div>
        
      </div>
    </div>
  )
}

export default SupplierList
