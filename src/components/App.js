import React from "react";
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import {username, city, image} from '../data/user.js'

function App() {
  return (
    <div>
      <NavBar />
      <Home user = {username} cite = {city}/>
      <About img = {image}/>
    </div>
  );
}

export default App;
