import React from 'react'
import logo from '../assets/square_logo.png';
import SearchBar from './SearchBar';
import NavIcon from './NavIcon';
import UserIcon from './UserIcon';

const NavBar = () => {
  return (
    <div className='w-full bg-slate-800 sm:flex md:flex flex-col sm:flex-row md:flex-row h-24 items-center justify-between p-8 md:p-9'>
        <div className='flex w-1/3 sm:w-2/3 md:w-2/3 items-center'>
            <img src={logo} className='w-[24%] sm:w-[10%] md:w-[3.5%]'/>
            <SearchBar/>
        </div>
        <div className='flex w-full sm:w-5/6 md:w-1/3 mt-10 sm:mt-0 md:mt-0 items-center justify-between sm:justify-end md:justify-end'>
            <div className='flex'>
                {
                    ["message", "settings", "bell"].map(icon=> (
                        <NavIcon name={icon}/>
                    ))
                }
            </div>
            <div className='ml-4 md:ml-8 opacity-85 sm:opacity-100 md:opacity-100'>
                <UserIcon/>
            </div>
        </div>
    </div>
  )
}

export default NavBar