export function format(name: string, order: number): string {
  const ORDINAL_NUMBER_WORDS = ['th', 'st', 'nd', 'rd']
  const onesDigit = order % 10
  const tensDigit = Math.trunc((order % 100) / 10)
  let suffix = ORDINAL_NUMBER_WORDS.at(onesDigit)

  if (tensDigit === 1 || !suffix) {
    suffix = ORDINAL_NUMBER_WORDS.at(0)
  }

  return `${name}, you are the ${order}${suffix} customer we serve today. Thank you!`
}
