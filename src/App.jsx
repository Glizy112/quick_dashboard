import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout'
import InfoCard from './components/InfoCard'
import ProfitCard from './components/ProfitCard'
import ActionsCard from './components/ActionsCard'
import RecentTable from './components/RecentTable'
import FeedbackCard from './components/FeedbackCard'
import { BarChart, barElementClasses } from '@mui/x-charts'
import { axisClasses } from '@mui/x-charts'
import { FiChevronDown } from 'react-icons/fi'
import RubbishCan from './components/RubbishCan'
import ShoppingBagGreen from './components/ShoppingBagGreen'
import ShoppingBagRed from './components/ShoppingBagRed'
import Revenue from './components/Revenue'

const infoCards = [
  {
    id: 1, 
    title: 'Total Orders',
    value: '75',
    marginPercent: 3,
    success: true,
    icon: <RubbishCan/>,
    bg: 'rgba(114,148,254,0.3)',
  },
  {
    id: 2, 
    title: 'Total Delivered',
    value: '70',
    marginPercent: 3,
    success: false,
    icon: <ShoppingBagGreen/>,
    bg: '#4ADE80',
  },
  {
    id: 3, 
    title: 'Total Cancelled',
    value: '05',
    marginPercent: 3,
    success: true,
    icon: <ShoppingBagRed/>,
    bg: 'rgba(248,113,113,0.8)',
  },
  {
    id: 4, 
    title: 'Total Revenue',
    value: '12k',
    marginPercent: 3,
    success: false,
    icon: <Revenue/>,
    bg: 'rgba(248,113,113,0.2)',
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container h-full  bg-slate-950'>
      <Layout>
        <h1 className='font-inter font-bold text-3xl text-slate-50 mx-8 mt-8 mb-2'> Dashboard </h1>
        <div className='flex-col md:flex md:flex-row h-1/5 mx-8 justify-between items-center'>
          <div className='w-full md:w-2/3 md:flex grid grid-cols-2 gap-4 md:gap-0 h-3/4'>
            {
              infoCards.map(item=> (
                <InfoCard 
                  id={item.id} 
                  title={item.title} 
                  value={item.value} 
                  marginPercent={item.marginPercent} 
                  success={item.success}
                  icon={item.icon}
                  bgColor={item.bg}
                />
              ))
            }
          </div>
          <div className='h-3/4 mt-8 md:mt-0'>
            <ProfitCard/>
          </div>
        </div>

        <div className='flex flex-row h-[360px] mx-8 justify-between items-center'>
          <div className='w-2/3 flex flex-col h-full bg-gray-800 rounded-lg'>
            <div className='flex flex-row mx-6 mt-6 justify-between items-center'>
              <h1 className='font-inter font-bold text-xl text-slate-50'> Activity </h1>
              <div className='flex py-2 px-3 bg-gray-600 rounded-full items-center justify-between'>
                <p className='font-inter font-normal text-slate-100 text-sm'> Weekly </p>
                <FiChevronDown color={"#fff"} size={16}/>
              </div>
            </div>
            <BarChart
              sx={(theme)=> ({
                [`.${axisClasses.root}`]: {
                  [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                    stroke: '#cbd5e1',
                    strokeWidth: 1,
                  },
                  [`.${axisClasses.tickLabel}`]: {
                    fill: '#cbd5e1',
                  },
                },
              })}
              xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C', 'group D', 'group E'] }]}
              series={[{ data: [4, 3, 5, 1, 4] }, { data: [1, 6, 3, 7, 5] }, { data: [5, 6, 4, 2, 1] }, { data: [4, 3, 2, 1, 5] }]}
              className='w-2/3 h-full'
              borderRadius={10}
              //width={500}
              //height={300}
            />
          </div>
          <div className='w-1/3 h-full'>
            <ActionsCard/>
          </div>
        </div>

        {/* <div classname='grid grid-cols-3 gap-4 mx-8'>
          <div className='flex h-full'>
            {
              infoCards.map(item=> (
                <InfoCard id={item.id} title={item.title} value={item.value} marginPercent={item.marginPercent} success={item.success}/>
              ))
            }
          </div>
          <div className='w-1/3 h-full'>
            <ActionsCard/>
          </div>
        </div> */}

        <div className='flex flex-row mx-8 h-[720px] justify-between pt-8'>
          <div className='w-2/3 h-full pb-12'>
            <RecentTable/>
          </div>
          <div className='w-[413px] h-full pb-12'>
            <FeedbackCard/>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default App
