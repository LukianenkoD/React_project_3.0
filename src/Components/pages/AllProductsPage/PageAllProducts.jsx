import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useSelector,  useDispatch } from "react-redux";
import "./PageAllProducts.scss";
import Filter from '../../Filter/Filter'
import ProductCard from '../../ProductCard/ProductCard';
import {getDataToState} from '../../../reducers/ProductReducer'


function PageAllProducts({products}) {

  const newProduct = useSelector((store) => store.product.newProduct);
  // const product = useSelector((store) => store.product.product);
     console.log(newProduct);
     
    // const [products, setProducts] = useState([]);
    // const dispatch = useDispatch();
   

    // useEffect(() => {
    //   async function getData() {
    //     try {
    //       const response = await axios.get(
    //         "http://localhost:3333/products/all"
    //       );
    //       setProducts(response.data);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    //   getData();
    // }, []);

// useEffect(() => {
//   dispatch(getDataToState(products))
// }, [products])


  return (
    <>
    <div className='products_div container'>All products</div>
    <Filter /*firstProducts={products}*//>
    <div  className="products__photo_div container">
        {
        newProduct.filter(elem=>elem.isShow).map((product, index) => <ProductCard key={index} product={product}/>)}
      </div>
    </>
    
  )
}

export default PageAllProducts