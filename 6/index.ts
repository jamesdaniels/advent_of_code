import rawInput from './input';

const input = rawInput.split("\n\n").map(party => party.split("\n").map(individual => individual.split('')));

const answeredByAny = input.map(it => [].concat(...it)).map(it => Array.from(new Set(it)));

console.log('part-1', answeredByAny.reduce((acc, it) => acc + it.length, 0));

const answeredByAll = input.map(party => party[0].filter(answer => party.every(individual => individual.includes(answer)))).map(it => [].concat(...it)).map(it => Array.from(new Set(it)));

console.log('part-2', answeredByAll.reduce((acc, it) => acc + it.length, 0));
