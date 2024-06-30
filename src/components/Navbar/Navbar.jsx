import React from 'react'
import "./Navbar.css"
import logo from "../../assets/media/logo.png"
import profile_icon from "../../assets/media/profile_img.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="icons">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <p>Children</p>
        <button className="icons">
          <i className="fa-regular fa-bell"></i>
        </button>
        <button className="navbar-profile">
          <img src={profile_icon} alt="" className='profile'/>
          <i className="fa-solid fa-caret-down"></i>
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar
