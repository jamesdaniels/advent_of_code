
import input from './input';

const bag = input.split("\n").map(it => parseInt(it, 10));
const builtIn = Math.max(...bag) + 3;
const allSorted = [0, ...bag.sort((a,b) => a - b), builtIn];

const pairwise =  Array.from(new Array(allSorted.length - 1).keys()).map((index) => allSorted.slice(index, index+2));
const pairDifference = pairwise.map(([a,b]) => b-a);
const differencesOfOne = pairDifference.filter(it => it === 1).length;
const differencesOfThree = pairDifference.filter(it => it === 3).length;

console.log('part-1', differencesOfOne * differencesOfThree);

function permutations(n: number) {
    // if we're over three drop one, since we can't jump over 3
    return Math.pow(2,n-1) - ((n > 3) ? n - 3 : 0);
}

// probably a cleaner way to calculate this, meh...
const batchesOfOnes: number[] = [];
let currentStreak = 0;
pairDifference.map(it => {
    if (it === 1) {
        currentStreak += 1;
    } else {
        if (currentStreak) { batchesOfOnes.push(currentStreak) }
        currentStreak = 0;
    }
});

console.log('part-2', batchesOfOnes.reduce((acc, it) => acc * permutations(it), 1));