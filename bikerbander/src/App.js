import React, { Component}  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom';
import { Store } from './Store/Store'
import { Login } from './NavBar/Login'
import { Register } from './NavBar/Register'
import { AuthProvider } from './Context/AuthContext'
import { NotFound } from './LandingPage/NotFound'
import {AddProducts} from './Products/addProducts'

function App() {
  return (
    <div >
      <AuthProvider>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='bikerbander' element={<LandingPage />} />
          <Route path='store' element={<Store />}/>
          <Route path='login' element={<Login />} />
          <Route path="/login/register" element={<Register />} />
          <Route path='register' element={<Register />} />
          <Route path='add-products' element={<AddProducts/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </AuthProvider>
    </div>
    );
}

export default App;
