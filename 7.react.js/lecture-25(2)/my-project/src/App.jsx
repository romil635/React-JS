import './App.css'
import CakeContainer from './Component/CakeContainer';
import { Provider } from 'react-redux'
import Store from './Redux/Store';

import IceContainer from './Component/IceContainer';

function App() {

  return (
    <>
      <Provider store={Store}>
        <CakeContainer />
        <IceContainer/>
      </Provider>
        
      

  
    </>
  );
}

export default App
