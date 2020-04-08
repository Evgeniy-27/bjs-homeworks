function getAnimalSound(animal) {
    let animalSound;
    if (animal == undefined) {
        animalSound = null;
    } else {
        animalSound = animal.sound;
    }
    return animalSound;
}

function getAverageMark(marks) {
    let averageMark = 0;
    let average = 0;
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    if (marks.length > 0) {
        average = sum / marks.length;
        averageMark = Math.round(average);
    }
    return averageMark
}

function checkBirthday(birthday) {
    let verdict;
    let now = Date.now();
    let dat = new Date(birthday);
    let birth = +dat;
    let diff = now - birth;
    let age = diff / 31536000000
    //console.log(age);
    //if (age > 18) {
       // verdict = true;
    //} else {
        //verdict = false;
    //}
    //console.log(verdict);

    return age > 18
}