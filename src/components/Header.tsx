import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="flex justify-center items-center flex-col bg-indigo-600 text-zinc-50 p-2">
      <h2 className="text-xl ">I Don't Know</h2>
      <div>
        <Link className="m-2 hover:text-zinc-200" to="/">
          Home
        </Link>
        <Link className="m-2 hover:text-zinc-200" to="game">
          Game
        </Link>
        <Link className="m-2 hover:text-zinc-200" to="verbs">
          Verbs
        </Link>
      </div>
    </header>
  )
}

export default Header

/* <div className="h-16 grid place-content-center bg-indigo-600">
        <span className="text-white font-medium">I Don't Know</span>
        <div>
          <Link className="p-0.5 hover:text-gray-100 text-white" to="/">
            Home
          </Link>
          <Link className="p-0.5 hover:text-gray-100 text-white" to="play">
            Play
          </Link>
          <Link className="p-0.5 hover:text-gray-100 text-white" to="verbs">
            Verbs
          </Link>
        </div>
      </div> */
