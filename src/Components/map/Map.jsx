import React from 'react';
import "./Map.scss"

function Map() {
  return (
    <div className='map'>
    <iframe className='map__iframe' style={{}} title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409223185673!2d13.372464412683602!3d52.50793287194149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1698535399548!5m2!1sru!2sde" 
     allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
export default Map