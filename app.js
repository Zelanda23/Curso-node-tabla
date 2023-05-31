const { createFlie } = require("./helpers/multiplicar");
const colors = require('colors');
const argv = require("./config/yargs");
 

console.clear();

createFlie(argv.b, argv.l, argv.h)
  .then((nombreArchivo) =>
    console.log(`El archivo ${nombreArchivo.rainbow} a sido creado`)
  )
  .catch((err) => console.log(err));
