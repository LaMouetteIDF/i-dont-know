import { createContext, useMemo, useState } from 'react'
import {
  createTheme,
  ThemeProvider as ThemeProviderMui
} from '@mui/material/styles'

export const ThemeContext = createContext({ toggleColorMode: () => {} })

export const ThemeProvider = ({
  children
}: {
  children: JSX.Element | JSX.Element[]
}) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  const styleDark: React.CSSProperties = {
    backgroundColor: '#000',
    color: '#fff'
  }

  const stylelight: React.CSSProperties = {
    backgroundColor: '#fff',
    color: '#000'
  }

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProviderMui theme={theme}>
        <div
          style={mode === 'light' ? stylelight : styleDark}
          className="h-full"
        >
          {children}
        </div>
      </ThemeProviderMui>
    </ThemeContext.Provider>
  )
}
