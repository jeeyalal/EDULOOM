import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
        <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>
          Shape your future with courses tailored to <span className='text-violet-500'>match your goals.</span>
          <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' />
        </h1>

        <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>
          Learn from top instructors through interactive lessons, real-world projects, and a supportive community — empowering you to reach your full potential both personally and professionally.
        </p>

        <p className='md:hidden text-gray-500 max-w-sm mx-auto'>
          Learn from top educators and hands-on experiences to grow your skills and achieve your professional goals.
        </p>
        <SearchBar />
    </div>
  )
}

export default Hero
