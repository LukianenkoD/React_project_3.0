import React, { useState, useEffect } from 'react';
import Main from "./Components/pages/HomePage/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageAllCategories from "./Components/pages/AllCategoriesPage/PageAllCategories";
import PageAllProducts from "./Components/pages/AllProductsPage/PageAllProducts";
import NoteFoundPage from "./Components/pages/NotFoundPage/NotFoundPage";
import PageShoppingCart from "./Components/pages/CartPage/PageShoppingCart";
import ProductsWithDiscount from "./Components/pages/ProductsWithDiscountPage/ProductsWithDiscount";
import ProductsFromCategories from "./Components/pages/ProductsFromCategories/ProductsFromCategories";
import Product from "./Components/pages/ProductPage/Product";
import {Provider} from 'react-redux';

import { useDispatch } from "react-redux";
import axios from "axios";
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Map from './Components/map/Map';
import {getDataToState} from './reducers/ProductReducer'
import { store } from './store';

function App() {
  const dispatch = useDispatch();
 
  
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "http://localhost:3333/products/all"
        );
       dispatch(getDataToState(response.data))
      } catch (err) {
        console.log(err);
      }
    }
    getData();
    
  }, []);

  
  return (
    <>
   
  
   
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/PageAllCategories" element={<PageAllCategories/>} />
        <Route path="/PageAllCategories/:categorie" element={<ProductsFromCategories/>}/>
        <Route path="/PageAllCategories/:categorie/:productId" element={<Product/>}/>
        <Route path="/AllProducts" element={<PageAllProducts /*products={products}*//>} />
        <Route path="/PageShoppingCart" element={<PageShoppingCart/>} />
        <Route path="/ProductsWithDiscount" element={<ProductsWithDiscount /*products={products}*//>} />
        <Route path="*" element={<NoteFoundPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  
   
    </>
    
  );
}

export default App;
