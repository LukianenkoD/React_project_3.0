import React from 'react';
import {NavLink} from "react-router-dom";
import flowers from '../Img/image_main_flowers.svg';
// import Categories from '../../catalog_categories/Categories';
import Gnome from '../Img/main_img/gnome.svg';
import Sale from '../../sale/Sale';
import '../../Style/style.scss'
import PageAllCategories from '../AllCategoriesPage/PageAllCategories';
import AllCategories from '../AllCategoriesPage/AllCategories';
import './Main.scss'
import axios from 'axios';
import {useForm} from 'react-hook-form'


function Main() {
  const{
    handleSubmit,
    formState:{errors},
    reset,
  } = useForm({mode:"onTouched"});

  const handleDiscont=()=>{
  async function getDiscount(){
    try{
      const response = await axios.post("http://localhost:3333/sale/send");
      return localStorage.setItem("answer", response.data.status);

    }catch(err){
      return err.message;
    }
  }
  getDiscount();
};

const submitForm = (data)=>{
  console.log(data);
  localStorage.setItem("discont", data.telephon);
  reset();
};
console.log(errors);
  return (
    <>
    <main className="container main">
      <section className="container section1">
      <div className='section1__left' /*style={{width:"50%"}}*/>
            <h1>Sale</h1>
            <h2 style={{}}>New season</h2>
            <div className='section1__left_button'>
            <NavLink to='/ProductsWithDiscount' className={({isActive})=>isActive?"active":""}>
            <button style={{background: '#FFF', color: '#2D2D2D'}}>
              Sale</button>
        </NavLink>
              
          
           
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
        
        <NavLink to='/PageAllCategories' className={({isActive})=>isActive?"active":""}>
        <button>All categories</button>
        </NavLink>
        </div>
        <AllCategories/>
        
      
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
          <form onSubmit={handleSubmit(submitForm)}>
          <div className='discount__main_button'>
          <input type="number" placeholder='+49' /*{...register('telephon',{required:"input required", 
          maxLength:{value:15, message:"To long. Max is 15 symbols"},})}*//>
          <button onClick={()=>handleDiscont()}>Get a discount</button>
          
          </div>
          </form>
          <div>
           
            {localStorage.getItem('answer')===true?<p>You bekome discont 5%</p>:<p>Try again</p>}
             {/* {setTimeout(()=> {localStorage.removeItem('answer')},2000)} */}
            
          </div>
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
    
    </>
  )
}

export default Main