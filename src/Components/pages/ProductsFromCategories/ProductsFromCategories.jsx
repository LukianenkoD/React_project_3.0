import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import './ProductsFromCategories.scss';
import ProductCard from '../../ProductCard/ProductCard';
import Filter from '../../Filter/Filter';


function ProductsFromCategories() {
  const prodCat = useSelector((store) => store.product);


    const {categorie} = useParams();
    const [categor, setCategor] = useState([]);
  
    const[newCategorData, SetNewCategorData] = useState([]);
    useEffect(()=>{
      SetNewCategorData(categor.data)
    },[categor.data])
    console.log(newCategorData);
    useEffect(()=>{
    SetNewCategorData(prodCat)
    },[prodCat])
    console.log(newCategorData);


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
     <div className='container categorieName'> { categor.category?.title /*categories.find((categ)=>categ.id === +categorie).title*/}</div>
    <Filter setProducts={setCategor} products={newCategorData} />
   
     <div className='products__photo_div container'>
    {
    newCategorData.filter((elem)=>elem.isShow!==true).map((product, index)=>
    <>
     <ProductCard key={index} product={product}/>
    
    </>
    
            
        )
}
</div>
    </>
   
  )
}

export default ProductsFromCategories
