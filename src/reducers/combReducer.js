import { combineReducers } from "redux";
import { productRed } from "./cartReducer";
import { CartListReducer } from "./CartListReducer";


export const rootReducer = combineReducers({
  product:productRed,
  cartList: CartListReducer
});