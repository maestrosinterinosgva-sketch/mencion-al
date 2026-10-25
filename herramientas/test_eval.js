const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');
let raw = fs.readFileSync(dataPath, 'utf8');

// Evaluate in sandbox
const sandbox = {};
const fn = new Function('window', raw);
fn(sandbox);

const AL_DATA = sandbox.AL_DATA;
console.log('Successfully loaded AL_DATA:');
console.log('Asignaturas:', AL_DATA.asignaturas.length);
console.log('Entregas:', AL_DATA.entregas.length);
