import React from 'react';
import ReactDOM from 'react-dom';

import classNames from './index.module.css';

const App = () => <div className={classNames.App}>Hello React</div>;

ReactDOM.render(<App />, document.getElementById('app'));
