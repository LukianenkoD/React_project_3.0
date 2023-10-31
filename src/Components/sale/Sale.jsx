import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import '../Style/slider.scss';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector } from "react-redux";


function Sale() {

  const productSale = useSelector((store) => store.product.product);
  console.log(productSale);
  
    return (
      <>
      
      <Swiper watchSlidesProgress={true} slidesPerView={3}  className="mySwiper">
        <div className="section3__sale container">
          {productSale.filter((product)=> product.discont_price).filter(elem=>elem.isShow===true)
           .map((product)=> {
              return (
                <SwiperSlide key={product.id}>
                   <ProductCard key={product.id} product={product}/>
                </SwiperSlide>
               
              );
            
          })}
        </div>
        </Swiper>
      </>
      
    );
}

export default Sale