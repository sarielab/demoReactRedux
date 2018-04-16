import Axios from 'axios'

import {
  ADD_TERNAK, FETCH_TERNAK_SUCCESS
} from './actionTypes'

export const addTernak = ternak => {
  return {
    type: ADD_TERNAK,
    payload: ternak
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
    Axios.get('http://localhost:1234/ternaks')
    .then(res => dispatch(fetchTernakSuccess(res.data)))
    .catch(err => {console.log(err)})
  }
}