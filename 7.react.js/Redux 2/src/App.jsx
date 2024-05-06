import Cakecontenar from "./Componets/Cakecontenar";
import { Provider } from "react-redux";
import "./App";
import Store from "./Redux/Store";
import IceContainer from "./Componets/IceContainer";
function App(){
    return(
        <>
        <Provider store={Store}>
            {/* <Cakecontenar/> */}
            <IceContainer/>
        </Provider>
        </>
    )
}
export default App;

