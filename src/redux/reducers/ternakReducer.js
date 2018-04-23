/* reducers > ternakReducer.js */

const initialState = {
  data : [],
  isLoading: false,
  isUpdating: false,
  fetchError: false,
  fetchErrorMessage: ''
}
const ternakReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TERNAK': {
      const oldData = state.data
      const newId = oldData.length || 1;

      const newTernak = {
        ...action.payload,
        id: newId
      }

      const newData = [...oldData, newTernak]
      const newState = {...state, data: newData}
      return newState
    }
    case 'FETCH_TERNAK_SUCCESS': {
      const newState = {...state, data: action.payload, isLoading: false}
      return newState
    }
    case 'FETCH_TERNAK_LOADING' :{
      const newState = {...state, isLoading: true}
      return newState
    }
    case 'FETCH_TERNAK_ERROR' :{
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

export default ternakReducer