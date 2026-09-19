type DnaNucleotide = 'A' | 'C' | 'G' | 'T'
type RnaNucleotide = 'U' | 'G' | 'C' | 'A'

const RNA_BY_DNA: Record<DnaNucleotide, RnaNucleotide> = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

function rnaFor(nucleotide: string): RnaNucleotide {
  const rna = RNA_BY_DNA[nucleotide as DnaNucleotide]

  if (!rna) throw new Error('Invalid input DNA.')

  return rna
}

export function toRna(dnaSequence: string): string {
  return [...dnaSequence].map(rnaFor).join('')
}
