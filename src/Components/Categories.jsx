import React, { useState, useEffect } from "react";
import axios from "axios";

function Categories() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "http://localhost:3333/categories/all"
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
      <div className="section2__categories_div container">
        {photos.map((photo, index) => {
          if (index !== 3) {
            return (
              <div key={photo.id}>
                <img src={`http://localhost:3333${photo.image}`} alt="phot" />
                <p>{photo.title}</p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}

export default Categories;
