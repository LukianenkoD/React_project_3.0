

const ADD_NEW_ITEM = 'ADD_NEW_ITEM'
const REM_ITEM_BY_ID = 'REM_ITEM_BY_ID'
const INCREASE_ITEM_BY_ID = 'INCREASE_ITEM_BY_ID';
const CHANGE_STATE = 'CHANGE_STATE';


export function CartListReducer (state = [], action){
    switch (action.type){
        case ADD_NEW_ITEM: 
            return [...state, action.payload]
        case REM_ITEM_BY_ID:
            return state.filter(elem => elem.id !== action.payload)
        case INCREASE_ITEM_BY_ID:
            return state.map((elem)=>{
                return {...elem, total: (state.reduce((acc,curr)=>{
                    return acc + curr.price
                },0))}
            })
        case CHANGE_STATE: 
            return [...state, state.push(action.payload)]
            
        default:
            return state
    }
}


export const addNewItemAction = (payload) => ({type: ADD_NEW_ITEM, payload})
export const remItemByIdAction = (payload) => ({type: REM_ITEM_BY_ID, payload})
export const increaseItemByIdAction = (payload) => ({type: INCREASE_ITEM_BY_ID, payload})
export const changeState = (payload) => ({type: CHANGE_STATE, payload})