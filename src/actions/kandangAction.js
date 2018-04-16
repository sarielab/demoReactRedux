import {
  ADD_KANDANG, ADD_KANDANG_SUCCESS, FETCH_KANDANG_SUCCESS, FETCH_KANDANG_LOADING, FETCH_KANDANG_FAILED,
} from './actionTypes'

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

export const fetchKandangFailed = err => ({
  type: FETCH_KANDANG_FAILED,
  payload: err
})

export const fetchKandang = () => {

  return (dispatch) => {
    dispatch({type: FETCH_KANDANG_LOADING})

    Axios.get('http://localhost:3000/kandangs')
    .then(res => dispatch(fetchKandangSuccess(res.data)))
    .catch(err => {dispatch(fetchKandangFailed(err))})
  }
}