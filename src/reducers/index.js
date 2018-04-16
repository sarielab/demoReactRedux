import { combineReducers } from 'redux'
import ternakReducer from './ternakReducer'
import kandangReducer from './kandangReducer'

const rootReducer = combineReducers({
  ternaks: ternakReducer,
  kandangs: kandangReducer,
})

export default rootReducer