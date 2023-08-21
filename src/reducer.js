export const initialState = {
  basket: [],
  user: null
};


export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0)};



  const reducer = (state, action, product) => {
    console.log(product);
    switch (action.type) {
      case  "Add To Basket":
        return {
          ...state, basket: [...state.basket, action.item],
        };
        
    case  "Empty Basket":
      return {
        ...state,
        basket: []
      }

    case  "Remove From Basket":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);

      } else {
        console.warn(
          ` remove product (id: ${action.id})  not in basket!`
        )
      }

      return {
        ...state,
        basket: newBasket
      }
    
    case "Set_User":
      return {
        ...state,
        user: action.user.id
      }

    default:
      return state;
  }
};


 

 
  
  export default reducer;