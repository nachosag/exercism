export function isLeap(year: number): boolean {
  if (!isDivisible(year, 4)) return false
  else if (!isDivisible(year, 100)) return true
  else if (!isDivisible(year, 400)) return false

  return true
}

function isDivisible(n: number, x: number): boolean {
  return n % x === 0
}