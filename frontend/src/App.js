import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

/* Pages */
import Administracao from './components/pages/Administracao/Administracao'
import Avisos from './components/pages/Avisos/Avisos'
import Log from './components/pages/Log/Log'
import Login from './components/pages/Login/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/administracao" element={<Administracao/>}/>
        <Route path="/log" element={<Log/>}/>
        <Route path="/avisos" element={<Avisos/>}/>
        <Route path="/"element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
