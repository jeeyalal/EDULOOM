import React from 'react'
import { assets } from '../../assets/assets'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className='w-full border-t bg-white text-gray-600 px-6 md:px-12 py-6'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>

        {/* Left Section */}
        <div className='flex items-start gap-4'>
          <img className='w-16 md:w-20' src={logo} alt="Eduloom Logo" />
          <div className='hidden md:block h-16 w-px bg-gray-400/50'></div>
          <div className='text-sm leading-relaxed'>
            <p className='font-semibold text-gray-800'>Eduloom</p>
            <p>Your gateway to quality education. Learn, grow, and succeed with expertly curated courses from top educators.</p>
          </div>
        </div>

        {/* Center Links */}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-sm'>
          <a href="#" className='hover:text-blue-500 transition'>Privacy Policy</a>
          <a href="#" className='hover:text-blue-500 transition'>Terms of Service</a>
          <a href="#" className='hover:text-blue-500 transition'>Help & Support</a>
        </div>

        {/* Right Section - Social Icons */}
        <div className='flex items-center gap-3'>
          <a href="#" aria-label="Facebook">
            <img src={assets.facebook_icon} alt="Facebook" className='w-5 h-5 hover:scale-110 transition' />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={assets.twitter_icon} alt="Twitter" className='w-5 h-5 hover:scale-110 transition' />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={assets.instagram_icon} alt="Instagram" className='w-5 h-5 hover:scale-110 transition' />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className='mt-6 text-center text-xs text-gray-400'>
        © 2024 Eduloom. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
