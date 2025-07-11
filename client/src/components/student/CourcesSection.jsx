import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourceCart from './CourceCart';

const CourcesSection = () => {
  const {allCourses} = useContext (AppContext)
  return (

    
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from Industry Experts</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>
        Explore our highly-rated courses across diverse categories — from programming and design to business and personal development. <br /> Each course is thoughtfully crafted by professionals to provide practical knowledge and <br />real-world skills that help you succeed.
      </p>


      {/* courses card */}
      <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
        {allCourses.slice(0,4).map((course,index)=><CourceCart key={index} course={course} />)}
      </div>



      <Link
        to={'/course-list'}
        onClick={() => scrollTo(0, 0)}
        className='inline-block mt-4 text-gray-700 border border-blue-300 px-10 py-3 rounded hover:bg-blue-50 transition transform active:scale-95 duration-150'>
        Browse All Courses
      </Link>

    </div>
  )
}

export default CourcesSection;
