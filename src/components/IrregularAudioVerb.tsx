import React from 'react'
import { textToSpeech } from '../functions/textToSpeech'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import { Tooltip, Zoom } from '@mui/material'
import { indigo } from '@mui/material/colors'

interface IrregularAudioVerbProps {
  word: string
  tooltip?: string
}

export const IrregularAudioVerb = ({
  word,
  tooltip = ''
}: IrregularAudioVerbProps) => (
  <span
    className="
      flex
      select-none
      mx-3
      px-2
      py-2
      rounded-xl
      border-gray-300
      border
      cursor-default
      "
    onClick={() => textToSpeech(word)}
  >
    <VolumeUpIcon
      fontSize="small"
      className="cursor-pointer hover:text-indigo-400"
      sx={{ color: indigo[400], fontSize: 26 }}
    />
    &nbsp;
    <Tooltip
      TransitionComponent={Zoom}
      enterDelay={300}
      title={<span className="text-sm">{tooltip}</span>}
      arrow
      disableHoverListener={!tooltip}
      sx={{
        fontSize: '100px'
      }}
    >
      <span className="cursor-pointer">{word}</span>
    </Tooltip>
  </span>
)
