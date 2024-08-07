import React from 'react'
import { FiTarget, FiTrendingUp, FiClipboard, FiChevronRight } from 'react-icons/fi'
import { BiFoodMenu, BiDish, BiTargetLock } from 'react-icons/bi'

const actions = [
    {
        id: 1,
        title: 'Goals',
        icon: <BiTargetLock color={"#f87171"} size={40}/>,
        bgColor: 'rgba(248, 113, 113, 0.4)',
    },
    {
        id: 2,
        title: 'Popular Dishes',
        icon: <BiDish color={"#3b82f6"} size={40}/>,
        bgColor: 'rgba(59, 130, 246, 0.4)',
    },
    {
        id: 3,
        title: 'Menus',
        icon: <BiFoodMenu color={"#4ade80"} size={40}/>,
        bgColor: 'rgba(74, 222, 128, 0.4)',
    },
]

const ActionsCard = (props) => {
  return (
    <div className='w-full md:w-[413px] float-end h-full flex flex-col p-6 justify-between bg-gray-800 rounded-lg'>
        {
            actions.map(item=> (
                <div key={item.id} className='flex flex-row items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='p-3 sm:p-4 md:p-4 items-center justify-center rounded-full' style={{background: item.bgColor}}>
                            {item.icon}
                        </div>
                        <p className='font-inter font-normal text-base text-slate-100 ml-3'> {item.title} </p>
                    </div>
                    <div className='p-2 bg-slate-500 items-center rounded-full'>
                        <FiChevronRight color={"#fff"} size={16}/>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ActionsCard