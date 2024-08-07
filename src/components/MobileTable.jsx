import React from 'react'
import Avatar from './Avatar'
import StatusTag from './StatusTag'
import { userData } from './RecentTable'

const MobileTable = () => {
  return (
    <div className='overflow-auto'>
        <table className='mt-6 w-[120vw]'>
            <thead>
                <tr>
                    {
                        ["Customer", "Order No.", "Amount", "Status"].map((item, index)=> (
                            <td key={index} className='font-inter font-medium text-base text-white pb-2 ml-3'>{item}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                userData.map(user=> (
                    <tr key={user.id} className='border-separate border-spacing-2 border-t border-gray-500 items-center'>
                        <td className='flex-col my-4 py-3 items-start'>
                            <Avatar width={28} height={28}/>
                            <p className='font-inter font-normal text-base text-white mt-2'> {user.fullName} </p>
                        </td>
                        <td className='pt-2'>
                            <p className='font-inter font-normal text-base text-white'> {user.orderNo} </p>
                        </td>
                        <td className='pt-2'>
                            <p className='font-inter font-normal text-base text-white'> ${user.amount} </p>
                        </td>
                        <td className='w-1/5 pt-2'>
                            <StatusTag status={user.status} isSuccess={user.isSuccess}/>
                        </td>
                    </tr>
                ))  
                }
            </tbody>
        </table>
    </div>
  )
}

export default MobileTable