#!/usr/bin/node
const argc = process.argv.lenght;
console.log(argc === 2 ? 'No argument' : argc === 3 ? 'Argument found' : 'Arguments found');
