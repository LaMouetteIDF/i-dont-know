import React from 'react'
import { Data as rows } from '../api/ApiUtils'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import { textToSpeech } from '../functions/textToSpeech'
import { css } from '@emotion/css'


function TableIrregularVerb() {

  const makeAudioElement = (word: string) => (
    <span
      className='
        mx-2
        px-1.5
        py-1
        rounded-full
        drop-shadow
        bg-gray-100
        hover:bg-gray-200
        active:bg-gray-300
        cursor-pointer
        '
      onClick={() => textToSpeech(word)}
    >
      <VolumeUpIcon fontSize='small' />&nbsp;{word}
    </span>
  )

  const parseWords = (value: string) =>
    value?.split(/[|/,]/).map(v => v.trim())

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', maxWidth: '1200px' }}>
      <TableContainer className={css`
        overflow-y: scroll;
        max-height: 800px;
        height: 100%;
      `}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Infinitif</TableCell>
              <TableCell align='right'>Passé Simple</TableCell>
              <TableCell align='right'>Participe passé</TableCell>
              <TableCell align='right'>Français</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='right'>{makeAudioElement(row.infinitive)}</TableCell>
                <TableCell align='right'>{parseWords(row.simplePast).map(v => makeAudioElement(v))}</TableCell>
                <TableCell align='right'>{parseWords(row.pastParticiple)?.map(v => makeAudioElement(v))}</TableCell>
                <TableCell align='right'>{row.french}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default TableIrregularVerb