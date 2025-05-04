export function quantitynumm(quantitynum) {
    return {
      type: 'SET_QUANTITY',
      payload: quantitynum,
    };
  }

export function addToCart(cartData){
    return{
        type:'SET_CART',
        payload:cartData
    }
}