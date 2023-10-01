import React,{useState, useEffect} from 'react';
import axios from "axios";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import './Style/slider.scss';


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
          {photos.map((product, index) => {
            if (product.discont_price) {
              return (
                <SwiperSlide>
                   <div key={product.id}>
                  <img className='imgSale' src={`http://localhost:3333${product.image}`} alt="phot" />
                  <h1>{product.discont_price}$</h1>
                  <h3 style={{color:'grey'}}>{product.price}$</h3>
                  <h2 style={{color:'rgba(255, 50, 161, 1)'}}>{Math.floor((product.price-product.discont_price)/product.price*100)}%</h2>
                  <p>{product.title}</p>
                </div>
                

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