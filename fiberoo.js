function fib() {
    var fibSequence = [0, 1];
    for (var i = 2; i < 50; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
}
console.log(fib());
function numsToStrings(numbers) {
    return numbers.map(function (num) { return "".concat(num); });
}
function numEvenNums(numbers) {
    return numbers.filter(function (num) { return num % 2 === 0; }).length;
}
console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));
