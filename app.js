import {suma, resta} from "./sumaResta.js";
import {multiplicacion, division} from "./multiplicacionDivision.js";
const a = 10, b = 2;
const sumaAB = suma(a,b);
const restaAB = resta(a,b);
const multiplicacionAB = multiplicacion(a,b);
console.log(`Suma: ${sumaAB}`);
console.log(`Resta: ${restaAB}`);
console.log(`Multiplicación: ${multiplicacionAB}`);
try {
    const divisionAB = division(a,b);
    console.log(`División: ${divisionAB}`);
} catch (e) {
    console.log(`Error en división: "${e.message}"`)
}
