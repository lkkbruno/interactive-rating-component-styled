import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Rating from '../components/Rating';

function MyRoutes() {
  return <Routes>
      <Route 
        path='/'
        element={<Rating />}
      />
  </Routes>;
}

export default MyRoutes;