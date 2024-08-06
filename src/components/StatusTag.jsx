import React from 'react'

const StatusTag = (props) => {
  return (
    <div 
        className={
            props?.isSuccess ? 'w-2/3 py-1 px-4 text-center bg-green-700 bg-opacity-75 rounded-3xl'
            : 'w-2/3 py-1 px-4 text-center bg-red-700 bg-opacity-75 rounded-3xl'
        }
    >
        <p 
            className={
                props?.isSuccess ? 'font-inter font-normal text-base text-green-400'
                : 'font-inter font-normal text-base text-red-400'
            }
        > {props?.status} </p>
    </div>
  )
}

export default StatusTag