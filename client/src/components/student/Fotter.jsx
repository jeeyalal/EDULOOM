import React from 'react'
import { assets } from '../../assets/assets'
import logo from '../../assets/logo.png';
const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white mt-10 w-full'>
      <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-20 px-8 md:px-36 py-12 border-b border-white/20'>
        {/* Logo & Description */}
        <div className='flex flex-col md:items-start items-center text-center md:text-left max-w-sm'>
          <img src={logo} alt="EDULOOM Logo" className='mb-4 w-36' />
          <p className='text-sm text-gray-400'>
            EDULOOM empowers learners through flexible, expert-led courses designed to fit your schedule. Start learning today and unlock your potential.
          </p>
        </div>

        {/* Quick Links */}
        <div className='flex flex-col gap-2'>
          <h4 className='text-lg font-semibold text-white mb-2'>Quick Links</h4>
          <a href="#" className='text-sm text-gray-400 hover:text-white transition'>Courses</a>
          <a href="#" className='text-sm text-gray-400 hover:text-white transition'>About Us</a>
          <a href="#" className='text-sm text-gray-400 hover:text-white transition'>Contact</a>
          <a href="#" className='text-sm text-gray-400 hover:text-white transition'>FAQs</a>
        </div>

        {/* Social Media / Contact */}
        <div className='flex flex-col gap-2'>
          <h4 className='text-lg font-semibold text-white mb-2'>Connect With Us</h4>
          <a href="#" className='text-sm text-gray-400 hover:text-white transition'>Facebook</a>
          <a href="#" className='text-sm text-gray-400 hover:text-white transition'>Twitter</a>
          <a href="#" className='text-sm text-gray-400 hover:text-white transition'>LinkedIn</a>
          <a href="#" className='text-sm text-gray-400 hover:text-white transition'>Email Us</a>
        </div>
      </div>

      <p className='text-center text-gray-500 text-sm py-6'>
        &copy; 2025 EDULOOM. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
