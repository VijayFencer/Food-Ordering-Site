import React, { useEffect } from 'react'
import { getRestaurants } from "../../actions/restaurantAction"
import { useDispatch, useSelector} from "react-redux";
export default function CountRestaurant() {
  const dispatch = useDispatch();
  const { loading, error, count } = useSelector((state) => state.restaurants);
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);
  return (
    <div>
      {loading ? (<p>Loading Restaurant count...</p>
      ) : error ? (
      <p>Error: {error}</p>
    ):(
      <p className="NumOfRestro">
        {count} <span className="Restro">
            Restaurants
        </span>
      </p>
      )}
      <hr />
    </div>
  )
}
