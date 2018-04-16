const initialState = [
  { jenis: 'Ayam', id: 1 },
  { jenis: 'Bebek', id: 2},
  { jenis: 'Cacing', id: 3}
]

const ternakReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TERNAK': {
      let newId = state.length;
      const newTernak = { jenis: action.payload, id: newId}
      const newTernaks = [...state, newTernak];
      return newTernaks;
    }
    default: return state;
  }
}

export default ternakReducer