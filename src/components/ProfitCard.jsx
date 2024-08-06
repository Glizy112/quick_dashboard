import React from 'react'
import { FiArrowUpCircle } from 'react-icons/fi'
import ProgressBar from './ProgressBar'

const ProfitCard = () => {
  return (
    <div className='w-5/6 md:w-[413px] float-none md:float-end h-full flex flex-row p-4 justify-between bg-gray-800 rounded-lg'>
        <div className='w-2/3 flex flex-col justify-between'>
            <p className='font-inter font-normal text-sm text-slate-100'> Net Profit </p>
            <h2 className='font-inter font-bold text-3xl text-white'> $6759.25 </h2>
            <div className='flex items-center mt-2'>
                <FiArrowUpCircle color={"#22c55e"} size={18}/>
                <p 
                  className='font-inter text-sm ml-2 text-green-500'
                > 3% </p>
            </div>
        </div>
        <div className='w-full flex flex-col items-center justify-between'>
            <div className='w-1/3 text-center pb-3'>
                <ProgressBar/>
            </div>
            <p className='font-inter font-light text-xs text-white'> *The values here has been rounded off. </p>
        </div>
    </div>
  )
}

export default ProfitCard