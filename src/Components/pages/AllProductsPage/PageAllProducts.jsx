import React, {useState, useEffect} from 'react'
import axios from "axios";
import AddToCart from '../../AddToCart'
import "./PageAllProducts.scss";
import Filter from '../../Filter'
import ProductCard from '../../ProductCard/ProductCard';

function PageAllProducts() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      async function getData() {
        try {
          const response = await axios.get(
            "http://localhost:3333/products/all"
          );
          setProducts(response.data);
        } catch (err) {
          console.log(err);
        }
      }
      getData();
    }, []);
  return (
    <>
    <div className='products_div container'>All products</div>
    {/* <Filter/> */}
    <div  className="products__photo_div container">
        {products.map((product, index) => <ProductCard key={index} product={product}/>)}
      </div>
    </>
    
  )
}

export default PageAllProducts