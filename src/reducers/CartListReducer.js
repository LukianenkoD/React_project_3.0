

const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
const REM_ITEM_BY_ID = 'REM_ITEM_BY_ID'
const INCREASE_ITEM_BY_ID = 'INCREASE_ITEM_BY_ID';
const DECREASE_ITEM_BY_ID  = 'DECREASE_ITEM_BY_ID';


export function CartListReducer (state = [], action){
    switch (action.type){
        case ADD_NEW_ITEM: 
            return [...state, action.payload]
        case REM_ITEM_BY_ID:
            return state.filter(elem => elem.id !== action.payload)
        case INCREASE_ITEM_BY_ID:
            return state.map((elem)=>{
                if(elem.id===action.payload){
                    return {...elem, 
                        // total: elem.total?elem.total+action.payload:elem.total=action.payload, 
                    quantity: elem.quantity?++elem.quantity:(elem.quantity=1)+1}
                }else{
                    return {...elem, 
                        // total: elem.total?elem.total+action.payload:elem.total=action.payload, 
                    quantity: elem.quantity}
                }
                // return {...elem, 
                //     // total: elem.total?elem.total+action.payload:elem.total=action.payload, 
                //     quantity: ++elem.quantity/*elem.quantity?++elem.quantity:(elem.quantity=1)+1*/}
            })
            case DECREASE_ITEM_BY_ID:
                return state.map((elem)=>{
                    if(elem.id===action.payload){
                        return {...elem, 
                            // total: elem.total?elem.total+action.payload:elem.total=action.payload, 
                        quantity: elem.quantity?--elem.quantity:elem.quantity=1}
                    }else{
                        return {...elem, 
                            // total: elem.total?elem.total+action.payload:elem.total=action.payload, 
                        quantity: elem.quantity}
                    }

                    // return {...elem, 
                    //     // total: elem.total>action.payload?elem.total-action.payload:elem.total=action.payload,
                    //     quantity:--elem.quantity/*elem.quantity>1?--elem.quantity:elem.quantity=1*/
                    //  }
                })
       
        default:
            return state
    }
}


export const addNewItemAction = (payload) => ({type: ADD_NEW_ITEM, payload})
export const remItemByIdAction = (payload) => ({type: REM_ITEM_BY_ID, payload})
export const increaseItemByIdAction = (payload) => ({type: INCREASE_ITEM_BY_ID, payload})
export const decreaseItemByIdAction = (payload) => ({type: DECREASE_ITEM_BY_ID, payload})