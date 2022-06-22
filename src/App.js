import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'
import Employees from './pages/Employees';
import Upload from './pages/Upload';
import Error404 from './pages/404';
import StateContext from './state/stateContext';
import Layout from './components/Layout';
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);
  // const [upload, uploadFuntion] = useState([]);

  return (
    <StateContext.Provider 
      value={{employees, setEmployees}}
    >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exac path='/' element={<Home/>} />
            <Route exac path='/home' element={<Home/>} />
            <Route exac path='/login' element={<Login/>} />
            <Route exac path='/employees' element={<Employees/>} />
            <Route exac path='/upload' element={<Upload/>} />
            <Route exac path='/404' element={<Error404/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </StateContext.Provider>
  );
}

export default App;
