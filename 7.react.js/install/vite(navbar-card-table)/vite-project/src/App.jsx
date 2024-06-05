import './App.css'
// import Components from './components';
import Navbar from './navbar';
import Artical from './artical';
import Table from './table';
import Card from './card';
import Footer from './footer';


function App() {
  return (
    <>   
    <Navbar/>
   <Artical/>
   <div className="flex">

    <Card/>
    <Table/>       
   </div>
    <Footer/>
      <> </>
      {/* <Components></Components> */}
    </>
  );
}

export default App;
