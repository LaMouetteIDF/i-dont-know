import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../utils/context'
import { useTheme } from '@mui/material/styles'

function Header() {
  const themeMui = useTheme()
  const { toggleColorMode } = useContext(ThemeContext)
  return (
    <header className="flex justify-center items-center flex-col bg-indigo-600 text-zinc-50 p-2">
      <div>
        <h2 className="text-xl ">I Don't Know</h2>
        <Button
          onClick={() => {
            toggleColorMode()
          }}
        >
          Change Theme {themeMui.palette.mode === 'dark' ? '☀️' : '🌙'}
        </Button>
      </div>
      <div>
        <Link className="m-2 hover:text-zinc-200" to="/">
          Home
        </Link>
        <Link className="m-2 hover:text-zinc-200" to="play">
          Play
        </Link>
        <Link className="m-2 hover:text-zinc-200" to="verbs">
          Verbs
        </Link>
      </div>
    </header>
  )
}

export default Header
