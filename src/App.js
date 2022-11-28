//import logo from './logo.svg';
import './App.css';
import Intro1 from "./components/Intro1"
import Intro2 from "./components/Intro2.js"
import Intro3 from "./components/Intro3.js"
import Promo from "./components/Promo.js"
import Nav from "./components/Nav.js"
import Footer from "./components/Footer.js"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Intro1/>
      <Intro2/>
      <Intro3/>
      <Promo/>
      <Footer/>
    </div>
  );
}

export default App;
