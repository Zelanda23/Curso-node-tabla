const { describe } = require("yargs");

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe:'Es la base de la tabla de multiplicar'
  })
  .option("l",{
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'Mustra la tabla en cosola'
    
    })
    .option("h", {
      alias: "hasta",
      type: "number",
      default: false,
      describe:'Hasta que numero se hace la multiplicacion'
    })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw new Error("La base debe de ser un número!!");
    } else {
      return true;
    }
  }).argv;




  module.exports = argv;