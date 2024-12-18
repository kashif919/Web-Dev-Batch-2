function myDisplayer( some ) {
    console.log("sum", some);
}
function myCalculator(num1, num2, cb) {
    console.log("sun function called")
    let sum = num1 + num2;
    cb (sum);
}
myCalculator(5, 5, myDisplayer);