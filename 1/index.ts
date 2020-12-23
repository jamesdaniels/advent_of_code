import rawInput from './input';

const input = rawInput.split("\n").map(it => parseInt(it, 10));

const firstNumber = input.find(it => input.includes(2020 - it));

if (firstNumber) {
    const secondNumber = 2020 - firstNumber;
    console.log('part-1', firstNumber * secondNumber);
}

input.find((firstNumber, firstIndex) => {
    const secondNumber = input.slice(firstIndex+1).find((secondNumber, secondIndex) => input.slice(secondIndex+1).includes(2020 - secondNumber - firstNumber));
    if (secondNumber) {
        const thirdNumber = 2020 - secondNumber - firstNumber;
        console.log("part-2", firstNumber  * secondNumber * thirdNumber);
        return true;
    }
    return false;
})