
const SORT_ITEM_BY_ID = 'SORT_ITEM_BY_ID';
const SHOW_DISCONT = 'SHOW_DISCONT';
const SORT_BY_PRICE_TO = 'SORT_BY_PRICE_TO';
const SORT_BY_PRICE_FROM = 'SORT_BY_PRICE_FROM';

export const productRed = (state=[], action)=>{
    switch(action.type){
        case SORT_ITEM_BY_ID:
           return [...action.payload]
           
        case SHOW_DISCONT:
           let discont = action.payload.product.map((elem)=>{
            if(elem.discont_price!==null){
                return {
                    ...elem,
                    isShow:action.payload.isShow,
                  };
            }else{
                return {
                    ...elem,
                    isShow: action.payload.show,
                  };
            }
            

           })
           return discont
        case SORT_BY_PRICE_FROM:
            let sortByPriceFrom = action.payload.product.map((elem)=>{
             if(elem.price <= action.payload.numberFrom){
                 return {
                     ...elem,
                     isShow:true,
                   };
             }
             else if(elem.price >= action.payload.numberTo){
                return {
                    ...elem,
                    isShow:true,
                  };
            }
            else{
                 return {
                     ...elem,
                     isShow: false,
                   };
             }
             
            })
            return sortByPriceFrom
        
                
             default:
                return state
    }

}

export const sortItemByIdAction = (payload) => ({type: SORT_ITEM_BY_ID, payload});
export const showDiscountAction = (evt) => ({type: SHOW_DISCONT, payload:{product:evt.product, show:evt.show, isShow:evt.isShow}});
export const sortPriceToAction = (evt) => ({type: SORT_BY_PRICE_TO, payload:{product:evt.product, isShow:evt.isShow, number:evt.number}});
export const sortPriceFromAction = (evt) => ({type: SORT_BY_PRICE_FROM, payload:{product:evt.product, isShow:evt.isShow, numberTo: evt.numberTo, numberFrom: evt.numberFrom}});