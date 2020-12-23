import rawInput from './input';

const input = rawInput.split("\n");

const slopes = [[1,1], [3,1], [5,1], [7,1], [1,2]];

const treesPerSlope = slopes.map(([right, down]) => input.filter((configuration, index) => {
    if (index % down! > 0) { return false; }
    return configuration.split("")[index/down!*right! % configuration.length] === "#";
}).length);

console.log('part-1', treesPerSlope[1]);
console.log('part-2', treesPerSlope.reduce((acc, v) => acc * v, 1));