import { ADD_TERNAK, FETCH_TERNAK_SUCCESS } from '../actions/actionTypes'

const initialState = []

const ternakReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TERNAK: {
      let newId = state.length
      const newTernak = { ...action.payload, id: newId}
      const newTernaks = [...state, newTernak]
      return newTernaks
    }
    case FETCH_TERNAK_SUCCESS: {
      const newTernaks = action.payload
      return newTernaks
    }
    default: return state
  }
}

export default ternakReducer