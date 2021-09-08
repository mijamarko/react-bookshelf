import React, { useState } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import LoginForm from './LoginForm'
import DropdownMenu from './Navigation/DropdownMenu';
import AppContent from './AppContent'

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="App">
      <Navigation loggedIn={loggedIn} isOpen={isOpen} setIsOpen={setIsOpen}/>
      { isOpen ? <DropdownMenu  setLoggedIn={setLoggedIn} setIsOpen={setIsOpen} /> : <></>}
      { !loggedIn 
      ? <LoginForm setLoggedIn={setLoggedIn}/> 
      : <AppContent isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
