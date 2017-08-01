import shortid from "shortid"
import { commerce, company, lorem } from "faker"

/* Data Generators */
const generateProduct = () => ({
  id: shortid(),
  name: commerce.productName(),
  price: commerce.price(),
  details: {
    company: company.companyName(),
    color: commerce.color(),
    description: lorem.paragraph()
  }
})

const iterator = Array(25).keys()
const generateData = () => [...iterator].map(() => generateProduct())

/* Types */
export const GET_PRODUCT_DATA = "GET_PRODUCT_DATA"

/* Actions */
export const getProductData = () => dispatch => dispatch({
  type: GET_PRODUCT_DATA,
  payload: generateData()
})

/* App Reducer */
export const reducer = (state = { data: [] }, action) => {
  if (action.type === GET_PRODUCT_DATA) {
    return { ...state, data: action.payload }
  }
  return state
}

/* Selectors */
export const productsSelector = state => state.data
