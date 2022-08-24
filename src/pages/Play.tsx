import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getRandomVerb } from '../api/ApiUtils'
import { IrregularAudioVerb } from '../components/TableIrregularVerb'
import { textToSpeech } from '../functions/textToSpeech'
import { validResponse } from '../functions/validResponse'
import { IrregularVerb } from '../types/IrregularVerb'

const Play = () => {
  const [myVerb, setMyVerb] = useState<string>('')
  const [verb, setVerb] = useState<IrregularVerb>(getRandomVerb())
  const [error, setError] = useState<boolean>(false)

  const onChangeMyVerb = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setMyVerb(target.value)
  }

  const onVerifMyVerb = () => {
    const isOk = validResponse(myVerb, verb.french)
    setError(true)

    if (!isOk) return

    console.log('Great!')
    setVerb(getRandomVerb())
    setMyVerb('')
    setError(false)
  }

  useEffect(() => {
    console.log(verb.french)
    textToSpeech(verb.infinitive)
  }, [verb])

  useEffect(() => {
    setError(false)
  }, [myVerb])

  return (
    <div className="grid place-content-center">
      <div>
        <h3 className="text-center">Play</h3>

        <h4 style={{ margin: '1rem 0' }}>
          <IrregularAudioVerb word={verb.infinitive} />
        </h4>

        <TextField
          error={error}
          value={myVerb}
          onChange={onChangeMyVerb}
          onKeyDown={(event) => event.code === 'Enter' && onVerifMyVerb()}
          helperText={error && 'Incorrect verb.'}
        />

        <Button onClick={onVerifMyVerb} size="large">
          Send!
        </Button>
      </div>
    </div>
  )
}

export default Play
