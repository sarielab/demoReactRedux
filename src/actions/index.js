import Axios from 'axios'

import {
  ADD_TERNAK, ADD_TERNAK_SUCCESS, FETCH_TERNAK_SUCCESS
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
      .then(res => {console.log(res.data)})
      .catch(err => {console.log(err)})
  }
}

export const fetchTernakSuccess = ternaks => {
  return {
    type: FETCH_TERNAK_SUCCESS,
    payload: ternaks,
  }
}

export const fetchTernak = () => {
  return (dispatch) => {
    Axios.get('http://localhost:3000/ternaks')
    .then(res => dispatch(fetchTernakSuccess(res.data)))
    .catch(err => {console.log(err)})
  }
}