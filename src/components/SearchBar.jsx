import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  return (
    <div className='flex mx-12 p-2 px-3 rounded-lg border-2 border-gray-600 items-center'>
        <FiSearch color={"#fff"} size={20}/>
        <input
          name="searchInput"
          //value={""}
          placeholder="Search"
          className='bg-transparent mx-4 text-slate-100 focus:outline-none font-inter font-light'
        />
    </div>
  )
}

export default SearchBar