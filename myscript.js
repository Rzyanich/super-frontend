'use strict';

const fs = require('fs');
const text = fs.readFileSync('myscript.js', 'utf-8');
console.log(text);