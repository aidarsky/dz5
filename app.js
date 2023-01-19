/////////////////////////////
const numbers = [5, 5, 5, 5, 5];

const get = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 1) {
        sum += numbers[i];
    }
    return sum / numbers.length;
};

console.log(get(numbers));


    ////////////////////////////


const string = (str) => {
    let i = 0;
    let result = '';
    while (i < str.length) {
        result = `${str[i]}${result}`;
        i = i + 1;
    }
    return result;
};
console.log(string('анадйА тевирП'))