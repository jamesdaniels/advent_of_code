import { readFile } from 'fs/promises';

const input = (await readFile('input/day1.txt')).toString();

const sortedTotalCalories = input
    .split("\n\n")
    .map(calories => calories
        .split("\n")
        .map(Number)
        .reduce((sum, val) => sum + val)
    )
    .sort();

console.log('part 1', sortedTotalCalories.at(-1));

console.log('part 2', (sortedTotalCalories.at(-1)! + sortedTotalCalories.at(-2)! + sortedTotalCalories.at(-3)!));
