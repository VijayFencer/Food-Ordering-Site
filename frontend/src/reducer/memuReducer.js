import { GET_MENU_FAIL, GET_MENU_REQUEST, GET_MENU_SUCCESS } from "../constants/memuConstant";
import { ALL_RESTAURANTS_FAIL, ALL_RESTAURANTS_REQUEST, ALL_RESTAURANTS_SUCCESS } from "../constants/restaurantConstant";

const initialState= {
    menus : [],
    loading : false,
    error : null, 
};
export const menuReducer = (state = initialState , action) => {
    switch (action.type) {
        case GET_MENU_REQUEST:
            return {
                ...state,
                loading : false,
                error : null,
            };
            
        case GET_MENU_FAIL:
            return {
                ...state,
                laoding:false,
                error: action.payload,
            };
        case GET_MENU_SUCCESS :
            return {
                ...state,
                loading : false,
                menus : action.payload, 
            }
        default:
            return state;
            
    };
};