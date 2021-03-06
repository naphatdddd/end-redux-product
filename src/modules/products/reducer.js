import {
  LOAD_PRODUCTS_REQUEST,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILURE,
  LOAD_PRODUCT_REQUEST,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_FAILURE,
} from './actions'

const initialState = {
  isLoading: false,
  items: [],
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCTS_REQUEST:
    case LOAD_PRODUCT_REQUEST:
      return { ...state, isLoading: true, items: [] }
    case LOAD_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, items: action.payload.products }
    case LOAD_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, items: [action.payload.product] }
    case LOAD_PRODUCTS_FAILURE:
    case LOAD_PRODUCT_FAILURE:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

export default reducer
