import { readFile } from 'fs/promises';

const input = (await readFile('input/day2.txt')).toString();

// A X . rock + 1
// B Y . paper + 2  
// C Z . scissors + 3
// + 0 lost
// + 3 draw
// + 6 won

const charCodeA = 'A'.charCodeAt(0);
const charCodeX = 'X'.charCodeAt(0);

const pointsPerRound = input.split("\n")
    .map(round => {
        const [ playA, playB ] = round.split(' ');
        let codeA = playA.charCodeAt(0) - charCodeA + 1;
        let codeB = playB.charCodeAt(0) - charCodeX + 1;
        if (codeA === codeB) {
            return codeB + 3;
        } else if (
            codeB === 1 && codeA === 3 || // rock beats scissors 
            codeB === 2 && codeA === 1 || // paper beats rock
            codeB === 3 && codeA === 2    // scissors beat paper
        ) {
            return codeB + 6;
        }
        return codeB;
    });

console.log('part 1', pointsPerRound.reduce((sum, curr) => sum + curr));

// A . rock + 1
// B . paper + 2  
// C . scissors + 3
// X . loose + 0
// Y . draw + 3
// Z . win + 6

const pointsPerRound2 = input.split("\n")
    .map(round => {
        const [ playA, strategy ] = round.split(' ');
        let codeA = playA.charCodeAt(0) - charCodeA + 1;
        if (strategy === 'Y') {
            return 3 + codeA;
        } else if (strategy === 'Z') {
            return (codeA % 3) + 1 + 6;
        } else {
            if (codeA === 1) return 3;
            if (codeA === 2) return 1;
            if (codeA === 3) return 2;
        }
    });

console.log('part 2', pointsPerRound2.reduce((sum, curr) => sum + curr));
