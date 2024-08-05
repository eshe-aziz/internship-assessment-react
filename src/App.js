import React from 'react';
import './App.css';
import ContactList from './ContactList'; // Adjust the path as needed

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Other components */}
        <ContactList /> {/* This renders your custom ContactList component */}
      </header>
    </div>
  );
}

export default App;
