

export function addToCard(id){
    return {type:'CART_ADD', payload:id,};

} 

export function deleteFromCard(id){
    return {type:'CART_DELETE', payload:id,};

} 

export function ChangeCard(id){
    return {type:'CART_CHANGE', payload:id,};

} 