import React, { ChangeEvent, SyntheticEvent } from 'react';
import './Navibar.css';
import Logo from './Logo.png';

interface NavibarProps {

}

const Navibar: React.FC<NavibarProps> = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Stock App Logo" className="navbar-logo" />

      <div className="navbar-buttons">
        <button className="navbar-button dashboard">
          Dashboard
        </button>
        <button className="navbar-button login">
          Login
        </button>
        <button className="navbar-button signup">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navibar; 