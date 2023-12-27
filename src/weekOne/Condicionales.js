// Condicionales
//Edad
var edad = 10;
if(edad>=65) {
    console.log("Usted obtiene sus ingresos de su pensión\n");
} else if (edad<=65 && edad>=18) {
    console.log("Cada mes recibe un salario\n");
} else if (edad<18) {
    console.log("Obtiene una asignación\n");
} else {
    console.log("El valor de la variable edad no es numérico\n");
}


//Días de la semana
var day = "Domingo";
switch (day) {
    case "Lunes":
        console.log("Grocery Shopping\n");
        break;
    case "Martes":
        console.log("Cleaning\n");
        break;
    case "Miércoles":
        console.log("Go to work\n");
        break;
    case "Jueves":
        console.log("Birthday\n");
        break;
    case "Viernes":
        console.log("Watch OT\n");
        break;
    case "Sábado":
        console.log("Go shopping\n");
        break;
    case "Domingo":
        console.log("Resting\n");
        break;
    default:
        console.log("There is no such day\n");
        break;
}