
function add(a, b, c) {
    return a + b + c;
}

function add(a, b) {
    // console.log('this is  running')
    return a + b;
}

let sub = function (a, b) {
    return a - b;
}

let multiply = (a, b) => {
    return a * b;
}
console.log('add3', add(4, 3, 3));
console.log('add2', add(12, 50));
console.log('sub', sub(60, 50));
console.log('Multiply', multiply(6, 5));
//hoisting and scoping

if (true) {
    txt = "block"
    // console.log('txt', txt)
}
console.log('txt', txt)
var txt;