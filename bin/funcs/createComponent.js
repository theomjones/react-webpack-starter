const fs = require('fs');
const util = require('util');
const { titleize } = require('@theomjones/stringlib');

const asyncWriteFile = util.promisify(fs.writeFile);
const asyncCreateDir = util.promisify(fs.mkdir);

exports.createComponent = async input => {
  const name = titleize(input._[1]);
  await asyncCreateDir(`src/components/${name}`);
  const moduleName = `${name}.js`;
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
  console.log(`\nComponent "${name}" build in src/components/${name}/`);
};
