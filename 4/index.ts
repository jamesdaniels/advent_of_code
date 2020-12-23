import rawInput from './input';

const input = rawInput.split('\n\n').map(it => it.split(/\s/).reduce((acc, it) => (acc[it.split(':')[0]!] = it.split(':')[1], acc), {} as Record<string, any>));

const requiredFields: [string, (it:string) => boolean][] = [
    ['byr', it => !!it && parseInt(it, 10) >= 1920 && parseInt(it, 10) <= 2002],
    ['iyr', it => !!it && parseInt(it, 10) >= 2010 && parseInt(it, 10) <= 2020],
    ['eyr', it => !!it && parseInt(it, 10) >= 2020 && parseInt(it, 10) <= 2030],
    ['hgt', it => !!it && (!!it.match(/^\d+cm$/) && parseInt(it, 10) >= 150 && parseInt(it, 10) <= 193 || !!it.match(/^\d+in$/) && parseInt(it, 10) >= 59 && parseInt(it, 10) <= 76)],
    ['hcl', it => !!it && !!it.match(/^#[0-9a-f]{6}$/)],
    ['ecl', it => !!it && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(it)],
    ['pid', it => !!it && !!it.match(/^\d{9}$/)],
    ['cid', it => !!it]
];

const part1ValidPassports = input.filter(passport => {
    return requiredFields.every(([field]) => field == 'cid' || !!passport[field]);
});

console.log('part-1', part1ValidPassports.length);

const part2ValidPassports = input.filter(passport => {
    return requiredFields.every(([field, test]) => field == 'cid' || test(passport[field]));
});

console.log('part-2', part2ValidPassports.length);