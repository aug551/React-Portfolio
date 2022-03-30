import './App.css';
import Navigation from './Navbar/Navigation';
import Content from './Content/Content'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import About from './About/About';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar-container">
          <Navigation />
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
