import React,{useState, useEffect} from 'react';
import axios from "axios";
import ProductCard from '../../ProductCard/ProductCard';
import './ProductsWithDiscount.scss';
import Filter from '../../Filter/Filter';
import { useSelector } from "react-redux";

function ProductsWithDiscount({products}) {

  const product = useSelector((store) => store.product.newProduct);
console.log(product);
    // const [photos, setPhotos] = useState([]);
    // useEffect(() => {
    //   async function getData() {
    //     try {
    //       const response = await axios.get(
    //         'http://localhost:3333/products/all'
    //       );
    //       setPhotos(response.data);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    //   getData();
    // }, []);
    // console.log(photos);

    // useEffect(() => {
    //   setPhotos(product)
    
    // }, [product])

  return (
    <>
    <div className='discont container'>Products with sale</div>
   <Filter /*setProducts={setPhotos}*/ products={product} isDiscountPage={true} /*firstProducts={products}*//>
    <div /*className="section3__sale container"*/ className="products__photo_div container">
          {
            
           product.filter((product)=> product.discont_price).filter(elem=>elem.isShow===true)
           .map((product)=> <ProductCard key={product.id} product={product} />)
          
          
          
          // photos.map((product, index) => {
          //   if (product.discont_price) {
              
          //     return (
          //          <div key={product.id}>
          //         <img className='imgSale' src={`http://localhost:3333${product.image}`} alt="phot" />
          //         <AddToCart prod={product}/>
          //         <h1>{product.discont_price}$</h1>
          //         <h3 style={{color:'grey'}}>{product.price}$</h3>
          //         <h2 style={{color:'rgba(255, 50, 161, 1)'}}>{Math.floor((product.price-product.discont_price)/product.price*100)}%</h2>
          //         <p>{product.title}</p>
          //       </div>
               
          //     );
          //   }
          // })
            }
        </div>
    </>
    
  )
}

export default ProductsWithDiscount