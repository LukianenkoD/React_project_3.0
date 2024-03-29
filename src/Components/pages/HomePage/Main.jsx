import React from 'react';
import {NavLink} from "react-router-dom";
import flowers from '../Img/image_main_flowers.svg';
import Gnome from '../Img/main_img/gnome.svg';
import Sale from '../../sale/Sale';
import '../../Style/style.scss';
import AllCategories from '../AllCategoriesPage/AllCategories';
import './Main.scss';
import GetDiscount from '../../GetDiscount/GetDiscount';

function Main({categories}) {

  return (
    <>
    <main className="container main">
      <section className="container section1">
        <div className='section1__left'>
            <h1>Sale</h1>
            <h2 style={{}}>New season</h2>
            <div className='section1__left_button'>
            <NavLink to='/ProductsWithDiscount' className={({isActive})=>isActive?"active":""}>
            <button style={{background: '#FFF', color: '#2D2D2D'}}>
              Sale</button>
            </NavLink>
            </div>
        </div>
        <div>
        <img className='flower' style={{}} src={flowers} alt="flowers" />
        </div>
      </section>
      <section className="container section2">
      <div className='section2__categories container'>
        <div className='section2__categories_header'>
        <h1>Catalog</h1>
        <NavLink to='/PageAllCategories' className={({isActive})=>isActive?"active":""}>
        <button>All categories</button>
        </NavLink>
        </div>
        <AllCategories categories={categories}/>
       </div>
      </section>
      <section className='discount container'>
        <div className='discount__main'>
        <div>
        <img className='discount__img' src={Gnome} alt="gnome"/>
        </div>
        <div className='discount__main_order'>
          <h1>5% off</h1>
          <h2>on the first order</h2>
          <GetDiscount/>
          <div>
          </div>
        </div>
        </div>
      </section>
      <section className='section3 container'>
        <h1>Sale</h1>
        <Sale/>
      </section>
    </main>
    </>
  )
}

export default Main