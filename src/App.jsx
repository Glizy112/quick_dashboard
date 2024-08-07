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
import NavBar from './components/NavBar'
import SideNav from './components/SideNav'
import ChartDropdown from './components/ChartDropdown'

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
    <div className='w-[100%] h-[90%] bg-slate-950 overflow-hidden'>
      {/* <Layout> */}
      <NavBar/>
      <div className='md:flex flex-col md:flex-row h-[100%]'>
        <SideNav/>
        {/* Dashboard Content Section */}
        <div className='mt-24 sm:mt-0 md:mt-0'>
          <h1 className='font-inter font-bold text-2xl sm:text-3xl md:text-3xl text-slate-50 mx-8 mt-8 mb-8 md:mb-2'> Dashboard </h1>
          <div className='flex-col md:flex md:flex-row sm:flex-col h-1/5 mx-8 justify-between items-center'>
            <div className='w-full md:w-2/3 md:flex sm:grid sm:grid-cols-2 sm:gap-6 md:gap-0 h-2/3'>
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
            <div className='h-2/3 mt-8 md:mt-0'>
              <ProfitCard/>
            </div>
          </div>

          <div className='md:flex flex-col md:flex-row h-[700px] md:h-[300px] mx-8 justify-between items-center'>
            <div className='chartContainer w-full md:w-2/3 flex flex-col mt-8 md:mt-0 h-1/2 md:h-full bg-gray-800 rounded-lg'>
              <div className='chartHeadSection flex flex-row mx-6 mt-6 justify-between items-center'>
                <h1 className='font-inter font-bold text-xl text-slate-50'> Activity </h1>
                <ChartDropdown/>
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
                className='w-full md:w-2/3 h-1/3 md:h-full'
                borderRadius={10}
                //width={500}
                //height={300}
              />
            </div>
            <div className='actionsContainer w-full md:w-1/3 h-[40%] md:h-full mt-8 md:mt-0'>
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

          <div className='md:flex flex-col md:flex-row mx-8 h-[75%] md:h-[50%] justify-between pt-0 md:pt-12 pb-24 md:pb-0'>
            <div className='w-full md:w-2/3'>
              <RecentTable/>
            </div>
            <div className='w-full md:w-[413px] mt-8 md:mt-0'>
              <FeedbackCard/>
            </div>
          </div>
        </div>
        {/* </Layout> */}
      </div>
    </div>
  )
}

export default App
