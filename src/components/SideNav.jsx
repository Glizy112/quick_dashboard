import React from 'react'
import { FiHome, FiBarChart, FiClipboard, FiPocket, FiShoppingBag, FiLogOut } from 'react-icons/fi'
import LinkHandle from './LinkHandle'

const SideNav = () => {
  return (
    <div className='w-full md:w-24 fixed bottom-0 md:sticky md:bottom-0 z-50 bg-slate-800 text-center flex md:flex-col py-4 md:pb-24 md:justify-between'>
        <div className='w-full md:w-full flex md:flex-col items-center md:items-start'>
          <div className='flex items-center md:py-4 md:mt-2'>
              <LinkHandle/>
              <FiHome className='ml-6 md:ml-8 text-[#7294FE]' size={28}/>
          </div>
          <FiBarChart className='text-[#e7e5eb] ml-9 sm:ml-24 md:ml-9 md:mt-6' size={28}/>
          <FiClipboard className='text-[#e7e5eb] ml-9 sm:ml-24 md:ml-9 md:mt-12' size={28}/>
          <FiPocket className='text-[#e7e5eb] ml-9 sm:ml-24 md:ml-9 md:mt-12' size={28}/>
          <FiShoppingBag className='text-[#e7e5eb] ml-9 sm:ml-24 md:ml-9 md:mt-12' size={28}/>
        </div>
        <FiLogOut 
          className='text-[#e7e5eb] mr-4 sm:mr-8 md:mr-0 self-center bg-gray-600 md:bg-transparent bg-opacity-40 md:bg-opacity-100 p-2 md:p-0 w-[12%] sm:w-[6%] md:w-8 h-[6%] md:h-8 rounded-full' 
          size={24}
        />
    </div>
  )
}

export default SideNav