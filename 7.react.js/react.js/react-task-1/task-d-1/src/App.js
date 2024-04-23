import "./App.css";
import Navbar from "./task/Navbar";
import Article from "./task/Article";
import Card from "./task/Card";
import Table from "./task/Table";
import Footer from "./task/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Article />
      <div id="flex">
        <Card />
        <Table />
      </div>
      <Footer />
    </>
  );
}

export default App;
