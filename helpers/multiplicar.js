const fs = require("fs");

const colors = require('colors');

const createFlie = async (num = 5, listar = false, hsta = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hsta; i++) {
      salida += `${num} x ${i} = ${num * i}\n`;
      consola += `${num} ${'x'.green} ${i} ${'='.green} ${num * i}\n`;
    }

    if ((listar === true)) {
      console.log("=======================".green);
      console.log(`   Tabla del ${num}     `.green);
      console.log("=======================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${num}.txt`, salida);
    return `tabla-${num}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFlie,
};
