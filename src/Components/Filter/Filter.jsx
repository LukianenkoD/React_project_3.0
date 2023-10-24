import React, {useState, useEffect} from 'react';
import './Filter.scss';
import { useDispatch, useSelector } from "react-redux";
import {sortItemByIdAction} from '../../reducers/cartReducer';
import {showDiscountAction} from '../../reducers/cartReducer';
import {sortPriceToAction} from '../../reducers/cartReducer';
import {sortPriceFromAction} from '../../reducers/cartReducer';

function Filter({products, setnewProduct}) {
    

    const [sortType, setSortType] = useState('');

    const [priceForm, setPriceForm] = useState('');
    const [priceTo, setPriceTo] = useState('');


    console.log(sortType);
    const [showDiscount, setShowDiscont] = useState(false);
   console.log(showDiscount);
     const product = useSelector((store) => store.product);
     const dispatch = useDispatch();
     console.log(product);
    
     function discont(arg){
     }

     useEffect(()=>{
        const sort = () =>{
            let newProduct = products.map(a=>a)
                 if(showDiscount){

                 } 
                 if(sortType === 'desc'){
                    newProduct.sort((a,b)=> b.price-a.price)
                    return dispatch(sortItemByIdAction(newProduct)) 
             
                 }if(sortType === 'asc'){
                    newProduct.sort((a,b)=>a.price-b.price);
                 return dispatch(sortItemByIdAction(newProduct)) 
                 }
                 if(priceForm){
                    const payload={
                        product:newProduct,
                        isShow:true,
                        numberFrom:Number(priceForm)
                    }
                   
                    return dispatch(sortPriceFromAction(payload))
                }
                if(priceTo){
                    const payload={
                        product:newProduct,
                        isShow:false,
                        numberTo:Number(priceTo)
                    }
                    return dispatch(sortPriceFromAction(payload))
                }
        }
        sort();

    }, [sortType, priceForm, priceTo])









    const payload={
        product:products,
        show:showDiscount,
        isShow:false,
    }
  
  return (
    <div className='container filter'>
        <div>
        <p className='filter__name'>Price</p>
        </div>
        <div>
            <input min={1} value={priceForm} onChange={(e)=>setPriceForm(e.target.value)} /*onClick={()=>setPriceForm('')}*/ /*onChange={(e)=>dispatch(e.target.value)}*/  className='filter__input_price' type="number" placeholder='from'/>
        </div>
        <div>
            <input min={1} value={priceTo} onChange={(e)=>setPriceTo(e.target.value)} className='filter__input_price' type="number" placeholder='to' />
        </div>
        <div>
            <p className='filter__name'>Discounted items</p>
        </div>
        <div>
        <input className='filter__input_checkbox' type="checkbox"
         checked={showDiscount} onChange={(e)=>setShowDiscont(e.target.checked)} onInput={()=>dispatch(showDiscountAction(payload))} /*checked={showDiscount} onChange={(e)=>dispatch(e.target.checked)}*/ />
        </div>
        <div>
            <p className='filter__name'>Sorted</p>
        </div>
        <div>
            <select  value={sortType} onChange={(e)=>setSortType(e.target.value)} className='filter__sort' type="text" >
                <option value=''>by default</option>
                <option value="asc">ascendig</option>
                <option value="desc">descendig</option>

            </select>
        </div>
        
       

    </div>
  )
}

export default Filter