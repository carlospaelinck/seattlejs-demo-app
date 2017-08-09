import { baseData, moreDogs } from "./base-data"

/* Types */
export const GET_DOGGOS = "GET_DOGGOS"
export const LOAD_MORE_DOGS = "LOAD_MORE_DOGS"

/* Actions */
export const getDoggos = () => dispatch => dispatch({
  type: GET_DOGGOS,
  payload: baseData
})

export const loadMoreDogs = () => dispatch => dispatch({
  type: LOAD_MORE_DOGS,
  payload: moreDogs
})

/* App Reducer */
export const reducer = (state = { doggos: [] }, action) => {
  if (action.type === GET_DOGGOS) {
    return { ...state, doggos: action.payload }
  } else if (action.type === LOAD_MORE_DOGS) {
    return {
      ...state,
      doggos: [
        ...state.doggos,
        ...action.payload
      ]
    }
  }
  return state
}

/* Selectors */
export const doggosSelector = state => state.doggos
