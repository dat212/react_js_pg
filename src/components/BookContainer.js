import React from 'react'
import { connect } from 'react-redux'
import { buyBook } from '../redux'

function BookContainer (props) {
  return (
    <div>
      <h2>Number of Books - {props.numOfBooks} </h2>
      <button onClick={props.buyBook}>Buy Book</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfBooks: state.Book.numOfBooks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyBook: () => dispatch(buyBook())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookContainer)