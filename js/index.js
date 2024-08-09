var data = [4, 5, 2, 52, "Word", true];
data[0] = false;
console.log(data.length);

var matrix = [[5, 6],
    ["World", false],
    [true, 5.9, 0]
];

matrix[0][0] = 60;
console.log(matrix[2][1]);
