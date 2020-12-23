import rawInput from './input';

const input = rawInput.split('.').map(it => {
    // no matchAll
    const match: any = it.match(/(?<color>.+) bags contain (?<more>.+)/);
    if (match) {
        return {
            color: match.groups.color,
            contains: match.groups.more.split(',').map(it => it.match(/(?<count>\d) (?<color>.+) bag/)?.groups).filter(it => !!it),
        };
    };
}).filter(it => !!it);

let combined: string[] = input.filter(it => !!it.contains.find(it => it.color === 'shiny gold')).map(it => it.color);

while(true) {

    const nextPass = combined.map(color => input.filter(it => !!it.contains.find(it => it.color === color)).map(it => it.color));
    const nextCombined = Array.from(new Set(combined.concat(...nextPass)));

    if (combined.length === nextCombined.length) {
        break;
    }

    combined = nextCombined;

}

console.log('part-1', combined.length);

const countBags = (color: string) => input.find(it => it.color === color).contains.reduce((acc, bag) =>
    acc + parseInt(bag.count, 10) + parseInt(bag.count, 10) * countBags(bag.color),
    0
);

console.log('part-2', countBags('shiny gold'));