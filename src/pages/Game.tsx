import React, {useState} from 'react';
import GameLayer from "../components/game/GameLayer";
import {css} from "@emotion/css";
import GameModSelect from "../components/game/GameModSelect";
import {GameModesType} from "../types/GameModesType";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import {getVerbFromMods} from "../api/ApiUtils";

function Game() {
  const [isStartedGame, setIsStartedGame] = useState<boolean>(false)
  const [words, setWords] = useState<[string, string][]>([])

  const startGame = (modes: GameModesType) => {
    setWords(getVerbFromMods(modes))
    setIsStartedGame(true)
    console.table(words)
  }
  const finishGame = () => setIsStartedGame(false)

  return (
    <div className="h-full w-full flex justify-center">
      <div className={css`
        min-width: 600px;
      `}>
        <div className="h-16 flex">
          <span className="mx-3 self-center">
            {isStartedGame && (
              <ArrowBackRoundedIcon
                className="cursor-pointer"
                sx={{fontSize: 40, color: '#242930'}}
                onClick={finishGame}
              />
            )}
          </span>
        </div>
        <div className="grid place-content-center h-full">
          <div className="-translate-y-32">
            {!isStartedGame && (
              <div className="w-96">
                <div className="my-6 flex justify-center">
                  <span className="text-3xl">Choisissez vos modes</span>
                </div>
                <GameModSelect start={startGame}/>
              </div>
            )}
            {isStartedGame && <GameLayer words={words}/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
