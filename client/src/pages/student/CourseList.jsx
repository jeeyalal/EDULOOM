import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../components/student/SearchBar'
import CourceCart from '../../components/student/CourceCart'
import { assets } from '../../assets/assets'
import Footer from '../../components/student/Fotter'

const CourseList = () => {
  const navigate = useNavigate()
  const { allCourses } = useContext(AppContext)
  const { input } = useParams()
  const [filteredCourses, setFilteredCourses] = useState([])

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = [...allCourses]

      if (input && input.trim()) {
        const lowerInput = input.toLowerCase()
        const result = tempCourses.filter(course =>
          course.courseTitle.toLowerCase().includes(lowerInput)
        )
        setFilteredCourses(result)
      } else {
        setFilteredCourses(tempCourses)
      }
    }
  }, [allCourses, input])

  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        {/* Header and Search */}
        <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
            <p className='text-gray-500'>
              <span className='text-blue-600 cursor-pointer hover:underline' onClick={() => navigate('/')}>
                Home
              </span>{' '}
              / <span>Course List</span>
            </p>
          </div>
          <SearchBar data={input} />
        </div>

        {/* Input tag display */}
        {input && (
          <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600 rounded-md bg-white shadow-sm'>
            <p className='capitalize'>{input}</p>
            <img
              src={assets.cross_icon}
              alt="clear search"
              className='w-4 h-4 cursor-pointer opacity-80 hover:opacity-100'
              onClick={() => navigate('/course-list')}
            />
          </div>
        )}

        {/* Courses Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-6 px-2 md:px-0'>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <CourceCart key={index} course={course} />
            ))
          ) : (
            <div className='col-span-full text-center mt-10 text-gray-500 text-lg'>
              No data
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CourseList
