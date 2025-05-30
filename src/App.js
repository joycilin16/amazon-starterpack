import Slider  from "./Components/Slider/Slider";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import  Virtual  from './Components/Virtual/Virtual'
import Products from "./Components/Products/Products";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Slider/>
     <Virtual/>
     <Products/>
     <Testimonials/>
     <Footer/>
    </div>
  );
}

export default App;
