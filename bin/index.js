#!/usr/bin/env node

const yargs = require('yargs');
const { createComponent } = require('./funcs/createComponent');
const createPage = require('./funcs/createPage');

const argv = yargs
  .version('0.1.0')
  .command(['component', 'c'], 'create a new component', {}, createComponent)
  .command(['page', 'p'], 'create a new page', {}, createPage)
  .help().argv;
