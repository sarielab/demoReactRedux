/* reducers > kandangReducer.js */

const initialState = {
  data : [],
  isLoading: false,
  isUpdating: false,
  fetchError: false,
  fetchErrorMessage: ''
}

const kandangReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_KANDANG_SUCCESS' : {
      const newState = {...state, data: action.payload, isLoading: false}
      return newState
    }
    case 'FETCH_KANDANG_LOADING': {
      const newState = {...state, isLoading: true}
      return newState
    }
    case 'FETCH_KANDANG_ERROR' :{
      const newState = {
        ...state,
        fetchError: true,
        isLoading: false,
        fetchErrorMessage: action.payload
      }
      return newState
    }
    default: return state
  }
}

export default kandangReducer