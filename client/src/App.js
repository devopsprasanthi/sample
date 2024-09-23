import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make API call to Node.js backend
    axios.get('http://localhost:5000/api/hello')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Prasanthi's World !</h1>
      <h1>Prasanthi is AWESOME!!!</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
