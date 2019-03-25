import { combineReducers, } from 'redux';
import blogs from './blogs';
import idGen from './idGen'
const rootReducer = combineReducers({
  blogs,
  idGen,
})
export default rootReducer;