import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/routes';

import 'normalize.css';

// Global App CSS
import classNames from './index.css';

const App = () => (
  <div className={classNames.App}>
    <Routes />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
