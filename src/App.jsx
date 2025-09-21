import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './styles.css';

import Service from './pages/Service';
import Blog from './pages/Blog';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/service" element={<Service/>} />
  <Route path="/service/:link" element={<ServiceDetail />} />
  <Route path="/blog" element={<Blog/>} />
      </Routes>
    </Router>
  );
}

export default App;
