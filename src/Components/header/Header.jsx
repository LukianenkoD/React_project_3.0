import React from "react";
import {NavLink} from "react-router-dom";
import bag from "../pages/Img/shopping_bag.svg";
import logo from "../pages/Img/logo.svg";
import "../header/Header.scss";

function Header() {
  return (
    <header className="container header">
      <div className="header__right_part">
        <div className="header__logo">
            <img src={logo} alt="logo" />
        </div>
        <NavLink to='/PageAllCategories' className={({isActive})=>isActive?"active":""}>
        <a href="#">
          <div className="header__btn_catalog">
            <p>
              Catalog
            </p>
          </div>
        </a>
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
      
          <img src={bag} alt="shopping_cart" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
