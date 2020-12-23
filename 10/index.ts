const test = `16
10
15
5
1
11
7
19
6
12
4`;

const test2 = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

const input = `54
91
137
156
31
70
143
51
50
18
1
149
129
151
95
148
41
144
7
125
155
14
114
108
57
118
147
24
25
73
26
8
115
44
12
47
106
120
132
121
35
105
60
9
6
65
111
133
38
138
101
126
39
78
92
53
119
136
154
140
52
15
90
30
40
64
67
139
76
32
98
113
80
13
104
86
27
61
157
79
122
59
150
89
158
107
77
112
5
83
58
21
2
66`;

const parse = (input: string) => input.split("\n").map(it => parseInt(it, 10));

const bag = parse(input);
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