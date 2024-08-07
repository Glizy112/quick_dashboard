import React from 'react'
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc'

const InfoCard = (props) => {
  return (
    <div 
      key={props?.id} 
      className={
        props?.id === 1 ? 'w-full md:w-1/4 mt-4 sm:mt-0 md:mt-0 h-full p-4 flex flex-col bg-gray-800 rounded-lg justify-between'
        : 'w-full md:w-1/4 mt-4 sm:mt-0 md:mt-0 h-full p-4 flex flex-col md:ml-4 bg-gray-800 rounded-lg justify-between'
      }
    >
        <div className=''>
            <div className='w-1/5 md:w-1/3 p-2 bg-opacity-60 rounded-xl' style={{background: props?.bgColor}}>
              {props?.icon}
            </div>
            <p className='font-inter font-normal text-sm text-slate-100 mt-3'> {props?.title} </p>
        </div>
        <div className='flex flex-row justify-between mt-5'>
            <p className='font-inter font-bold text-3xl text-white'> {props?.id === 4 ? '$'+props?.value : props?.value} </p>
            <div className='flex items-center'>
                {
                  props?.success ? <VscTriangleUp color={"#22c55e"} size={innerWidth < 640 ? 24 : 18}/>
                  : <VscTriangleDown color={"#f05"} size={innerWidth < 640 ? 24 : 18}/>
                }
                <p 
                  className={
                    props?.success ? 'font-inter text-base sm:text-sm md:text-sm ml-2 text-green-500' 
                    : 'font-inter text-base sm:text-sm md:text-sm ml-2 text-red-500'
                  }
                > {props?.marginPercent}% </p>
            </div>
        </div>
    </div>
  )
}

export default InfoCard