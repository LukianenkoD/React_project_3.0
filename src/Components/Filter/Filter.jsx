import React, {useState, useEffect} from 'react';
import './Filter.scss';
import { useDispatch, useSelector } from "react-redux";
import {sortItemByIdAction} from '../../reducers/ProductReducer';
import {showDiscountAction} from '../../reducers/ProductReducer';
import {sortPriceToAction} from '../../reducers/ProductReducer';
import {sortPriceFromAction} from '../../reducers/ProductReducer';
import {getDataFromToAction} from '../../reducers/ProductReducer';



function Filter({ isDiscountPage}) {

    const [sortType, setSortType] = useState('');
    const [priceForm, setPriceForm] = useState('');
    const [priceTo, setPriceTo] = useState('');
    const [showDiscount, setShowDiscont] = useState(false);
      
    const defaultState = useSelector((store) => store.product.product);
    
    const dispatch = useDispatch();
    
    useEffect(()=>{
        const sort = () =>{
            dispatch(showDiscountAction(showDiscount))
            dispatch(sortItemByIdAction({sortType, defaultState}))
                
            if(priceForm){
              const payloadFrom={
              isShow:false,
              numberFrom:Number(priceForm),}
              dispatch(sortPriceFromAction(payloadFrom))}

            if(priceTo){
              const payloadTo={
              isShow:true,
              numberTo:Number(priceTo),}
              dispatch(sortPriceToAction(payloadTo))}

            if(priceTo && priceForm){
              const payloadFromTo={
              isShow:true,
              numberTo:Number(priceTo),
              numberFrom:Number(priceForm)}
              dispatch(getDataFromToAction(payloadFromTo))}}
        sort();
    }, [sortType, priceForm, priceTo, showDiscount])

  return (
    <div className='container filter'>
        <div>
        <p className='filter__name'>Price</p>
        </div>
        <div>
            <input min={1} value={priceForm} onChange={(e)=>setPriceForm(e.target.value)} className='filter__input_price' type="number" placeholder='from'/>
        </div>
        <div>
            <input min={1} value={priceTo} onChange={(e)=>setPriceTo(e.target.value)} className='filter__input_price' type="number" placeholder='to' />
        </div>
       { !isDiscountPage && (
            <>            
            <div>
            <p className='filter__name'>Discounted items</p>
            </div>
            <div>
            <input className='filter__input_checkbox' type="checkbox"
             checked={showDiscount} onChange={(e)=>setShowDiscont(e.target.checked)} />
            </div>
            </>
        )}
        <div className='sorted'> 
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
    </div>
  )
}

export default Filter