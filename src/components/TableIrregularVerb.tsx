import React from 'react'
import { Data as rows } from '../api/ApiUtils'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import { css } from '@emotion/css'
import { IrregularAudioVerb } from './IrregularAudioVerb'

function TableIrregularVerb() {
  const parseWords = (value: string) =>
    value?.split(/[|/]/).map((v) => v.trim())

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', maxWidth: '1200px' }}>
      <TableContainer
        className={css`
          overflow-y: scroll;
          max-height: 800px;
          height: 100%;
        `}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="right">Infinitif</TableCell>
              <TableCell align="right">Passé Simple</TableCell>
              <TableCell align="right">Participe passé</TableCell>
              <TableCell align="right">Français</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">
                  {<IrregularAudioVerb word={row.infinitive} />}{' '}
                </TableCell>

                <TableCell align="right">
                  {parseWords(row.simplePast).map((v, index) => (
                    <IrregularAudioVerb key={index} word={v} />
                  ))}
                </TableCell>

                <TableCell align="right">
                  {parseWords(row.pastParticiple)?.map((v, index) => (
                    <IrregularAudioVerb key={index} word={v} />
                  ))}
                </TableCell>

                <TableCell align="right">{row.french}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default TableIrregularVerb
