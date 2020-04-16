class AlarmClock {
    constructor(timerId = null, alarmCollection = []) {
        this.timerId = timerId;
        this.alarmCollection = alarmCollection;
    }
    addClock(time, callback, id) {
        if (id === undefined) {
            console.error("Параметр id не передан!");
            return;
        }
        if (this.alarmCollection.find((item) => item.id === id)) {
            console.error(`Будильнтк с таким id ${id} уже существует!`);
            return;
        }
        this.alarmCollection.push({
            id: id,
            time: time,
            callback: callback,
        });
    }
    removeClock(id) {
    const deiBellIndex = this.alarmCollection.length;

    this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id);

    return deiBellIndex !== this.alarmCollection.length ? true : false;
  }
    getCurrentFormattedTime() {
        const nowDate = new Date();
        let nowHour = nowDate.getHours() < 10 ? "0" + nowDate.getHours() : nowDate.getHours();
        let nowMinutes = nowDate.getMinutes() < 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();

        return `${nowHour}:${nowMinutes}`;
    }
    start() {

        const nowTime = this.getCurrentFormattedTime;

        function checkClock(bell) {
            if (bell.time === nowTime()) {
                bell.callback();
            }
        }

        if (this.timerId === undefined) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach((item) => checkClock(item));
            }, 1000);
        }
    }
    stop() {
        if (this.timerId) {
            clearInterval();
            this.timerId = 0;
        }
    }
    printAlarms() {
        console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(item => {
            console.log(`Будильник №${item.id} заведён на ${item.time}`);
        });
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
// testCase
function testCase() {
    let phoneAlarm = new AlarmClock();
    phoneAlarm.addClock("20:00", () => console.log("Скоро спать"), 1);
    phoneAlarm.addClock("20:01", () => {console.log("Пора готовиться ко сну!");
    phoneAlarm.removeClock(2)},2);
    phoneAlarm.addClock("20:01", () => console.log("Иди умываться"));//отсутствует id
    phoneAlarm.addClock("20:02", () => {
        console.log("Иди спать, завтра рано на работу!");
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
        },3);
    phoneAlarm.addClock("21:05", () => console.log("Иди спать, завтра рано на работу!"),1);//существующий id
    phoneAlarm.printAlarms();
    phoneAlarm.start();
}

testCase();