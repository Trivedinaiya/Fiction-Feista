import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  {Home} from "./fun.js";
import Book from "./App2.js";
import Aboutt from "./AboutUs.js"
import Contactt from "./Cont.js";
import Navbar from "./Navbar";
import Footer from './footer.js';

 function App1() {
  return ( 
    <div className="App">
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Book /> } />
      <Route path="/AboutUs" element={<Aboutt /> } />
      <Route path="/contact" element={<Contactt />} />
      <Route path="*" element={<h1> PAGE NOT FOUND </h1> } />
    </Routes>
    <Footer/>
    </Router>
    </div>
  );
}
export default App1;