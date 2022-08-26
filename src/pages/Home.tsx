import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const onNavigatePlay = () => {
    navigate('play')
  }

  return (
    <div className="flex justify-center items-center flex-col m-5 text-xl h-screen">
      <h2>Welcome to my game</h2>
      <Button onClick={onNavigatePlay} size="large">
        Play!
      </Button>
      <div className="h-36" />
    </div>
  )
}

export default Home
