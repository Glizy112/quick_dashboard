import React from 'react'
import NavBar from './components/NavBar'
import SideNav from './components/SideNav'

const Layout = ({children}) => {
  return (
    <div className=''>
        <div className='justify-center'>
            <NavBar/>
        </div>
        <div className='flex bg-slate-950' style={{height: '100%'}}>
            <SideNav/>
            <div className='w-full flex flex-col'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout