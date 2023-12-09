import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginContainer from '../login/LoginContainer';
import './Header.css';

const Header = ({facade, setUserContext}) => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav-menu">
        <NavLink to="/" exact="true" className={({isActive}) => (isActive ? "active" : 'none')}>
          Home
        </NavLink>
        <NavLink to="/photos" className={({isActive}) => (isActive ? "active" : 'none')}>
          Photos
        </NavLink>
        <NavLink to="/articles" className={({isActive}) => (isActive ? "active" : 'none')}>
          Articles
        </NavLink>
        <LoginContainer facade={facade} setUserContext={setUserContext} />
      </nav>
    </header>
  );
};

export default Header;
