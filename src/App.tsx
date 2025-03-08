import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Info/home';
import Mision from './Info/pages/mision';

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

      </Routes>
    </Router>
  );
}

export default App;