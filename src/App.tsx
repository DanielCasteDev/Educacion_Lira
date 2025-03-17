import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Info/pages/home';
import Mision from './Info/pages/mision';
import Contactame from './Info/pages/contactos';
import Login from './Info/pages/auth/login';
import Olvidaste from './Info/pages/auth/olvidaste';
import Admin from './admin/dash_ad';
import Registro from './Info/pages/auth/registro';
import New_hijo from './papas/pages/new_hijo';


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
        <Route path="olvidaste" element={<Olvidaste />} />
        <Route path="registro" element={<Registro />} />
        <Route path="new_hijo" element={<New_hijo />} />


        <Route path="admin" element={<Admin />} />

      </Routes>
    </Router>
  );
}

export default App;