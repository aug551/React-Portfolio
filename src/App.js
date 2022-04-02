import './App.css';
import Navigation from './Navbar/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import Home from './Home';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar-container">
          <Navigation />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
