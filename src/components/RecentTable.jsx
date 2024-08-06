import React from 'react'
import { FiUser } from 'react-icons/fi'
import StatusTag from './StatusTag'
import Avatar from './Avatar'

const userData = [
    {
        id: 1,
        fullName: 'Wade Warren',
        orderNo: '15478256',
        amount: '124.00',
        status: 'Delivered',
        isSuccess: true,
    },
    {
        id: 2,
        fullName: 'Jane Cooper',
        orderNo: '48965786',
        amount: '365.02',
        status: 'Delivered',
        isSuccess: true,
    },
    {
        id: 3,
        fullName: 'Guy Hawkins',
        orderNo: '78958215',
        amount: '45.88',
        status: 'Cancelled',
        isSuccess: false,
    },
    {
        id: 4,
        fullName: 'Kristin Watson',
        orderNo: '20965732',
        amount: '65.00',
        status: 'Pending',
        isSuccess: false,
    },
    {
        id: 5,
        fullName: 'Cody Fisher',
        orderNo: '95715620',
        amount: '545.00',
        status: 'Delivered',
        isSuccess: true,
    },
    {
        id: 6,
        fullName: 'Savannah Nyugen',
        orderNo: '78514568',
        amount: '128.20',
        status: 'Delivered',
        isSuccess: true,
    },
]

const RecentTable = () => {
  return (
    <div className='w-full h-full flex flex-col p-6 bg-gray-800 rounded-lg'>
        <h1 className='font-inter font-bold text-2xl text-slate-50'> Recent Orders </h1>
        {/* <ul className='flex flex-row justify-between items-center my-4'>
            <li className='font-inter font-semibold text-base text-white'>Customer</li>
            <li className='font-inter font-semibold text-base text-white'>Order No.</li>
            <li className='font-inter font-semibold text-base text-white'>Amount</li>
            <li className='font-inter font-semibold text-base text-white'>Status</li>
        </ul>
        <div className='justify-between items-center'>
            {
                userData.map(user=> (
                    <div key={user.id}>
                        <div className='bg-gray-400 w-full '/>
                        <div className='flex flex-row items-center justify-between'>
                            <div className='flex items-center'>
                                <FiUser color={"#fff"} size={20}/>
                                <p className='font-inter font-medium text-lg text-white ml-2'> {user.fullName} </p>
                            </div>
                            <p className='font-inter font-medium text-lg text-white'> {user.orderNo} </p>
                            <p className='font-inter font-medium text-lg text-white'> {user.amount} </p>
                            <StatusTag status={user.status} isSuccess={user.isSuccess}/>
                        </div>
                    </div>
                ))
            }
        </div> */}

        <table className='mt-6'>
            <thead>
                <tr>
                    {
                        ["Customer", "Order No.", "Amount", "Status"].map((item, index)=> (
                            <td key={index} className='font-inter font-medium text-base text-white pb-2'>{item}</td>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                  userData.map(user=> (
                    <tr key={user.id} className='border-separate border-spacing-2 border-t border-gray-500 items-center'>
                        <td className='flex my-4 py-3 items-end'>
                            <Avatar width={28} height={28}/>
                            <p className='font-inter font-normal text-base text-white ml-2'> {user.fullName} </p>
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

export default RecentTable