import Axios from 'axios'

export const addTernak = jenis => {
  return {
    type: 'ADD_TERNAK',
    payload: jenis
  }
}

export const fetchTernakSuccess = ternaks => {
  return {
    type: 'FETCH_TERNAK_SUCCESS',
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