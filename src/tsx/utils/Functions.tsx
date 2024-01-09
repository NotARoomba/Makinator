export function isPrime(num: number) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export function getFactors(num: number) {
  let factors = 0;
  for (let i = 1; i <= num; i++) {
    if (Number.isInteger(num / i)) factors++;
  }
  return factors;
}
