import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-purple-900 text-white py-2'>
      <div className="logo">
        <span className='font-bold text-xl mx-8'>My Task Manager</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        <li>
          <a
            href="https://github.com/Auspicious-EX"
            target="_blank"
            rel="noopener noreferrer"
            className='cursor-pointer hover:font-bold transition-all'
          >
            GitHub
          </a>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar
