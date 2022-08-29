import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Skills from './routes/Skills';
import Projects from './routes/Projects';
import Contact from './routes/Contact';

function App() {
  return (
    <Routes>
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
