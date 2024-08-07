import React from 'react'

const StatusTag = (props) => {
  return (
    <div 
        className={
            props?.isSuccess ? 'w-5/6 md:w-2/3 py-1 px-2 sm:px-4 md:px-4 text-center bg-green-700 bg-opacity-75 rounded-3xl'
            : 'w-5/6 md:w-2/3 py-1 px-2 sm:px-4 md:px-4 text-center bg-red-700 bg-opacity-75 rounded-3xl'
        }
    >
        <p 
            className={
                props?.isSuccess ? 'font-inter font-normal text-xs sm:text-sm md:text-base text-green-400'
                : 'font-inter font-normal text-xs sm:text-sm md:text-base text-red-300'
            }
        > {props?.status} </p>
    </div>
  )
}

export default StatusTag