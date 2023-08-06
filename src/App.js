import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Form1 from './components/form1';
import Form2 from './components/form2';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showForm1, setShowForm1] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
    setShowForm1(false); // Hide Form1 when showing Form2
  };

  const toggleForm1 = () => {
    setShowForm1(!showForm1);
    setShowForm(false); // Hide Form2 when showing Form1
  };

  return (
    <div>
      <div className="Container">
        <Navbar toggleForm={toggleForm} toggleForm1={toggleForm1} />
      </div>
      <div className="secondContainer">
        {showForm ? (
          <Form2 />
        ) : null}
        {showForm1 ? (
          <Form1 />
        ) : null}
      </div>
    </div>
  );
}

export default App;


