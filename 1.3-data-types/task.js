function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";

    if(isNaN(percent)) {
        return `Параметр процентная ставка содержит неправильное значение`
    } if(isNaN(contribution)) {
        return `Параметр начальный взнос содержит неправильное значение`
    } if(isNaN(amount)) {
        return `Параметр общая стоимость содержит неправильное значение`
    } if(isNaN(date)) {
        return `Введите дату`
    } 
    let bodyLoan = amount - contribution;
    let today = new Date();
    let mounths = (date.getFullYear() - today.getFullYear()) * 12 + (date.getMonth()) - (today.getMonth());
    let percentMonth = percent / 12 / 100;
    let payMounth = bodyLoan * (percentMonth + percentMonth / (Math.pow(1 + percentMonth, mounths) - 1));
    let totalLoans = payMounth * mounths;
    let totalAmount = Number(totalLoans.toFixed(2));
    
    return totalAmount;
}

function getGreeting(name) {
    if (name === undefined || name === null || name === "") {
        greeting = `Привет, мир! Меня зовут Аноним`;
      } else {
        greeting = `Привет, мир! Меня зовут ${name}`;
      }
      //greeting = String(title);

    return greeting;
}
