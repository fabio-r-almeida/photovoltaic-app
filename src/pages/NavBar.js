import React, { Component } from "react";
import './NavBar-files/css/NavBar.css'

class NavBar extends Component {

  
  handle_click(){
    window.location.replace(window.location.pathname);

        }

  render() {
      return (
< >


        <div className="nav__logo" onClick={this.handle_click}> 
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
        
        <span> | </span>
        <span>H</span>
        <span>o</span>
        <span>m</span>
        <span>e</span>
        <span>p</span>
        <span>a</span>
        <span>g</span>
        <span>e</span>

        </div>



</>

      );
  }
}

export default NavBar;
