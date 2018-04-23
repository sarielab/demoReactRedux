import Axios from 'axios'
const URL = 'http://localhost:1234'

export const fetchKandangSuccess = kandangs => {
  return {
    type: 'FETCH_KANDANG_SUCCESS',
    payload: kandangs,
  }
}

export const fetchKandangLoading = () => {
  return {
    type: 'FETCH_KANDANG_LOADING'
  }
}

export const fetchKandangError = (err) => {
  return {
    type: 'FETCH_KANDANG_ERROR',
    payload: err.toString()
  }
}

export const fetchKandang = () => {
  return (dispatch) => {
    dispatch(fetchKandangLoading())
    Axios.get(`${URL}/kandangs`)
    .then(res => {
      dispatch(fetchKandangSuccess(res.data))
    })
    .catch(err => { dispatch(fetchKandangError(err))})
  }
}