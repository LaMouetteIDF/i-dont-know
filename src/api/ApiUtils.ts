import axios, { AxiosRequestConfig } from 'axios'
import { IrregularVerb } from '../types/IrregularVerb'
import { IrregularVerbRaw } from '../types/IrregularVerbRaw'
import {GameModesType, GameModsKey} from "../types/GameModesType";

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

export const getVerbFromMods = (mods: GameModesType) => {
  let els: [string, string][] = []
  let include: string[] = []

  const modsTables = Object.entries(mods) as [GameModsKey, boolean][]

  Data.forEach(item => {
    for (const [key, value] of modsTables) {
      if (value) {
        const parsedValue = item[key]
          ?.split(/[|/]/)
          .map(value => value
            .replace(/\(.*\)/, '')
            .trim()
          )

        parsedValue?.forEach(value => {
          if (!include.includes(value)) {
            els.push([value, item.french])
            include.push(value)
          }
        })
      }
    }
  })

  const shuffleArray = (array: unknown[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  shuffleArray(els)

  return els
}
