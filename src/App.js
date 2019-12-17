import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import UsersContainer from './components/UsersContainer'
import BookContainer from './components/BookContainer'
import NewBookContainer from './components/NewBookContainer'

function App() {
  return (
    <Provider store={store}>
    <div className='App'>
      <NewBookContainer />
      {/* <BookContainer></BookContainer>
      <UsersContainer></UsersContainer> */}
    </div>
  </Provider>
  );
}

export default App;
 