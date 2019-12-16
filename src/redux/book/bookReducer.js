import { BUY_BOOK } from './bookTypes'

const initialState = {
  numOfBooks: 10
}

const BookReducer = (state = initialState, action) => {
  if(state.numOfBooks > 0) {
    switch (action.type) {
      case BUY_BOOK: return {
        ...state,
        numOfBooks: state.numOfBooks - action.payload
      }
  
      default: return state
    }
  }
  
}

export default BookReducer