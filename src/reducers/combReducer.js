import { combineReducers } from "redux";
import { productRed } from "./ProductReducer";
import { CartListReducer } from "./CartListReducer";


export const rootReducer = combineReducers({
  product:productRed,
  cartList: CartListReducer,
});