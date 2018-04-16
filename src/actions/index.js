import Axios from 'axios'

import {
  ADD_TERNAK, ADD_TERNAK_SUCCESS, FETCH_TERNAK_SUCCESS,
  ADD_KANDANG, ADD_KANDANG_SUCCESS, FETCH_KANDANG_SUCCESS
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

export const fetchTernak = () => {
  return (dispatch) => {
    Axios.get('http://localhost:3000/ternaks')
    .then(res => dispatch(fetchTernakSuccess(res.data)))
    .catch(err => {console.log(err)})
  }
}

export const addKandangSuccess = newKandang => {
  return {
    type: ADD_KANDANG_SUCCESS,
    payload: newKandang
  }
}

export const addKandang = newKandang => {
  console.log(newKandang)
  return (dispatch) => {
    Axios.post('http://localhost:3000/kandangs', newKandang)
      .then(res => {dispatch(addKandangSuccess(res.data))})
      .catch(err => {console.log(err)})
  }
}

export const fetchKandangSuccess = kandangs => {
  return {
    type: FETCH_KANDANG_SUCCESS,
    payload: kandangs,
  }
}

export const fetchKandang = () => {
  return (dispatch) => {
    Axios.get('http://localhost:3000/kandangs')
    .then(res => dispatch(fetchKandangSuccess(res.data)))
    .catch(err => {console.log(err)})
  }
}