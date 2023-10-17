import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import Map from '../../map/Map';
// import Categories from '../Categories';
import './page_all_categories.scss';
import AllCategories from './AllCategories';

function PageAllCategories() {
  const [categories, setCategories] = useState([]);
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
     <h1 className='all_categories container'>Categories</h1>
     {/* <AllCategories categories = {categories}/> */}
     <div className="categories container">
        {categories.map((product, index) => {
            return (
              <Link key={product.id} to={`/PageAllCategories/${product.id}`}>
                 <div key={product.id}>
                <img src={`http://localhost:3333${product.image}`} alt="phot" />
                <p>{product.title}</p>
              </div>
              </Link>
            );
        })}
      </div>
    </>
   
  )
}

export default PageAllCategories