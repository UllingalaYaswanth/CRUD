import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreateStudent from './CreateStudent';
import UpdateEmployee from './UpdateEmployee';
import Login from './Login';
import Practice from './Practice';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/create' element={<CreateStudent />} />
        <Route path='/home/update/:id' element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
