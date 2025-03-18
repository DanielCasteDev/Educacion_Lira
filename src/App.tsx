import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Info/pages/home';
import Mision from './Info/pages/mision';
import Contactame from './Info/pages/contactos';



function App() {
  return (
    <Router
      future={{
        v7_startTransition: true, 
        v7_relativeSplatPath: true, 
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mision" element={<Mision />} />
        <Route path="contacto" element={<Contactame />} />
  
      </Routes>
    </Router>
  );
}

export default App;