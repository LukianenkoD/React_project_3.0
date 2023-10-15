import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
// import Product from './ProductPage/Product';
import AddToCart from '../../AddToCart';
import './ProductsFromCategories.scss';
import ProductCard from '../../ProductCard/ProductCard';


function ProductsFromCategories() {
    const {categorie} = useParams();
    // const [categoriesProducts, setcategoriesProducts] = useState([]);
    
    const [categor, setCategor] = useState({});
 console.log(categor);
// const nemeOfCategorie = categor.category

// function discont(product){
//     const discont = product.discont_price;
//     const price = product.price
//     if(discont){
//         return(    <>
//         <div>
//         <h3 style={{color:'grey'}}>{Math.round(discont)}$</h3> 
//         </div>
//         <div>
//         <h2 style={{color:'rgba(255, 50, 161, 1)'}}>{Math.floor((price-discont)/price*100)}%</h2>
//         </div>
 
   
//             </>)
//      }
// }

useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `http://localhost:3333/categories/${categorie}`
    
        );
        setCategor(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  },[categorie]);

    // useEffect(()=>{
    //     async function getProducts(){
    //         try{
    //             const response = await axios.get(
    //                 `http://localhost:3333/products/all/`
    //             );
    //             setcategoriesProducts(response.data)
    //         }catch(err){
    //             console.log(err);
    //         }

    //     }
    //     getProducts();
    //   },[]);
    // let newArray = categor.data;

    //   console.log(newArray);
  return (
    <>
     <div className='container categorieName'> { categor.category?.title /*categories.find((categ)=>categ.id === +categorie).title*/}</div>
    
     {/* {categorie} */}
     <div className='products__photo_div container'>
{
  categor.data?.map((product)=>(
    <>
    <Link to={`/PageAllCategories/:categorie/${product.id}`}>
     <ProductCard  product={product}/>
     
    </Link>
    
    </>
    
            
        ))

// categoriesProducts.filter((product)=> product.categoryId === +categorie).map((product)=>(
//     <ProductCard product={product}/>
// ))
}
</div>

{/* <Product product={categoriesProducts}/> */}
    </>
   
  )
}

export default ProductsFromCategories
/*

<div className='container categories'>
{

categoriesProducts.map((product)=>(
    <div  key={product.id}>
        
        <img src={`http://localhost:3333${product.image}`} alt="img_product" />
        <h3>{`title:${product.title}`}</h3>
        <Link to={`/posts/${product.categoryId}`}></Link>

    </div>
))}
</div>
*/

