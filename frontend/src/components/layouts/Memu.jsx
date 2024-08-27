import React, { useState } from 'react';
import FoodItem from './FoodItem';
import { useDispatch, useSelector } from "react-redux";
import { getMenus } from '../../actions/memuAction';
import { useParams } from "react-router-dom";
import Loader from './Loader';
import Message from './Message';

export default function Memu() {

  const dispatch = useDispatch();
  const { id } = useParams();

  const {menus, loading, error } = useSelector((state)=> state.menus);

  useState(() => {
    dispatch(getMenus(id));
  },[dispatch , id]);

  return (
    <div>
        {loading ? <Loader/> : error ? (<Message variant="danger">{error}</Message>):
        menus && menus.length > 0 ? (menus.map((menu)=>(
        <div key={menu._id}>
          <h2>{menu.category}</h2>
          <hr/>
          {console.log(menu.items)}
          {menu.items && menu.items.length > 0 ? (
            <div className="column">
              {menu.items.map((fooditem) => (
                <FoodItem key={fooditem._id} fooditem={fooditem} restaurant = {id}/>
              ))}
            </div>
          ):(<Message variant="info">No Food Item Found </Message>)}
        </div>
          ))):(<Message variant="info"> No Menus Found </Message>)
        }     
    </div>
  );
}
