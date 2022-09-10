function validSolution(array) {
    const copy1 = [...array.map(innerArr => [...innerArr])];
    const copy2 = [...array.map(innerArr => [...innerArr])];
    const copy3 = [...array.map(innerArr => [...innerArr])];
    const checks = [
        checkRows(copy1),
        checkColumns(copy2),
        checkBoxes(copy3)
    ];
    return checks.every(check => check);
}

function range(start, size) {
    return [...Array(size).keys()].map(i => i + start);
}

function sequenceChecker(sequence) {
    const validSequence = range(1, 9);
    return sequence.every((item, i) => item === validSequence[i]);
}

function checkRows(array) {
    let sorted = array.map(innerArr => innerArr.sort());
    return sorted.every(innerArr => sequenceChecker(innerArr));
}

function checkColumns(array) {
    let columnArray = [[], [], [], [], [], [], [], [], []];
    array.forEach(innerArr => innerArr.forEach((item, i) => columnArray[i].push(item)));
    return checkRows(columnArray);
}

function checkBoxes(array) {
    let boxesArray = [];
    for (let i = 0; i <= 6; i += 3) {
        for (let j = 0; j <= 6; j += 3) {
            makeBox(array, i, j);
        }
    }
    return checkRows(boxesArray);
}

function makeBox(array, firstRow, firstCol) {
    let box = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            box.push(array[firstRow + i][firstCol + j]);
        }
    }
    return box;
}


let validArray = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

let invalidArray = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
];

console.log(validSolution(validArray));
console.log(validSolution(invalidArray));