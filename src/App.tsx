import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Verbs from './pages/Verbs'
import Game from "./pages/Game";

function App() {
  return (
    <div className="App h-full">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/verbs" element={<Verbs />} />
      </Routes>
    </div>
  )
}

export default App
