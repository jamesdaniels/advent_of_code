import rawInput from './input';

const input =  rawInput.split("\n").map(it => parseInt(it, 10));

const PREAMBLE_SIZE = 25;

const firstWithoutMatchingSum = input.slice(PREAMBLE_SIZE).find((it, index) => {
    const prior = input.slice(index, index + PREAMBLE_SIZE);
    const matchingSum = prior.some((first, index) =>
        prior.slice(index).some(second => first + second === it)
    );
    return !matchingSum;
});

console.log('part-1', firstWithoutMatchingSum);

input.find((_, index) => {
    const contiguousRanges = Array.from(new Array(input.length - index).keys()).slice(1).map(length =>
        input.slice(index, index + length)
    );
    const matchingRange = contiguousRanges.find(it =>
        it.reduce((acc, it) => acc + it, 0) === firstWithoutMatchingSum
    );
    if (matchingRange) {
        console.log('part-2', Math.max(...matchingRange) + Math.min(...matchingRange));
        return true;
    }
    return false;
});
