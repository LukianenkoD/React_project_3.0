import React, { useEffect, useState } from 'react';
import Main from "./Components/pages/HomePage/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageAllCategories from "./Components/pages/AllCategoriesPage/PageAllCategories";
import PageAllProducts from "./Components/pages/AllProductsPage/PageAllProducts";
import NoteFoundPage from "./Components/pages/NotFoundPage/NotFoundPage";
import PageShoppingCart from "./Components/pages/CartPage/PageShoppingCart";
import ProductsWithDiscount from "./Components/pages/ProductsWithDiscountPage/ProductsWithDiscount";
import ProductsFromCategories from "./Components/pages/ProductsFromCategories/ProductsFromCategories";
import Product from "./Components/pages/ProductPage/Product";
import { useDispatch } from "react-redux";
import axios from "axios";
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import {getDataToState} from './reducers/ProductReducer';

function App() {

  const [categories, setCategories] = useState([]);
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


  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "http://localhost:3333/categories/all"
        );
        setCategories(response.data);
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
        <Route path="/" element={<Main categories={categories}/>} />
        <Route path="/PageAllCategories" element={<PageAllCategories categories={categories}/>} />
        <Route path="/PageAllCategories/:categorie" element={<ProductsFromCategories/>}/>
        <Route path="/PageAllCategories/:categorie/:productId" element={<Product/>}/>
        <Route path="/AllProducts" element={<PageAllProducts/>} />
        <Route path="/PageShoppingCart" element={<PageShoppingCart/>} />
        <Route path="/ProductsWithDiscount" element={<ProductsWithDiscount/>} />
        <Route path="*" element={<NoteFoundPage/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
