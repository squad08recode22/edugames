import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Jogos from './pages/Jogos';
import Cursos from './pages/Cursos';
import GuiaPro from './pages/Guiapro';
import Login from './pages/Login';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';



function App() {
  return (
    
    <Router>
    <Navbar/>
  <div>
    <Routes>
      <Route exact path="/" element= {<Home/>}></Route>
      <Route exact path="/jogos" element= {<Jogos/>}></Route>
      <Route exact path="/cursos" element= {<Cursos/>}></Route>
      <Route exact path="/guia-de-profissoes" element= {<GuiaPro/>}></Route>
      <Route exact path="/login" element= {<Login/>}></Route>
      <Route exact path = "/cadastro" element = {<Cadastro/>}></Route>
     </Routes>
  </div>   
</Router>
      
  );
}

export default App;
