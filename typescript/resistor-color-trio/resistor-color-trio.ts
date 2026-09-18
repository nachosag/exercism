const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const

type Color = (typeof COLORS)[number]

const UNITS = [
  [10 ** 9, 'gigaohms'],
  [10 ** 6, 'megaohms'],
  [10 ** 3, 'kiloohms'],
  [1, 'ohms'],
] as const

export function decodedResistorValue([band1, band2, band3]: Color[]): string {
  const baseValue = COLORS.indexOf(band1) * 10 + COLORS.indexOf(band2)
  const multipler = 10 ** COLORS.indexOf(band3)
  const totalValue = baseValue * multipler

  if (totalValue === 0) return '0 ohms'

  const [divisor, unit] = UNITS.find(([scale]) => totalValue >= scale)!

  return `${totalValue / divisor} ${unit}`
}
