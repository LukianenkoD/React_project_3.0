import AddToCart from "../AddToCart";
import "./ProductCard.scss"




function ProductCard (props){

    const {product} = props;
    const discont = Math.floor(product.discont_price);
    const price = Math.round(product.price);

    return (
        <div className='imgProduct' key={product.id}>
            <img className='imgProduct' src={`http://localhost:3333${product.image}`} alt="phot" />
          
          <AddToCart prod={product}/>
          <div className="product__card_price">
                  {product.discont_price?
                  <>
                    <h4>{discont}$</h4>
                    <h3>{price}$</h3>
                    <h2>
                      {Math.floor(
                        ((price - discont) / price) * 100
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