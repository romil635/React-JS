import'./App.css';
import Navbar from "./Navbar"
import Article from "./Article"
import Card from './Card'
import Table from"./Table"
import Footer from './Footer';



function App() {
  return (
    <>


      <Navbar/>
      <Article/>
      <div className='change'>
      <Card/>
      <Table/>
      </div>
      <Footer/>
      


</>  );
}

export default App;
