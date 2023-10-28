
const SORT_ITEM = 'SORT_ITEM';
const SHOW_DISCONT = 'SHOW_DISCONT';
const SORT_BY_PRICE_TO = 'SORT_BY_PRICE_TO';
const SORT_BY_PRICE_FROM = 'SORT_BY_PRICE_FROM';
const PRODUCT_DATA = 'PRODUCT_DATA';
const SORT_BY_PRICE_FROM_TO = 'SORT_BY_PRICE_FROM_TO';

export const productRed = (state={product:[], newProduct:[]}, action)=>{
    switch(action.type){

        case PRODUCT_DATA:
           let prod = action.payload.map((elem)=>{
            return{
                ...elem,
                isShow:true
            }
           })
           return {product:prod, newProduct:prod}

        case SORT_ITEM:
            
            let resultSort = state.newProduct;
            
           if(action.payload.sortType === 'desc'){
            resultSort.sort((a,b)=> b.price-a.price)
           }
           if(action.payload.sortType === 'asc'){
            resultSort.sort((a,b)=>a.price-b.price)}
           if(!action.payload.sortType){
            resultSort.sort((a,b)=>a.id-b.id)
           }
    
           return {...state, newProduct:resultSort}
           
       
           
       
            
               
            case SHOW_DISCONT:
                console.log(action.payload);
                let discont = state.newProduct.map((elem)=>{
                 if(elem.discont_price && action.payload){
                     return {
                         ...elem,
                         isShow:action.payload,
                       };
                 }if(!elem.discont_price && action.payload){
                     return {
                         ...elem,
                         isShow:!action.payload,
                       };
                 }
                 else {
                     return {
                         ...elem,
                         isShow:!action.payload,
                       };
                 }
                 
     
                })
               
                return {
                 ...state, newProduct:discont
                }

                case SORT_BY_PRICE_FROM:
                 
                        let sortByPriceFrom = state.newProduct.map((elem)=>{
                            if(elem.isShow && action.payload.numberFrom <= elem.price ){
                                return {
                                    ...elem,
                                    isShow:!action.payload.isShow,
                                  };
                            }
                           else{
                                return {
                                    ...elem,
                                    isShow:action.payload.isShow,
                                  };
                            }
                            
                           })
             
                    return {...state, newProduct:sortByPriceFrom} 
                   

            case SORT_BY_PRICE_TO:
             let sortByPriceTo = state.newProduct.map((elem)=>{
             if(elem.isShow && action.payload.numberTo >= elem.price){
                return {
                    ...elem,
                    isShow:action.payload.isShow,
                  };
             }
            else{
                 return {
                     ...elem,
                     isShow:!action.payload.isShow,
                   };
             }
             
            })
            return {
                ...state, newProduct:sortByPriceTo
               } 

            case SORT_BY_PRICE_FROM_TO:
             let sortByPriceFromTo = state.newProduct.map((elem)=>{
            if( elem.isShow && action.payload.numberFrom <= elem.price && elem.price <= action.payload.numberTo){
                return {
                    ...elem,
                    isShow:action.payload.isShow,
                  };
            }
            else{
                 return {
                     ...elem,
                     isShow:!action.payload.isShow,
                   };
             }
             
            })
            return {
                ...state, newProduct:sortByPriceFromTo
               } 
        
                
             default:
                return state
    }

}

export const sortItemByIdAction = (payload) => ({type: SORT_ITEM, payload});
export const showDiscountAction = (payload) => ({type: SHOW_DISCONT, payload});
export const sortPriceToAction = (payload) => ({type: SORT_BY_PRICE_TO, payload});
export const sortPriceFromAction = (payload) => ({type: SORT_BY_PRICE_FROM, payload});
export const getDataToState = (payload) => ({type: PRODUCT_DATA, payload});
export const getDataFromToAction = (payload) => ({type: SORT_BY_PRICE_FROM_TO, payload});