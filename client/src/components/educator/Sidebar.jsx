import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const { isEducator } = useContext(AppContext)

  const memuItems = [
    { name: 'Dashboard', path: '/educator', icon: assets.home_icon },
    { name: 'Add Course', path: '/educator/add-course', icon: assets.add_icon },
    { name: 'My Courses', path: '/educator/my-course', icon: assets.my_course_icon },
    { name: 'Student Enrolled', path: '/educator/student-enroll', icon: assets.person_tick_icon },
  ]

  return isEducator && (
    <div className='md:w-64 w-16 border-r min-h-screen border-gray-500 py-4 flex flex-col bg-white shadow-sm'>
      {memuItems.map((item) => (
        <NavLink
          to={item.path}
          key={item.name}
          end={item.path === '/educator'}
          className={({ isActive }) =>
            `flex items-center gap-4 px-4 py-3 mx-2 my-1 rounded-lg transition-all duration-200 
             ${isActive ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-100 hover:scale-[1.03]'}`
          }
        >
          <img src={item.icon} alt="" className='w-6 h-6' />
          <p className='md:block hidden'>{item.name}</p>
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar
