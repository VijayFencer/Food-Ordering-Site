import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";
import { RestaurantReducer } from "./reducer/restaurantReducer";

const reducer = combineReducers({
    restaurants: RestaurantReducer,
});

const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(reducer, composeenhancers(applyMiddleware(...middleware))
);

export default store;