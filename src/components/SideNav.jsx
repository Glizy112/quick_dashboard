import React from 'react'
import { FiHome, FiBarChart, FiClipboard, FiPocket, FiShoppingBag, FiLogOut } from 'react-icons/fi'
import LinkHandle from './LinkHandle'

const SideNav = () => {
  return (
    <div className='w-24 bg-slate-800 text-center flex flex-col pb-24 justify-between'>
        <div className='flex flex-col'>
          <div className='flex items-center py-4 mt-2'>
              <LinkHandle/>
              <FiHome className='ml-8 text-[#7294FE]' size={28}/>
          </div>
      
              <FiBarChart className='text-[#e7e5eb] ml-9 mt-6' size={28}/>
          
          <FiClipboard className='text-[#e7e5eb] ml-9 mt-12' size={28}/>
          <FiPocket className='text-[#e7e5eb] ml-9 mt-12' size={28}/>
          <FiShoppingBag className='text-[#e7e5eb] ml-9 mt-12' size={28}/>
        </div>
        <FiLogOut className='text-[#e7e5eb] ml-9' size={28}/>
    </div>
  )
}

export default SideNav