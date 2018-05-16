import React from 'react';
import classNames from './Layout.css';

import Header from '../components/Header';

const Layout = props => (
  <div className={classNames.Layout}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
