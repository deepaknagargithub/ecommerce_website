import { Add_Products, Delete_Result, Filter_Result } from "../actions";

var initialProductsState = {
  products: [],
};

export function products(state = initialProductsState, action) {
  switch (action.type) {
    case Add_Products:
      return {
        ...state,
        products: action.products,
      };
    case Delete_Result:
      return {
        ...state,
      };
    case Filter_Result:
      const resultfilter = state.products.filter(
        (item) => item.price <= action.price
      );
      return {
        ...state,
        products: resultfilter,
      };
    default:
      return state;
  }
}
