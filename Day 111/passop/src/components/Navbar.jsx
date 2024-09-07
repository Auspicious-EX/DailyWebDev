import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-white' style={{ backgroundColor: '#870081' }}>
        <div className='mycontainer flex justify-between items-center
        px-4 h-14 py-7'>
            {/* for logo */}
            <div className='text-2xl font-bold cursor-pointer'>
                <img src="src/assets/Lockex.png" alt="Lockex Logo" className="w-32 h-auto" />
                
            </div>
            {/* for buttons */}
            <a target='_blank' href="https://github.com/Auspicious-EX">
                <button className=' flex my-5 justify-between
                rounded-full items-center ring-white ring-1' style={{ backgroundColor: '#C074DB' }}>
                    <img className='invert-1 w-11 p-1' src="/icons/github-mark.svg" alt="GitHub" />
                    <span className='font-bold px-2'>GitHub</span>
                </button>
            </a>
        </div>
    </nav>
  )
}

export default Navbar

{/* 
This App created by Shubham Prajapati 
*/}