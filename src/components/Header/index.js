import React from 'react';
import classNames from './Header.css';
import { Link } from 'react-router-dom';

const Header = props => (
  <div className={classNames.Header}>
    <div>
      <Link to="/">Home</Link>
    </div>
    <div>
      <Link to="/about">About</Link>
    </div>
  </div>
);

export default Header;
