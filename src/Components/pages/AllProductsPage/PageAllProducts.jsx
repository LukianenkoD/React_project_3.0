import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useSelector } from "react-redux";
import "./PageAllProducts.scss";
import Filter from '../../Filter/Filter'
import ProductCard from '../../ProductCard/ProductCard';


function PageAllProducts() {

  const product = useSelector((store) => store.product);
     
     console.log(product);
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

useEffect(() => {
  setProducts(product)

}, [product])

  return (
    <>
    <div className='products_div container'>All products</div>
    <Filter setProducts={setProducts} products={products}/>
    <div  className="products__photo_div container">
        {
        products.filter(elem=>elem.isShow!==true).map((product, index) => <ProductCard key={index} product={product}/>)}
      </div>
    </>
    
  )
}

export default PageAllProducts