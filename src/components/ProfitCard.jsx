import React from 'react'
import { VscTriangleUp } from 'react-icons/vsc'
import ProgressBar from './ProgressBar'

const ProfitCard = () => {
  return (
    <div className='w-full md:w-[413px] float-none md:float-end h-full flex flex-row p-8 md:p-4 justify-between bg-gray-800 rounded-lg'>
        <div className='w-2/3 flex flex-col justify-between'>
            <p className='font-inter font-normal text-base sm:text-sm md:text-sm text-slate-100'> Net Profit </p>
            <h2 className='font-inter font-bold text-2xl md:text-3xl sm:text-3xl text-white'> $6759.25 </h2>
            <div className='flex items-center mt-2'>
                <VscTriangleUp color={"#22c55e"} size={innerWidth < 640 ? 24 : 18}/>
                <p 
                  className='font-inter text-base sm:text-sm md:text-sm ml-2 text-green-500'
                > 3% </p>
            </div>
        </div>
        <div className='w-full flex flex-col items-end md:items-center justify-between'>
            <div className='w-5/6 sm:w-1/3 md:w-1/3 text-center pb-3'>
                <ProgressBar/>
            </div>
            <p className='font-inter font-light text-xs text-white text-center sm:text-start md:text-start'> *The values here has been rounded off. </p>
        </div>
    </div>
  )
}

export default ProfitCard