import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import NavItem from './Components/Navbar/NavItems/NavItems';
import { navlinks } from './Components/Navbar/navlinks'
import HomePage from './Pages/Home/Home';
import AboutPage from './Pages/About/About';
import AnalysePage from './Pages/Analyse/Analyse';
import QueryPage from './Pages/Query/Query';

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
          <Route path='/about' element={<AboutPage />} />
          <Route path='/analyse' element={<AnalysePage />} />
          <Route path='/query' element={<QueryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
