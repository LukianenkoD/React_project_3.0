import AddToCart from "../AddToCard/AddToCart";
import "./ProductCard.scss";
import { useNavigate } from "react-router-dom";




function ProductCard (props){

    const {product} = props;
    const discont = Math.floor(product.discont_price);
    const price = Math.floor(product.price);

    const navigate = useNavigate();
    return (
        <div 
        className='imgProductDiv imgProduct' key={product.id}>
            <img onClick={() => navigate(`/PageAllCategories/:categorie/${product.id}`)} className='imgProduct' src={`http://localhost:3333${product.image}`} alt="phot"  />
          
          <AddToCart prod={product}/>
          <div className="product__card_price">
                  {product.discont_price?
                  <>
                    <h4>{Math.floor(product.discont_price)}$</h4>
                    <h3>{Math.round(product.price)}$</h3>
                    <h2>
                      {Math.floor(
                        ((product.price - product.discont_price) / product.price) * 100
                      )}
                      %
                    </h2>
                  </>
                 
                  :<h4>{price}$</h4>
                  
                 }  
                    
                    
                  </div>
                  <p className="product__card_price_p">{product.title}</p>

             
        </div>
         
    )
}


export default ProductCard