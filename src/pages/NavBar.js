import React, { Component } from "react";
import './NavBar-files/css/NavBar.css'

class NavBar extends Component {
  render() {
      return (
        
< >
<nav className="nav">
    <div className="nav__elements">
        <div className="nav__logo"> 
        <span>P</span>
        <span>h</span>
        <span>o</span>
        <span>t</span>
        <span>o</span>
        <span>v</span>
        <span>o</span>
        <span>l</span>
        <span>t</span>
        <span>a</span>
        <span>i</span>
        <span>c</span>
        </div>
        <div className="nav__cart" ><form action="/"><input className="nav_button" type="submit" value="Home" /></form></div>
        <div className="nav__cart" ><form action="/data_entry"><input className="nav_button" type="submit" value="Data Entry" /></form></div>
    </div>
</nav>


</>

      );
  }
}

export default NavBar;
