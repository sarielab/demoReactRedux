/* reducers > index.js */
import { combineReducers } from 'redux'

import ternakReducer from './ternakReducer'

const rootReducer = combineReducers({
  ternaks: ternakReducer,
  // kandangs: kandangReducer
})

export default rootReducer