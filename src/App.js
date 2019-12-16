import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import UsersContainer from './components/UsersContainer'
import BookContainer from './components/BookContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewBookContainer from './components/NewBookContainer'

function App() {
  return (
    <Provider store={store}>
    <div className='App'>
      <NewBookContainer />
    </div>
  </Provider>
  );
}

export default App;
 