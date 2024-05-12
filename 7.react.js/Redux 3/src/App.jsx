import React from 'react'
import CakeContainer from './Component/CakeContainer'
import ChocoContaier from './Component/ChocoContainer'
import store from './Redux/Store'
import { Provider } from 'react-redux'


const App = () => {
  return (
    <div>
      <div className='row-span-1 col-span-2'>
      <Provider store={ store}>
        <CakeContainer/>
        <ChocoContaier/>
      </Provider>
      </div>
    </div>
  )
}

export default App
