import {
  ADD_TERNAK, ADD_TERNAK_SUCCESS, FETCH_TERNAK_SUCCESS, FETCH_TERNAK_LOADING, FETCH_TERNAK_FAILED,
} from './actionTypes'

export const addTernakSuccess = newTernak => {
  return {
    type: ADD_TERNAK_SUCCESS,
    payload: newTernak
  }
}

export const addTernak = newTernak => {
  console.log(newTernak)
  return (dispatch) => {
    Axios.post('http://localhost:3000/ternaks', newTernak)
      .then(res => {dispatch(addTernakSuccess(res.data))})
      .catch(err => {console.log(err)})
  }
}

export const fetchTernakSuccess = ternaks => {
  return {
    type: FETCH_TERNAK_SUCCESS,
    payload: ternaks,
  }
}

export const fetchTernakFailed = err => ({
  type: FETCH_TERNAK_FAILED,
  payload: err
})

export const fetchTernak = (dispatch) => {

  return (dispatch) => {
    dispatch({type: FETCH_TERNAK_LOADING})

    Axios.get('http://localhost:3000/ternaks')
    .then(res => dispatch(fetchTernakSuccess(res.data)))
    .catch(err => dispatch(fetchTernakFailed(err)))
  }
}