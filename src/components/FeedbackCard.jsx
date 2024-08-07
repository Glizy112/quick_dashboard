import React from 'react'
import { FiUser } from 'react-icons/fi'
import { BsStarFill } from 'react-icons/bs'
import Avatar from './Avatar'

const feedbacks = [
    {
        id: 1,
        fullName: 'Jenny Wilson',
        rating: 4,
        description: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    },
    {
        id: 2,
        fullName: 'Dianne Russell',
        rating: 5,
        description: 'We enjoyed the Eggs Benedict served homemade focaccia bread and hot coffee. Perfect service',
    },
    {
        id: 3,
        fullName: 'Devon Lane',
        rating: 4,
        description: 'Normally wings are wings, but theirs are lean meaty and tender.',
    },
    {
        id: 4,
        fullName: 'Devon Lane',
        rating: 4,
        description: 'Normally wings are wings, but theirs are lean meaty and tender.',
    },
]

const FeedbackCard = () => {
  return (
    <div className='w-full h-full max-h-full overflow-y-scroll flex flex-col p-6 bg-gray-800 rounded-lg'>
        <h1 className='font-inter font-bold text-xl sm:text-2xl md:text-2xl text-slate-50'> Customer's Feedback </h1>
        <div className='mt-2'>
            {
                feedbacks.map(item=> (
                    <div className='flex flex-col my-2'>
                        <div className='flex items-center mt-2'>
                            <Avatar width={36} height={36}/>
                            <p className='font-inter font-medium text-lg text-white ml-2'> {item.fullName} </p>
                        </div>
                        <div className='flex items-center mt-4'>
                            {
                                [1,2,3,4,5].map((i, index)=> (
                                    <BsStarFill 
                                        key={index} 
                                        size={24}
                                        className={
                                            item.rating > index ? 'text-yellow-300 ml-1' :'text-gray-200 ml-1'
                                        }
                                    />
                                ))
                            }
                        </div>
                        <p className='font-inter font-light text-sm text-gray-300 mt-4'> {item.description} </p>
                        <div className='w-full bg-gray-500 h-[1px] mt-6'/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FeedbackCard