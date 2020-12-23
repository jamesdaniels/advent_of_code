import rawInput from './input';

const input = rawInput.split("\n").map(it => it.match(/(.+)-(.+) (.): (.+)/));

const part1ValidPasswords = input.filter(([_, min, max, letter, password]) => {
    const letterCount = password.split("").filter((it: string) => it === letter).length;
    return parseInt(min, 10) <= letterCount && letterCount <= parseInt(max, 10);
});

console.log("part-1", part1ValidPasswords.length);

const part2ValidPasswords = input.filter(([_, pos1, pos2, letter, password]) => {
    const atPos1 = password.split("")[parseInt(pos1, 10)-1] === letter;
    const atPos2 = password.split("")[parseInt(pos2, 10)-1] === letter;
    return (atPos1 || atPos2) && !(atPos1 && atPos2);
});

console.log("part-2", part2ValidPasswords.length);