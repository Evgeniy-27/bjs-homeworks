//1. sleep
function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) { }
}

//2. sum
function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

//3. compareArrays
function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false
    }
    function array(element, index) {
        //console.log(element)
        //console.log(arr2[index])
        if (element !== arr2[index]) {
            return false
        } else return true
    }
    return arr1.every(array);
}
//console.log(compareArrays([8, 9], [6])); // false, разные значения
//console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
//console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
//console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
//console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

//4. memorize
function memorize(fn, limit) {
    let memory = [];

    return function (...args) {
        let search = memory.find(element => compareArrays(element.args, args));
        if (search) {
            return search.result;
        };

        let result = fn(...args);

        memory.push({
            args: args,
            result: result
        });
        // console.log(args);
        // console.log(result);
        if (memory.length > limit) {
            memory.shift();
        }
        //console.log(memory);
        return result;
    }
}
const mSum = memorize(sum, 5); // 5 результатов может хранится в памяти
// console.log(sum(3, 4)); // 7
// console.log(mSum(3, 4)); // 7

// const mSum = memorize(sum, 2);
// mSum(3, 4); // 7
// mSum(1, 3); // 4

const array = [[1, 2, 3, 8], [1, 2, 9], [1, 2, 3, 8], [1, 2, 9], [9, 5, 2, 4]];

function testCase(testFunction, name) {
    console.time(name);

    for (let i = 0; i < 10; i++) {
        array.forEach(function (arrg) {
            testFunction(...arrg);
        })
    };
    console.timeEnd(name);
}
testCase(mSum, 'withMemory');
testCase(sum, 'withoutMemory');