import React from 'react'
import logo from '../assets/square_logo.png';
import SearchBar from './SearchBar';
import NavIcon from './NavIcon';
import UserIcon from './UserIcon';

const NavBar = () => {
  return (
    <div className='w-full bg-slate-800 flex h-24 items-center justify-between p-9'>
        <div className='flex w-2/3 items-center'>
            <img src={logo} width={'3.5%'}/>
            <SearchBar/>
        </div>
        <div className='flex w-1/3 items-center justify-end'>
            {
                ["message", "settings", "bell"].map(icon=> (
                    <NavIcon name={icon}/>
                ))
            }
            <div className='ml-8'>
                <UserIcon/>
            </div>
        </div>
    </div>
  )
}

export default NavBar