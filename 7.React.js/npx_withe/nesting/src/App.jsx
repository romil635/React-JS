
import './App.css'
// import Buttons1 from './companes/Buttons1'
import Card from './companes/Card'
import CardImg from './assets/somnath.jpg';
import CardImg1 from './assets/h3.jpg';
import CardImg2 from './assets/h4.jpg';
import CardImg3 from './assets/h8.jpeg';


function App() {
  

  return (
    <>
     {/* <Buttons1/> */}
     <div className='flex justify-center items-center'>
     <Card name={"Somnath Temple"} title={"History of Somnath Temple"} img={CardImg} />
     <Card name={"Adiyogi Temple"} title={" History of Adiyogi Temple"} img={CardImg1} />
     <Card name={"Dwarkadhish Temple "} title={"History of dwarkadhish temple "} img={CardImg2}/>
     <Card name={"Girnar Temple"} title={"History of Girnar Temple"}  img={CardImg3}/>
     </div>
    </>
  )
}

export default App
