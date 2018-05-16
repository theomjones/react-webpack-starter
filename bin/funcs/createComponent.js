const fs = require('fs');
const util = require('util');
const { titleize } = require('@theomjones/stringlib');

const {
  logError,
  logSuccess,
  asyncWriteFile,
  asyncCreateDir
} = require('../helpers');

exports.createComponent = async input => {
  const name = titleize(input._[1]);
  try {
    await asyncCreateDir(`src/components/${name}`);
    const moduleName = `index.js`;
    const cssName = `${name}.css`;

    if (input.dumb) {
      asyncWriteFile(
        `src/components/${name}/${moduleName}`,
        require('../data/dumbComponent')(name, cssName)
      );
    } else {
      asyncWriteFile(
        `src/components/${name}/${moduleName}`,
        require('../data/classComponent')(name, cssName)
      );
    }
    await asyncWriteFile(
      `src/components/${name}/${cssName}`,
      require('../data/css')(name)
    );
    logSuccess(`Component "${name}" build in src/components/${name}/`);
  } catch (error) {
    if (error.code === 'EEXIST') {
      logError('Component already exists');
    }
  }
};
