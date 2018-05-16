#!/usr/bin/env node

const yargs = require('yargs');
const { createComponent } = require('./funcs/createComponent');

const argv = yargs
  .version('0.1.0')
  .command(['component', 'c'], 'create a new component', {}, createComponent)
  .help().argv;
