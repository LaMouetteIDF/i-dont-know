import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Play from './pages/Play'
import Verbs from './pages/Verbs'

function App() {
  return (
    <div className="App h-full">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/verbs" element={<Verbs />} />
      </Routes>
    </div>
  )
}

export default App
