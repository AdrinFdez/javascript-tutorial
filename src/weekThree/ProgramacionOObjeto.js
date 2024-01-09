//Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy= 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy += 10;
    }

    doSomethingFun() {
        this.energy -= 10;
    }
}

//Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork() {
        this.xp += 10;
    }
}

//Code a intern object
function intern() {
    var intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork();
    return intern;
}
console.log(intern());

//Code manager object
function manager() {
    var man = new Worker("Alice", 30, 120, 100, 30);
    man.doSomethingFun();
    return man;
}
console.log(manager());