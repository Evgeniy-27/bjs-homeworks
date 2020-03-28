"use strict";

function getResult(a, b, c) {
  // ax2 + bx + c = 0
  let D = Math.pow(b, 2) - 4 * a * c;
  const x = [];
  if (D === 0) {
    x[0] = ((-b + Math.sqrt(D)) / 2) * a;
  } else if (D > 0) {
    x[0] = ((-b + Math.sqrt(D)) / 2) * a;
    x[1] = ((-b - Math.sqrt(D)) / 2) * a;
  }
  return x;
}

function getAverageMark(marks) {
  let averageMark = 0;
  let sum = 0;
  if (marks.length === 0) {
    averageMark = 0;
  } else if (marks.length > 5) {
    console.log("Количество оценок больше 5");
    marks.splice(5);
  }
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  if (marks.length > 0) {
    averageMark = sum / marks.length;
  }

  return averageMark;
}

function askDrink(name, dateOfBirthday) {
  let yearBirth = dateOfBirthday.getFullYear();
  let yearNow = new Date().getFullYear();
  let result;
  let age = yearNow - yearBirth;
  if (age >= 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
  return result;
}
