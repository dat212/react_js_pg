import { combineReducers } from 'redux'
import bookReducer from './book/bookReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  book: bookReducer,
  iceCream: iceCreamReducer,
  user: userReducer
})

export default rootReducer