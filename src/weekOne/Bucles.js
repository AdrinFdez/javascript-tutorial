
//Bucle 1
for (var i = 1; i <= 5; i++){
    console.log(i);
}
console.log("Counting completed!\n")

//Bucle 2
for (var i = 5; i >= 1; i--){
    console.log(i);
}
console.log("Countdown finished!\n")

//Bucle 3
var i = 1;
while (i <= 5){
    console.log(i);
    i++;
}
console.log("Counting completed!\n")

//Bucle 4
var i = 5;
while (i >= 1){
    console.log(i);
    i--;
}
console.log("Countdown finished!\n")

//Bucle 5
var i = 2018;
while (i <= 2022){
    console.log(i);
    i++;
}

//Bucles ++1
for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        console.log("Gold medal");
    } else if (i == 2) {
        console.log("Silver medal");
    } else if (i == 3) {
        console.log("Bronze medal");
    } else {
        console.log(i);
    }
}

//Bucles ++2
for (var i = 1; i <= 10; i++) {
    switch (i){
        case 1:
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            console.log(i);
            break;
    }
}
