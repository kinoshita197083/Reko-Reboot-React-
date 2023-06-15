import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/Home';
import AboutPage from './Pages/About/About';
import AnalysePage from './Pages/Analyse/Analyse';
import QueryPage from './Pages/Query/Query';
import Layout from './Layout';
// import LoginPage from './Pages/Auth/Login';
// import RequireAuth from './RequireAuth';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public Routes */}
        {/* <Route path='/login' element={<LoginPage />} /> */}

        {/* Private Routes */}
        {/* <Route element={<RequireAuth />}> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/analyse' element={<AnalysePage />} />
        <Route path='/query' element={<QueryPage />} />
      </Route>
      {/* </Route> */}
    </Routes>
  );
}

export default App;
