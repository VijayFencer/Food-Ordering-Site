import React from 'react'

export default function Restaurant() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/8/f9fca9ec-de97-4208-95a7-d315a13109cb_50958.jpg" 
        alt="Dominos" />
        
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">Dominos Pizza</h5>
            <p className="rest_address">123 Street, Place, City - 000000, State</p>
        <div className="rating-outer">
            <div className="rating-inner"></div>
            <span className="no_of_reviews">(140 reviews)</span>
        </div>
        </div>
      </div>
    </div>
  )
}
