import React from "react";
import {NavLink} from "react-router-dom";
import bag from "../pages/Img/shopping_bag.svg";
import logo from "../pages/Img/logo.svg";
import "../header/Header.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {

  const cartList = useSelector((store) => store.cartList);
  let sumCart = cartList.reduce((acc,curr)=>{
   return acc+curr.quantity
  },0);
  console.log(sumCart);

  const navigate = useNavigate();

  return (
    <header className="container header">
      <div className="header__right_part">
        <div className="header__logo">
            <img className="header__logo_img" onClick={() => navigate("/")} src={logo} alt="logo" />
        </div>
        <NavLink to='/PageAllCategories' className={({isActive})=>isActive?"active":""}>
        
          <div className="header__btn_catalog">
            <p>
              Catalog
            </p>
          </div>
       
        </NavLink>
      </div>

      <div className="header__menu">
        <NavLink to="/" className={({isActive})=>isActive?"active":""}>
            Main Page
        </NavLink>
        <NavLink to="/AllProducts" className={({isActive})=>isActive?"active":""}>
           All products
        </NavLink>
        <NavLink to="/ProductsWithDiscount" className={({isActive})=>isActive?"active":""}>
            All sales
        </NavLink>
        <NavLink to="/PageShoppingCart" className={({isActive})=>isActive?"active":""}>
         <div className="caunter">
          <img src={bag} alt="shopping_cart" />
           <div className={sumCart?"caunter__point":"caunter__transparent"}>{sumCart?sumCart:''}</div>
         </div>
         

        </NavLink>
      </div>
    </header>
  );
}

export default Header;
