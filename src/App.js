import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import NavItem from './Components/Navbar/NavItems/NavItems';
import { navlinks } from './Components/Navbar/navlinks'
import HomePage from './Pages/Home/Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar>
          {navlinks.map((link) => {
            return (
              <NavItem
                icon={link.icon}
                page={link.page}
                type={link.type}
                key={link.id}
              />
            )
          })}
        </Navbar>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
