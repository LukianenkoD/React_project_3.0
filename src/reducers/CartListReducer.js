const ADD_NEW_ITEM = "ADD_NEW_ITEM";
const REM_ITEM_BY_ID = "REM_ITEM_BY_ID";
const INCREASE_ITEM_BY_ID = "INCREASE_ITEM_BY_ID";
const DECREASE_ITEM_BY_ID = "DECREASE_ITEM_BY_ID";
// const SORT_ITEM_BY_ID = 'SORT_ITEM_BY_ID';

let defaultState = JSON.parse(localStorage.getItem("cart_item")) ?? []

export function CartListReducer(state = defaultState, action) {
  // window.localStorage.setItem("cart_item", JSON.stringify(state))

  switch (action.type) {
    
    // case ADD_NEW_ITEM:
    //     return [...state, action.payload]
    case ADD_NEW_ITEM:
      let newCart;
      if (state.find((elem) => elem.id === action.payload.id)) {
       newCart = state.map((elem) => {
        if(elem.id === action.payload.id){
          return {
            ...elem,
            quantity: ++elem.quantity
          };
        }else{
          return elem;
        }
      });
    } else {
        newCart = [...state, {...action.payload, quantity:1}]
      }
      localStorage.setItem("cart_item", JSON.stringify(newCart))
      return newCart
        

    case REM_ITEM_BY_ID:
     let delNewCart = state.filter((elem) => elem.id !== action.payload);
     localStorage.setItem("cart_item", JSON.stringify(delNewCart))
     return delNewCart

    case INCREASE_ITEM_BY_ID:
      let incNewCart = state.map((elem) => {
        if (elem.id === action.payload) {
          return {
            ...elem,
            quantity: ++elem.quantity,
          };
        } else {
          return {
            ...elem,
            quantity: elem.quantity,
          };
        }
      
      });
      localStorage.setItem("cart_item", JSON.stringify(incNewCart))
      return incNewCart

    case DECREASE_ITEM_BY_ID:
      let decrNewCart = state.map((elem) => {
        if (elem.id === action.payload) {
          return {
            ...elem,
           quantity: elem.quantity>1 ? --elem.quantity : 1,
          };
        } else {
          return {
            ...elem,
            quantity: elem.quantity,
          };
        }

      });
      localStorage.setItem("cart_item", JSON.stringify(decrNewCart))
      return decrNewCart;
    
    // case SORT_ITEM_BY_ID:
    //   const newState=[...action.payload]
    //   // const sort = action.payload.map(a=>a)
    //   //  return {
    //   // newSort: sort.sort((a, b) => (a.name > b.name ? 1 : -1))
    //   // } 
    //   // return [...action.payload.sort]
    //     // if (action.payload.sort === 'asc'){
    //     //   return action.payload.array.sort((a,b)=> a.price - b.price)
    //     //  } else if (action.payload.sort === 'desc'){
    //     //   return action.payload.array.sort((a,b)=> b.price - a.price)}
    //     //  else{
    //     //   return action.payload.array
    //     //  }
    //   return newState




    default:
      return state
      
  }
  
}



export const addNewItemAction = (payload) => ({ type: ADD_NEW_ITEM, payload });
export const remItemByIdAction = (payload) => ({ type: REM_ITEM_BY_ID, payload});
export const increaseItemByIdAction = (payload) => ({ type: INCREASE_ITEM_BY_ID, payload});
export const decreaseItemByIdAction = (payload) => ({type: DECREASE_ITEM_BY_ID, payload});
// export const sortItemByIdAction = (payload) => ({type: SORT_ITEM_BY_ID, payload});
