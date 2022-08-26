import React, {useEffect, useState} from 'react'
import { getVerbFromMods } from '../../api/ApiUtils'
import {IrregularAudioVerb} from "../IrregularAudioVerb";
import {TextField} from "@mui/material";
import {validResponse} from "../../functions/validResponse";
import {textToSpeech} from "../../functions/textToSpeech";

type EnglishVerb = string
type FrenchTrad = string

interface GameLayerPropsType {
  words: [EnglishVerb, FrenchTrad][]
}

function GameLayer(props: GameLayerPropsType) {
  const [inputValue, setInputValue] = useState<string>('')
  const [currentArrayIndex, setCurrentArrayIndex] = useState<number>(0)
	const [currentVerb, setCurrentVerb] = useState<string>(props.words[0][0])
  const [validVerbCounter, setValidVerbCounter] = useState<number>(0)
  const [wrongAnswer, setWrongAnswer] = useState<boolean>(false)

	const validResult = () => {
		console.log(currentVerb, props.words[currentArrayIndex])
		if (!validResponse(inputValue, props.words[currentArrayIndex][1])) setWrongAnswer(true)
		else {
			setCurrentVerb(props.words[currentArrayIndex+1][0])
			setCurrentArrayIndex((prev) => ++prev)
			setInputValue('')
			setWrongAnswer(false)
			setValidVerbCounter((prev) => ++prev)
		}
	}

  const handleChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value)

	useEffect(() => {
		console.log(props.words[currentArrayIndex][1])
		textToSpeech(currentVerb)
	}, [currentVerb])

	useEffect(() => {
		setWrongAnswer(false)
	}, [inputValue])

  return (<div className="flex flex-col">
	  <div className="flex justify-end">
		  <span>{currentArrayIndex}/{props.words.length} verbes</span>
	  </div>
	  <div className="scale-110">
		  <IrregularAudioVerb word={currentVerb} tooltip={props.words[currentArrayIndex][1]} />
	  </div>
	  <div>
		  <TextField
			  error={wrongAnswer}
			  value={inputValue}
			  onChange={handleChangeInputValue}
			  onKeyDown={(event) => event.code === 'Enter' && validResult()}
			  id="margin-normal"
			  autoComplete="off"
			  margin="normal"
			  sx={{
				  '& fieldset': {
					  borderRadius: '0.50rem'
				  }
			  }}
		  />
	  </div>
	  <div>

	  </div>
  </div>)
}

export default GameLayer
