import './App.css'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from  "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Myhandles from './pages/Myhandles';
function App() {
  return(
    <>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/myhandles" element={<Myhandles />} />
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App
