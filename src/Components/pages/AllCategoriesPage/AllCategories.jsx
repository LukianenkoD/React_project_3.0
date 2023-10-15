import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import '../../Style/slider.scss';


import './page_all_categories.scss';

function AllCategories() {
 
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "http://localhost:3333/categories/all"
        );
        setCategories(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <>
     <Swiper watchSlidesProgress={true} slidesPerView={4}  className="mySwiper">
     <div className="section2__categories_div container">
        {categories.map((product, index) => {
            return (
              <SwiperSlide>
              <Link key={product.id} to={`/PageAllCategories/${product.id}`}>
                 <div key={product.id}>
                <img className='imgCategories' src={`http://localhost:3333${product.image}`} alt="phot" />
                <p className='pCategories'>{product.title}</p>
              </div>
              </Link>
              </SwiperSlide>
            );
        })}
      </div>
      </Swiper>
    </>
     );
    }
     {/* <h1 className='container'>Categories</h1> */}
    
  
   
 

export default AllCategories;