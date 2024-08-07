import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

const ChartDropdown = () => {
  return (
    <div className='flex py-2 px-3 bg-gray-600 rounded-full items-center justify-between'>
        <p className='font-inter font-normal text-slate-100 text-sm'> Weekly </p>
        <FiChevronDown color={"#fff"} size={16} className='ml-2'/>
    </div>
  )
}

export default ChartDropdown