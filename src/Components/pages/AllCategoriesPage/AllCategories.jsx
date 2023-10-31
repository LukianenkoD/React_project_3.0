import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import '../../Style/slider.scss';
import './page_all_categories.scss';

function AllCategories({categories}) {

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
    1400: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
  };

  return (
    <>
     <button onClick={() => swiperRef.current.slidePrev()} className='btn_l'></button>
     <Swiper navigation={{clickable: true,}} watchSlidesProgress={true} slidesPerView={4}  className="mySwiper"
      breakpoints={sliderSettings} onBeforeInit={(swiper) => { swiperRef.current = swiper;}}>
     <div className="section2__categories_div container">
        {categories.map((product, index) => {
            return (
              <SwiperSlide  key={index}>
              <Link key={index} to={`/PageAllCategories/${product.id}`}>
                 <div className='divCategories' key={index}>
                <img className='imgCategories' src={`http://localhost:3333${product.image}`} alt="phot" />
                <p className='pCategories'>{product.title}</p>
              </div>
              </Link>
              </SwiperSlide>
            );
        })}
      </div>
      </Swiper>
      <button className='btn_r' onClick={() => swiperRef.current?.slideNext()}></button>
    </>
     );
    }
export default AllCategories;