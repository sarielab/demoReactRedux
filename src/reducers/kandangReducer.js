import { ADD_KANDANG_SUCCESS, FETCH_KANDANG_SUCCESS } from '../actions/actionTypes'

const initialState = []

const kandangReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_KANDANG_SUCCESS: {
      let newId = state.length
      const newKandang = { ...action.payload, id: newId}
      const newKandangs = [...state, newKandang]
      return newKandangs
    }
    case FETCH_KANDANG_SUCCESS: {
      const newKandangs = action.payload
      return newKandangs
    }
    default: return state
  }
}

export default kandangReducer