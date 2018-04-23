/* actions> index.js*/
import Axios from 'axios'
const URL = 'http://localhost:1234'

export const addTernak = ternak => {
  return {
    type: 'ADD_TERNAK',
    payload: ternak
  }
}

export const fetchTernakSuccess = ternaks => {
  return {
    type: 'FETCH_TERNAK_SUCCESS',
    payload: ternaks,
  }
}

export const fetchTernakLoading = () => {
  return {
    type: 'FETCH_TERNAK_LOADING'
  }
}

export const fetchTernakError = (err) => {
  return {
    type: 'FETCH_TERNAK_ERROR',
    payload: err.toString()
  }
}

export const fetchTernak = () => {
  return (dispatch) => {
    dispatch(fetchTernakLoading())
    Axios.get(`${URL}/ternaks`)
    .then(res => {
      dispatch(fetchTernakSuccess(res.data))
    })
    .catch(err => { dispatch(fetchTernakError(err))})
  }
}
