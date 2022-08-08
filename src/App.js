import React from 'react';
import './App.css';
import Form from "./components/Form"
import Navbar from './components/NavBar';
import data from './data';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
    </div>
  );
}

export default App;
