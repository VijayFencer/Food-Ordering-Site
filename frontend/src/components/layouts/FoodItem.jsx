import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
export default function FoodItem() {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
        <div className="card p-3 rounded">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/4/4e30b1ff-dbe8-41d3-b083-d46b9d742ffc_636d161e-7f34-4371-b63c-bf9e3d091a0f.jpg"
             alt="" className="card-img-top mx-auto" />
        
        <div className="caard-body d-flex flex-column">
            <h5 className="card-title">
                Veg Loaded Pizza
            </h5>
            <p className="fooditem_desc">
            Centre loaded with Molten Cheese & topped with Onion, Capsicum, Tomato & Grilled Mushroom *Contains non-edible container under the Pizza
            </p>
            <p className="card-text">
            <FaRupeeSign />100
            <br />
            </p>
            <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>
            <br />
            <p>Status:
                <span id="stock_status"
                className={10>5? "greenColor" : "redColor"}>
                    {10>5 ? " In Stock ": " Out of Stock "}
                </span>
            </p>
        </div>
        </div>
    </div>
  )
}
