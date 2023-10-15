// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/css';
// import '../Style/slider.scss';

// function Categories() {
//   const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     async function getData() {
//       try {
//         const response = await axios.get(
//           "http://localhost:3333/categories/all"
//         );
//         setPhotos(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     getData();
//   }, []);

//   return (
//     <>
//     <Swiper watchSlidesProgress={true} slidesPerView={4}  className="mySwiper">
//       <div className="section2__categories_div container">
//         {photos.map((photo, index) => {
//             return (
//               <SwiperSlide>
//                  <div key={photo.id}>
//                 <img className='imgCategories' src={`http://localhost:3333${photo.image}`} alt="phot" />
//                 <p>{photo.title}</p>
//               </div>
//               </SwiperSlide>
             
//             );
//         })}
//       </div>
//       </Swiper>
//     </>
//   );
// }

// export default Categories;
