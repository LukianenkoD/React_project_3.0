
async function getProducts(url){
    try{
        const res = await fetch(url);
        const body = await res.json();
        return body;
    }catch(error){
        console.error('Could not fetch.', error.message);
    };
}
const products = await getProducts('http://localhost:3333/products/all/');
// console.log(products);
const newProducts = products.map((object)=>({...object, priceTotal:object.price, quantity:0}))
// console.log(newProducts);
// const getProductsArray = getProducts('http://localhost:3333/products/all/')
// .then((body)=>body);
// console.log(getProductsArray);
const initalState = {
     products: newProducts,
    // products:fetch('http://localhost:3333/products/all/')
    // .then(res=>res.json())
    // .then(body=>console.log(body))
    // .catch(error=>console.log(error.message)),
    cartList: []
};
console.log(initalState);
export const productRed = (state=initalState, action)=>{
    switch(action.type){
        case 'CART_ADD':
            const addedItem = state.products.find((item)=>
            item.id===action.payload);
            let item;

            const itemFromCart = state.cartList.find((item)=>item.id===action.payload);



            if(itemFromCart){
                item = {...addedItem, quantity: itemFromCart.quantity+1};
                const newCartList = state.cartList.filter((item)=>item.id!==action.payload);
            return {...state, cartList:[...newCartList, item]}
            }else{item = {...addedItem, quantity: 1}};
            return {...state, cartList: [...state.cartList, item]}

        case 'CART_DELETE':
            const deleteItem = state.cartList.filter((item)=>
            item.id!==action.payload);

            return {...state, cartList: deleteItem}
            // default:
            //     return state;
        case 'CART_CHANGE':
            const total = state.cartList.reduce((acc,curr)=>{
                        return acc + curr.priceTotal /*(curr.priceTotal?curr.priceTotal:curr.price)*/
                      },0);
        
                    return {...state, cartList: total}
                    default:
                        return state;
                        
    }

}