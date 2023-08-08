import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Banner from './components/Banner.js';

function App(){
  return(
    <>
      {/* you forgot to turn on autosave */}
      <Banner />
      <Profile />
    </>
  );
}

export default App;
