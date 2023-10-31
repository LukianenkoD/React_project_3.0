import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector} from "react-redux";
import './ProductsFromCategories.scss';
import ProductCard from '../../ProductCard/ProductCard';
import Filter from '../../Filter/Filter';

function ProductsFromCategories() {

const allProduct = useSelector((store) => store.product.newProduct);

const {categorie} = useParams();
const [categor, setCategor] = useState([]);
let categorProduct = allProduct.filter((element)=>element.categoryId===+categorie);

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

    
  return (
    <>
     <div className='container categorieName'> { categor.category?.title}</div>
    <Filter/>
   
     <div className='products__photo_div container'>
    {
    categorProduct.filter((elem)=>elem.isShow===true).map((product, index)=>
     <ProductCard key={index} product={product}/>
        )
}
</div>
    </>
   
  )
}

export default ProductsFromCategories