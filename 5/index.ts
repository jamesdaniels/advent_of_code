import rawInput from './input';

const input = rawInput.split("\n");
const rows = Array.from(new Array(128).keys());
const columns = Array.from(new Array(8).keys());

const seatIds = input.map(pass => {
    const row = pass.slice(0, 7).split('').reduce((remaining, it) => {
        if (it === 'F') {
            return remaining.slice(0, remaining.length / 2);
        } else {
            return remaining.slice(remaining.length / 2);
        }
    }, rows)[0];
    
    const column = pass.slice(7, 10).split('').reduce((remaining, it) => {
        if (it === 'L') {
            return remaining.slice(0, remaining.length / 2);
        } else {
            return remaining.slice(remaining.length / 2);
        }
    }, columns)[0];
    
    return row * 8 + column;
})

console.log('part-1', Math.max(...seatIds));

console.log('part-2', seatIds.find(it => !seatIds.includes(it+1) && seatIds.includes(it+2)) + 1);