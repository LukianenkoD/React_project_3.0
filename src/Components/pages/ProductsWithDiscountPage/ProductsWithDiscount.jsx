import ProductCard from '../../ProductCard/ProductCard';
import './ProductsWithDiscount.scss';
import Filter from '../../Filter/Filter';
import { useSelector } from "react-redux";

function ProductsWithDiscount() {

  const product = useSelector((store) => store.product.newProduct);
  console.log(product);

  return (
    <>
    <div className='discont container'>Products with sale</div>
    <Filter products={product} isDiscountPage={true} />
    <div className="products__photo_div container">
          { 
           product.filter((product)=> product.discont_price).filter(elem=>elem.isShow===true)
           .map((product)=> <ProductCard key={product.id} product={product} />)
            }
        </div>
    </>
    
  )
}

export default ProductsWithDiscount