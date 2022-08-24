import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="h-16 grid place-content-center bg-indigo-600">
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
      </div>
    </header>
  )
}

export default Header
