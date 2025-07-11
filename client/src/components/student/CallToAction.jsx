import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0 text-center'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>
        Learn Anything, Anytime, Anywhere
      </h1>
      <p className='text-gray-500 text-sm md:text-base max-w-xl'>
        Access high-quality courses from expert instructors at your convenience. Whether you're upskilling, reskilling, or exploring new interests — we've got you covered.
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-6 font-medium'>
        <button className='px-10 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition duration-150'>
          Get Started
        </button>
        <button className='flex items-center gap-2 text-blue-600 hover:underline'>
          Learn More
          <img src={assets.arrow_icon} alt="arrow icon" className='w-4 h-4' />
        </button>
      </div>
    </div>
  )
}

export default CallToAction
