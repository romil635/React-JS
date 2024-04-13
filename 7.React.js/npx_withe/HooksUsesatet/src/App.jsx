import './App.css'
import To_Do_List from './Task/To_Do_List';
import UseEffect_API_Card from './Task/UseEffect_API_Card';
// import Use_Effect from './Hooks/Use_Effect';
// import Use_Effect_API from './Hooks/Use_Effect_API';

function App() {
  
    return (
      <>
       {/* <Use_Effect/>
       <Use_Effect_API/> */}
       <div className='flex justify-center m-auto'>
       <UseEffect_API_Card/>
       </div>
       <To_Do_List/>
      </>
    );
  }

  export default App
