import React from 'react'
import FoodItem from './FoodItem'
export default function Menu() {
  return (
    <div>
      <div>
        <h2>Chaats</h2>
        <br />

        <div className="row">
        <FoodItem/>
        <FoodItem/>
        <FoodItem/>
        <FoodItem/>
        </div>
      </div>
      <div>
        <h2>Main Course</h2>
        <br />
        <div className="row">
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
            <FoodItem/>
        </div>
      </div>
    </div>
  );
}
