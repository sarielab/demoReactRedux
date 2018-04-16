import { ADD_KANDANG_SUCCESS, ADD_KANDANG_LOADING, ADD_KANDANG_FAILED, FETCH_KANDANG_SUCCESS, FETCH_KANDANG_LOADING, FETCH_KANDANG_FAILED } from '../actions/actionTypes'

const initialState = {
  data: [],
  isFetching: false,
  isUpdating: false,
  isUpdateError: false,
  updateErrorMsg: '',
  isFetchError: false,
  fetchErrorMsg: ''
}

const kandangReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_KANDANG_SUCCESS: {
      let newId = state.length
      const newKandang = { ...action.payload, id: newId}
      const newKandangs = [...state.data, newKandang]
      return { ...state, data: newKandangs, isUpdating: false }
    }
    case ADD_KANDANG_LOADING: {
      return { ...state, isUpdating: true, isUpdateError: false }
    }
    case ADD_KANDANG_FAILED: {
      const err = action.payload.toString()
      return { ...state, isUpdating: false, isUpdateError: true, updateErrorMsg: err }
    }
    case FETCH_KANDANG_SUCCESS: {
      const newKandangs = action.payload
      return {...state, data: newKandangs, isFetching: false}
    }
    case FETCH_KANDANG_LOADING: {
      return { ...state, isFetching: true, isFetchError: false }
    }
    case FETCH_KANDANG_FAILED: {
      const err = action.payload.toString()
      return { ...state, isFetching: false, isFetchError: true, fetchErrorMsg: err }
    }
    default: return state
  }
}

export default kandangReducer