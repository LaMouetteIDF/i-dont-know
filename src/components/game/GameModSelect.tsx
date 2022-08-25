import React, {useState} from 'react';
import {GameModesType} from '../../types/GameModesType'
import {Button, Checkbox, FormControlLabel} from "@mui/material";

export interface GameModeSelectProps {
  start: (mods: GameModesType) => void
}

type ModKey = "infinitive" | "simplePast" | "pastParticiple"
type ModName = string

type ModsType = [ModKey, ModName]

const Mods: ModsType[] = [
  ["infinitive", "Infinitif"],
  ["simplePast", "Passé Simple"],
  ["pastParticiple", "Participe Passé"],
]

function GameModSelect(props: GameModeSelectProps) {
  const [modsSelect, setModsSelect] = useState<GameModesType>({
    infinitive: true,
    simplePast: true,
    pastParticiple: true
  })

  const handleChangeMod = (event: React.ChangeEvent<HTMLInputElement>, mod: ModKey) => setModsSelect({
    ...modsSelect,
    [mod]: event.target.checked
  })

  return (
    <div>
      {Mods.map(mod => (
        <div key={mod[0]}>
          <FormControlLabel
            label={mod[1]}
            control={
              <Checkbox
                checked={modsSelect[mod[0]]}
                onChange={event => handleChangeMod(event, mod[0])}
              />
            }
          />
        </div>
      ))}
      <div className="flex justify-end">
        <Button onClick={() => props.start(modsSelect)}>Start</Button>
      </div>
    </div>
  );
}

export default GameModSelect;