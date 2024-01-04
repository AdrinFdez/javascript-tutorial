//Creación de matrices y objetos
var ropa = [];
ropa.push("Sudadera");
ropa.push("Camiseta");
ropa.push("Pantalón corto");
ropa.push("Calzoncillos");
ropa.push("Calcetines");

//console.log("Cadena Inicial");
//console.log(ropa);

ropa.pop();
//console.log("\nCadena con POP");
//console.log(ropa);

ropa.push("Gorro");
//console.log("\nNuevo elemento en cadena");
//console.log(ropa);

//console.log("\nTercer Elemento de la cadena");
console.log(ropa[2]);


var favCar = {};
favCar.Color = "Verde";
console.log("\n\nAñadir propiedad a objeto");
console.log(favCar);

favCar.Convertible = true;
console.log("\n\nAñadir propiedad Booleana");
console.log(favCar);


favCar["Type"] = "Camaro";
console.log("\n\nAñadir propiedad con corchetes");
console.log(favCar);