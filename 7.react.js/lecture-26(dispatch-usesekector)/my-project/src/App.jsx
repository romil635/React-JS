import React from 'react'
import CakeContainer from './Component/CakeContainer'
import NewContainer from './Component/NewContainer'
import ChocoContaier from './Component/ChocoContaier'
import store from './Redux/Store'
import { Provider } from 'react-redux'


const App = () => {
  return (
    <div>
      <Provider store={ store}>
        <CakeContainer/>
        {/* <NewContainer/> */}
        <ChocoContaier/>
      </Provider>
    </div>
  )
}

export default App
