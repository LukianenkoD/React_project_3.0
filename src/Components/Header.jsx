import React from "react";
import bag from "../Img/shopping_bag.svg";
import logo from "../Img/logo.svg";
import "./Style/style.scss";

function Header() {
  return (
    <header className="container header">
      <div className="header__right_part">
        <div className="header__logo">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <a href="#">
          <div className="header__btn_catalog">
            <p>
              Catalog
            </p>
          </div>
        </a>
      </div>

      <div className="header__menu">
        {/* <a href="#" style={{ textDecoration: "none" }}>
          <p
            style={{
              color: "rgba(0,0,0,1)",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            
          </p>
        </a> */}
        <a href="#" style={{ textDecoration: "none" }}>
          <p
            style={{
              color: "#000",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Main Page
          </p>
        </a>
        <a href="#" style={{ textDecoration: "none" }}>
          <p
            style={{
              color: "#000",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
           All products
          </p>
        </a>
        <a href="#" style={{ textDecoration: "none" }}>
          <p
            style={{
              color: "#000",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            All sales
          </p>
        </a>
        <a href="#">
          <img src={bag} alt="shopping_cart" />
        </a>
      </div>
    </header>
  );
}

export default Header;
