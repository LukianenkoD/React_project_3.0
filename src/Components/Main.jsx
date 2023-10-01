import React from 'react';
import Header from './Header';
import Footer from './Footer';
import flowers from '../Img/image_main_flowers.svg';
import Categories from './Categories';
import Gnome from '../Img/main_img/gnome.svg';
import Sale from './Sale';
import SliderSwiper from './pajes/SliderSwiper';



function Main() {
  return (
    <>
    <div>
    <Header/>
    </div>
    <main className="container main">
      <section className="container section1">
      <div className='section1__left' /*style={{width:"50%"}}*/>
            <h1>Sale</h1>
            <h2 style={{}}>New season</h2>
            <div className='section1__left_button'>
          
              <button style={{background: '#FFF', color: '#2D2D2D'}}>
              Sale</button>
          
           
            {/* <button style={{background: 'none', color:'rgba(255, 255, 255, 1)'}}>Подробнее</button> */}

           
            
            </div>
            
        </div>
        <div /*style={{width:"50%"}}*/>
        <img style={{width:"100%", marginTop:"-50px"}} src={flowers} alt="flowers" />

        </div>
      </section>
      <section className="container section2">
      <div className='section2__categories container'>
        <div className='section2__categories_header'>
        <h1>Catalog</h1>
        <button>All categories</button>
        </div>
        <Categories/>
      
       </div>
      </section>
      <section className='discount container'>
        <div className='discount__main'>
        <div>
        <img src={Gnome} alt="gnome" style={{marginLeft:'91px', marginTop:'27px'}}/>
        </div>
        <div>
          <h1>5% off</h1>
          <h2>on the first order</h2>
          <input type="tel" placeholder='+49' />
          <button>Get a discount</button>
        </div>
        </div>
      </section>
      <section className='section3 container'>
        <h1>Sale</h1>
        <Sale/>

      </section>

    </main>
{/* 
 <div>
  <SliderSwiper/>
 </div> */}
    
    <div>
    <Footer/>
    </div>
    
    </>
  )
}

export default Main