function fib(): number[] {
  const fibSequence: number[] = [0, 1];

  for (let i = 2; i < 50; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
  }

  return fibSequence;
}

console.log(fib());

function numsToStrings(numbers: number[]): string[] {
  return numbers.map(num => `${num}`);
}

function numEvenNums(numbers: number[]): number {
  return numbers.filter(num => num % 2 === 0).length;
}

console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));
