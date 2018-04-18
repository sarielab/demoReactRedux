/* reducers > ternakReducer.js */

const initialState = {
  data : [
    { jenis: 'Ayam', jumlah: 1, id: 1 },
    { jenis: 'Bebek', jumlah: 5, id: 2},
    { jenis: 'Cacing', jumlah: 6, id: 3},
  ],
  isLoading: false,
  isUpdating: false,
}
/*
action = {
  type: 'ADD_TERNAK' 'delete_ternak' 'edit_ternak' 'fetch_ternak'
  payload: data
}
*/
const ternakReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TERNAK': {
      const oldData = state.data
      const newId = oldData.length || 1;

      //  { jenis: 'Cacing', jumlah: 6, id: 3},
      const newTernak = {
        ...action.payload,
        id: newId
      }

      const newData = [...oldData, newTernak]
      const newState = {...state, data: newData}
      return newState
    }
    default: return state
  }
}

export default ternakReducer