import input from './input';

function run(program: string) {
    const parsedProgram = program.split("\n").map(it => it.split(' ')).map(([instruction, offset]) => [instruction, parseInt(offset, 10)] as [string, number]);

    let accumulator = 0;
    let index = 0;
    const stack = [];
    
    while(index < parsedProgram.length) {
        stack.push(index);
        const [instruction, argument] = parsedProgram[index];
        let jump = 1;
        switch(instruction) {
            case 'acc':
                accumulator += argument;
                break;
            case 'jmp':
                jump = argument;
                break;
        }
        index += jump;
        if (stack.includes(index)) { throw accumulator }
    }

    return accumulator;
}

try {
    run(input);
} catch(e) {
    console.log('part-1', e);
}

const programVariants = [input];

const lines = input.split("\n");
lines.forEach((line, index) => {
    const [instruction, argument] = line.split(' ');
    if (instruction === 'jmp') {
        const variant = lines.slice();
        variant[index] = `nop ${argument}`;
        programVariants.push(variant.join("\n"));
    } else if (instruction === 'nop') {
        const variant = lines.slice();
        variant[index] = `jmp ${argument}`;
        programVariants.push(variant.join("\n"));
    }
});

programVariants.find(it => {
    try {
        console.log('part-2', run(it));
        return true;
    } catch(e) {
        return false;
    }
});