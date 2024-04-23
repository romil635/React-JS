import "./App.css";
import Card from "./componant/Card";
import CardImg from '../src/assets/T1.jpg'
import cardImg1 from '../src/assets/T2.avif'
import cardImg2 from './assets/T3.jpg'
import cardImg3 from './assets/Lord-Krishna.jpeg'

function App() {
  return <>
    <div className="flex justify-center items-center">
      <Card name={"History"} title={"Dwarkadhis History"} Img={CardImg} history={"The Dwarkadhish temple, also known as the Jagat Mandir and occasionally spelled Dwarakadheesh, is a Hindu temple dedicated to Krishna, who is worshiped here by the name Dwarkadhish (Dvārakādhisha), or 'King of Dwarka'. The temple is located at Dwarka city of Gujarat, India,"}/>
      <Card name={"Temple"} title={"Dwarkadhis Temple"} Img={cardImg1} history={"The Dwarkadhish temple, also known as the Jagat Mandir and occasionally spelled Dwarakadheesh, is a Hindu temple dedicated to Krishna, who is worshiped here by the name Dwarkadhish (Dvārakādhisha), or 'King of Dwarka'. The temple is located at Dwarka city of Gujarat, India,"}/>
      <Card name={"View"} title={"View Temple"} Img={cardImg2} history={"The Dwarkadhish temple, also known as the Jagat Mandir and occasionally spelled Dwarakadheesh, is a Hindu temple dedicated to Krishna, who is worshiped here by the name Dwarkadhish (Dvārakādhisha), or 'King of Dwarka'. The temple is located at Dwarka city of Gujarat, India,"}/>
      <Card name={"God"} title={"Dwarkadhis"} Img={cardImg3} history={"The Dwarkadhish temple, also known as the Jagat Mandir and occasionally spelled Dwarakadheesh, is a Hindu temple dedicated to Krishna, who is worshiped here by the name Dwarkadhish (Dvārakādhisha), or 'King of Dwarka'. The temple is located at Dwarka city of Gujarat, India,"}/>
    </div>
  </>;
}

export default App;
