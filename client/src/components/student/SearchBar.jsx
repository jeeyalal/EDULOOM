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
      className='max-w-xl w-full flex items-center gap-2 p-1 border border-gray-300 bg-white rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-300 transition-all duration-200'
    >
      <div className='pl-2'>
        <img
          src={assets.search_icon}
          alt="search icon"
          className='w-5 h-5 md:w-6 md:h-6 opacity-60'
        />
      </div>
      <input
        type="text"
        placeholder="Search for courses..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='flex-1 h-10 md:h-12 text-sm md:text-base placeholder:text-gray-400 text-gray-700 bg-transparent outline-none'
      />
      <button
        type="submit"
        className='h-10 md:h-12 px-4 md:px-6 text-sm md:text-base bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-all active:scale-95 whitespace-nowrap'
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar;
