import { IrregularVerb } from '../types/IrregularVerb'
import { IrregularVerbRaw } from '../types/IrregularVerbRaw'

export const Data: IrregularVerb[] = []

export async function initData() {
  const res: IrregularVerbRaw[] = await fetch('/data/data.json')
    .then((res) => res.json())
  res.forEach(item => {
    Data.push({
      infinitive: item.Infinitive,
      simplePast: item['Simple Past'],
      pastParticiple: item['Past Participle'],
      french: item.French
    })
  })
}