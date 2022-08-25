import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getRandomVerb } from '../api/ApiUtils'
import { IrregularAudioVerb } from '../components/IrregularAudioVerb'
import { textToSpeech } from '../functions/textToSpeech'
import { validResponse } from '../functions/validResponse'
import { IrregularVerb } from '../types/IrregularVerb'

const Play = () => {
  const [myVerb, setMyVerb] = useState<string>('')
  const [verb, setVerb] = useState<IrregularVerb>(getRandomVerb())
  const [counterOfVerbs, setCounterOfVerbs] = useState<number>(0)

  const [error, setError] = useState<boolean>(false)

  const onChangeMyVerb = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setMyVerb(target.value)
  }

  const onVerifMyVerb = () => {
    if (!validResponse(myVerb, verb.french)) setError(true)
    else {
      setVerb(getRandomVerb())
      setMyVerb('')
      setError(false)
      setCounterOfVerbs((value) => ++value)
    }
  }

  useEffect(() => {
    console.log(verb.french)
    textToSpeech(verb.infinitive)
  }, [verb])

  useEffect(() => {
    setError(false)
  }, [myVerb])

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <p className="my-4">Counter of Verbs: {counterOfVerbs}</p>

      <div className="scale-110">
        <IrregularAudioVerb word={verb.infinitive} tooltip={verb.french} />
      </div>

      <TextField
        error={error}
        value={myVerb}
        onChange={onChangeMyVerb}
        onKeyDown={(event) => event.code === 'Enter' && onVerifMyVerb()}
        id="margin-normal"
        autoComplete="off"
        margin="normal"
        sx={{
          '& fieldset': {
            borderRadius: '0.50rem'
          }
        }}
      />

      <Button onClick={onVerifMyVerb} size="large" variant="contained">
        VALIDER
      </Button>

      <div className="h-36" />
    </div>
  )
}

export default Play
