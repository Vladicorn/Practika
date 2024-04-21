import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Admin from './views/Admin';
import Calc from './views/Calc';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/Calc/:id' element={<Calc/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
