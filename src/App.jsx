
import React from 'react';
import { listingsData } from './data';
import Listing from './Listing';
import './App.css'; 

function App() {
  return (
    <div>
      <h1>Список предложений</h1>
      <Listing items={listingsData} />
    </div>
  );
}

export default App;