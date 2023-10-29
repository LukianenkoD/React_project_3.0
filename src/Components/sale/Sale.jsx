import React,{useState, useEffect} from 'react';
import axios from "axios";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import '../Style/slider.scss';
import ProductCard from '../ProductCard/ProductCard';


function Sale() {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
      async function getData() {
        try {
          const response = await axios.get(
            'http://localhost:3333/products/all'
          );
          setPhotos(response.data);
        } catch (err) {
          console.log(err);
        }
      }
      getData();
    }, []);
  
    return (
      <>
      
      <Swiper watchSlidesProgress={true} slidesPerView={3}  className="mySwiper">
        <div className="section3__sale container">
          {photos.map((product) => {
            if (product.discont_price) {
              return (
                <SwiperSlide>
                   <ProductCard key={product.id} product={product}/>
                </SwiperSlide>
               
              );
            }
          })}
        </div>
        </Swiper>
      </>
      
    );
}

export default Sale