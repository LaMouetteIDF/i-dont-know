import React from 'react'
import './App.css'
import Header from './components/Header'
import TableIrregularVerb from './components/TableIrregularVerb'

type Awaited<T> = Promise<T> | T

function App() {
  return (
    <div className='App h-full'>
      <Header></Header>
      <div className='px-5 pt-3 grid place-content-center'>
        <TableIrregularVerb></TableIrregularVerb>
      </div>
    </div>
  )
}

export default App
