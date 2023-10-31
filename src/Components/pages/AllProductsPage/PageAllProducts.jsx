import axios from "axios";
import { useSelector } from "react-redux";
import "./PageAllProducts.scss";
import Filter from '../../Filter/Filter'
import ProductCard from '../../ProductCard/ProductCard';


function PageAllProducts({products}) {

  const newProduct = useSelector((store) => store.product.newProduct);
     console.log(newProduct);
     


  return (
    <>
    <div className='products_div container'>All products</div>
    <Filter/>
    <div  className="products__photo_div container">
        {
        newProduct.filter(elem=>elem.isShow).map((product, index) => <ProductCard key={index} product={product}/>)}
      </div>
    </>
    
  )
}

export default PageAllProducts