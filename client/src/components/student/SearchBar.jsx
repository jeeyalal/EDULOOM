import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ data }) => {
  const navigate = useNavigate()
  const [input, setInput] = useState(data || '')

  const onSearchHandler = (e) => {
    e.preventDefault()
    if (input.trim()) {
      navigate('/course-list/' + input.trim())
    }
  }

  return (
    <form
      onSubmit={onSearchHandler}
      className='max-w-xl w-full h-12 md:h-14 flex items-center border border-gray-300 bg-white rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-300 transition-all duration-200'
    >
      <img
        src={assets.search_icon}
        alt="search icon"
        className='w-5 h-5 md:w-6 md:h-6 ml-4 mr-2 opacity-60'
      />
      <input
        type="text"
        placeholder="Search for courses..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='flex-1 h-full text-sm md:text-base placeholder:text-gray-400 text-gray-700 bg-transparent outline-none'
      />
      <button
        type="submit"
        className='h-10 md:h-11 px-6 md:px-8 text-sm md:text-base bg-blue-600 hover:bg-blue-700 text-white rounded-md mx-2 transition active:scale-95'
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
