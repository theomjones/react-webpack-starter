module.exports = (name, css) => `import React from 'react';
import classNames from './${css}';

const ${name} = props =>(
  <div className={classNames.${name}}>
    {props.children}
  </div>
);

export default ${name};
`;
