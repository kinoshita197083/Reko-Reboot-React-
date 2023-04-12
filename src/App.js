import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import NavItem from './Components/Navbar/NavItems/NavItems';
import Button from './Components/Button/Button'

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar>
          <NavItem icon="About" page="/" />
          <NavItem icon="Analyse" page="/" />
          <NavItem icon="Query" page="/" />
          <NavItem icon="Manual" page="/" />
          {/* <Button icon="Manual" page="/" /> */}
        </Navbar>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
