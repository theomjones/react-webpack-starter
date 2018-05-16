const { titleize } = require('@theomjones/stringlib');
const {
  logError,
  logSuccess,
  asyncWriteFile,
  asyncCreateDir
} = require('../helpers');

module.exports = async input => {
  const pageName = titleize(input._[1]);
  try {
    await asyncCreateDir(`src/pages/${pageName}`);
    await asyncWriteFile(
      `src/pages/${pageName}/index.js`,
      `import React from 'react';

export default () => <div>${pageName} page.</div>;
    `
    );
    logSuccess(`Added page: ${pageName}.`);
  } catch (error) {
    return error.code === 'EEXIST' && logError('Page already exists');
  }
};
