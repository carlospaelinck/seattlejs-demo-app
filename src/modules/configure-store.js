import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { reducer } from "./"

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState)
  return store
}
