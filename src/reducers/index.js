import { combineReducers } from 'redux'
import ternakReducer from './ternakReducer'

const rootReducer = combineReducers({
  ternaks: ternakReducer,
})

export default rootReducer