import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div>
      <form>
        <div className="input-group">
            <input type="text" id="search_field" className="form-control" placeholder='Search your favourite restaurant...' />
            <div className="input-group-append">
                <button id="search_btn" className="btn">
                <FaSearch className='fa-search'/>
                </button>
            </div>
        </div>
      </form>
    </div>
  )
}
