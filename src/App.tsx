import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Play from './pages/Play'
import Verbs from './pages/Verbs'
import { ThemeProvider } from './utils/context'
// import Game from "./pages/Game";

function App() {
  return (
    <div className="App h-full">
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/verbs" element={<Verbs />} />
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
