import React from 'react';
import instagram from "../pages/Img/icon_instagram.svg";
import whatsApp from '../pages/Img/icon-whatsapp.svg';
import './Footer.scss';
import '../Style/style.scss';
import Map from '../map/Map'





function Footer() {
  return (
    <footer className='container footer'>
        <div className='footer__div'>
        <div className='footer__div_left'>
            
            <h2>Contact</h2>
            
          
            <h1>+49 999 999 99 99</h1>
        
           
            <div className='footer__div_social' >
                <div>
                    <a href="#">
                    <img src={instagram} alt="instagram" />
                    <p>instagram</p>
                    </a>
                </div>
                <div>
                    <a href="#">
                    <img src={whatsApp} alt="whatsApp" />
                    <p>WhatsApp</p>
                    </a>

                </div>
                
            </div>
        </div>
        <div className='footer__div_right'>
            <h2>Address</h2>
            <a href="https://www.google.com/search?q=telranDE">Linkstraße 2, 8 OG, 10785, </a>
            <a href="https://www.google.com/search?q=telranDE">Berlin, Deutschland</a>
            <p>Working Hours:</p>
            <h4>24 hours a day</h4>

        </div>
        </div>

       <Map />
    </footer>
  )
}

export default Footer