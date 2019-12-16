import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyBook } from '../redux'

function NewBookContainer (props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h2>Number of Books - {props.numOfBooks} </h2>
      <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => props.buyBook(number)}>Buy {number} Books</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfBooks: state.book.numOfBooks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyBook: number => dispatch(buyBook(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBookContainer)