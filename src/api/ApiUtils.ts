import axios, { AxiosRequestConfig } from 'axios'
import { IrregularVerb } from '../types/IrregularVerb'
import { IrregularVerbRaw } from '../types/IrregularVerbRaw'

export const Data: IrregularVerb[] = []

export const axiosConfigJson: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}

export const initData = async () => {
  try {
    const { data } = await axios.get<IrregularVerbRaw[]>(
      './data/data.json',
      axiosConfigJson
    )

    data.forEach((item) => {
      Data.push({
        infinitive: item.Infinitive,
        simplePast: item['Simple Past'],
        pastParticiple: item['Past Participle'],
        french: item.French
      })
    })
  } catch (err) {
    if (err instanceof Error) console.warn('Error:', err.message)
    else console.error(err)
  }
}

export const getRandomVerb = (): IrregularVerb => {
  const indexRandom = Math.floor(Math.random() * Data.length - 1)

  return Data[indexRandom]
}
