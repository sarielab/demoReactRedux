import { ADD_KANDANG_SUCCESS, FETCH_KANDANG_SUCCESS, FETCH_KANDANG_LOADING, FETCH_KANDANG_FAILED } from '../actions/actionTypes'

const initialState = {
  data: [],
  isFetching: false,
  isError: false,
  fetchErrorMsg: ''
}

const kandangReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_KANDANG_SUCCESS: {
      let newId = state.length
      const newKandang = { ...action.payload, id: newId}
      const newKandangs = [...state.data, newKandang]
      return { ...state, data: newKandangs }
    }
    case FETCH_KANDANG_SUCCESS: {
      const newKandangs = action.payload
      return {...state, data: newKandangs, isFetching: false}
    }
    case FETCH_KANDANG_LOADING: {
      return { ...state, isFetching: true }
    }
    case FETCH_KANDANG_FAILED: {
      const err = action.payload
      return { ...state, isFetching: false, isError: true, fetchErrorMsg: err }
    }
    default: return state
  }
}

export default kandangReducer