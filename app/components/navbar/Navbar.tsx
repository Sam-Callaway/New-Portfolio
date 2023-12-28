import React from 'react'
import Navbutton from './Navbutton'
import Downloadbutton from './Downloadbutton'

const Navbar = () => {
  return (
        <nav className="navbar">
        <div className="flex-none">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-secondary glass rounded-box w-52">
                <li><Navbutton linkName='Home' linkAdd='/'/></li>
                <li><Navbutton linkName='Portfolio' linkAdd='portfolio'/></li>
                <li><Downloadbutton linkName='Download CV' linkAdd='/CV - Sam Callaway.pdf'/></li>
            </ul>
            </div>
        </div>
        <div className="flex-1 justify-center">
            <h1 className="text-xl">Sam Callaway</h1>
        </div>
        </nav>
  )
}

export default Navbar
