class Weapon {
    constructor({name, attack, durability, range}) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurabikity = this.durability;
    }
    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }
    getDamage() {
        if (this.durability === 0) {
            return 0;
        } else if (this.durability >= this.startDurabikity * 0.3) {
            return this.attack;
        } else {
            return this.attack / 2;
        }
    }
    isBroken() {
        if (this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }
}
// const sword = new Weapon({
//   name: 'Старый меч',
//   attack: 20,
//   durability: 10,
//   range: 1,
// });

// const arm = new Weapon({
//   name: 'Рука',
//   attack: 1,
//   durability: Infinity,
//   range: 1,
//  });
class Arm extends Weapon {
    constructor() {
      super({});
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1; 
        this.startDurabikity = this.durability;
    }
};
// const bow = new Weapon({
//   name: 'Лук',
//   attack: 10,
//   durability: 200,
//   range: 3,
// });
class Bow extends Weapon {
    constructor() {
        super({});
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
       this.startDurabikity = this.durability;
    }
};
// const sword = new Weapon({
//   name: 'Меч',
//   attack: 25,
//   durability: 500,
//   range: 1,
// });
class Sword extends Weapon {
    constructor() {
        super({});
        this.name = 'Меч';
        this.attack = 25;
        this.durability = 500;
        this.range = 1;
        this.startDurabikity = this.durability;
    }
};
// const knife = new Weapon({
//   name: 'Нож',
//   attack: 5,
//   durability: 300,
//   range: 1,
// });
class Knife extends Weapon {
    constructor() {
        super({});
        this.name = 'Нож';
        this.attack = 5;
        this.durability = 300;
        this.range = 1;
        this.startDurabikity = this.durability;
    }
};
// const staff = new Weapon({
//   name: 'Посох',
//   attack: 8,
//   durability: 300,
//   range: 2,
//   });
class Staff extends Weapon {
    constructor() {
        super({});
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.range = 2;
        this.startDurabikity = this.durability;
    }
};
// const longBow = {
//   name: 'Длинный лук',
//   attack: 15,
//   durability: bow.durability,
//   range: 4,
// };
class LongBow extends Bow {
    constructor() {
        super({});
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
        this.startDurabikity = this.durability;
    }
};
// const axe = {
//   name: 'Секира',
//   attack: 27,
//   durability: 800,
//   range: sword.range,
// };
class Axe extends Sword {
    constructor() {
        super({});
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
        this.startDurabikity = this.durability;
    }
};
// const stormStaff = {
//   name: 'Посох Бури',
//   attack: 10,
//   durability: staff.durability,
//   range: 3,
// };
class StormStaff extends Staff {
    constructor() {
        super({});
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
        this.startDurabikity = this.durability;
    }
};


//Задача 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {

        if (this.grades.hasOwnProperty([subject]) == false) {
            this.grades[subject] = [];
        };
        if (grade === 0 || grade > 5 || typeof grade !== 'number') {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        } else {
            this.grades[subject].push(grade);
        }
        return this.grades[subject].length;
    };

    getAverageBySubject(subject) {
        let averageBySubject = 0;
        if (this.grades.hasOwnProperty([subject]) == false) {
            return 0;
        }
        for (let i = 0; i < this.grades[subject].length; i++) {
            averageBySubject += this.grades[subject][i];
        }
        return averageBySubject / this.grades[subject].length;
    };

    getTotalAverage() {
        let totalAverage = 0;
        for (let subject in this.grades) {
            totalAverage += this.getAverageBySubject([subject]);
        };

        return totalAverage / Object.keys(this.grades).length;
    };

}
