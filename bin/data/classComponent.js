module.exports = (name, css) => `import React from 'react';
import classNames from '${css}';

export default class ${name} extends React.Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div className={classNames.${name}}>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
`;
