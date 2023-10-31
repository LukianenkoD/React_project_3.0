import React, { useRef } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import '../Style/slider.scss';
import ProductCard from '../ProductCard/ProductCard';
import { useSelector } from "react-redux";
import './sale.scss';


function Sale() {

  const swiperRef = useRef();
  const sliderSettings = {
    350: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  };

  const productSale = useSelector((store) => store.product.product);
  
    return (
      <>
      <button onClick={() => swiperRef.current.slidePrev()} className='btn_l_sale'></button>
      <Swiper navigation={{clickable: true,}} watchSlidesProgress={true} slidesPerView={3}  className="mySwiper" 
      breakpoints={sliderSettings} onBeforeInit={(swiper) => { swiperRef.current = swiper;}}>
        <div className="section3__sale container">
          {productSale.filter((product)=> product.discont_price).filter(elem=>elem.isShow===true)
           .map((product)=> {
              return (
                <SwiperSlide key={product.id}>
                   <ProductCard key={product.id} product={product}/>
                </SwiperSlide>
              ); })}
        </div>
        </Swiper>
        <button className='btn_r_sale' onClick={() => swiperRef.current?.slideNext()}></button>
      </>
    );
}

export default Sale