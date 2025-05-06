import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OngoingProjects from './pages/OngoingProjects';
import CompletedProjects from './pages/CompletedProjects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ongoing-projects" element={<OngoingProjects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/completed-projects" element={<CompletedProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
