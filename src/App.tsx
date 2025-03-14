import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Info/home';
import Mision from './Info/pages/mision';
import Contactame from './Info/pages/contactos';
import Login from './Info/pages/auth/login';


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
        <Route path="login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;