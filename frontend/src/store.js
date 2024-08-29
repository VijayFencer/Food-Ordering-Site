// createStore is a function to create a store. it is just as a array
// combineReducer- since we are using manny reducers, this will combine the output of the different reducers in the one 
// applyMiddleware- it fall between action and reducers, it helps us to add the middleware function in the redux 
// compose- this will increase the readability of the code
import {legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";
import { restaurantReducers } from "./reducer/restaurantReducer";
// this will help us to run data fetch . it is a standard approch for adding async methodology in the redux 
import thunk from "redux-thunk";
import { menuReducer } from "./reducer/menuReducer";
import { authReducer, forgotPasswordReducer, userReducer } from "./reducer/userReducer";
import { cartReducer } from "./reducer/cartReducer";
import { myOrderReducer, newOrderReducer, orderDetailsReducer } from "./reducer/orderReducer";

// creating combined reducers 
const reducer = combineReducers({
    restaurants : restaurantReducers,
    menus : menuReducer,
    auth :authReducer,
    user : userReducer,
    forgotPassword : forgotPasswordReducer,
    cart : cartReducer,
    newOrder : newOrderReducer,
    myOrders: myOrderReducer,
    orderDetails : orderDetailsReducer,
});

// /this is useful multiple store enhancer in the store 
const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware= [thunk];

const store = createStore(reducer,composeenhancers(applyMiddleware(...middleware)));

export default store;



// this is the code for setting up an REDUX STORE