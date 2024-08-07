import React from 'react'
import { FiMail, FiSettings, FiBell } from 'react-icons/fi'

const NavIcon = ({ name }) => {
  return (
    <div className='bg-slate-600 rounded-full p-2.5 mr-4 sm:mx-2 md:mx-3 opacity-85 sm:opacity-100 md:opacity-100'>
        {
            name==="message" ?
            <FiMail color={"rgba(255,255,255,0.6)"} size={24}/>
            : name==="settings" ?
              <FiSettings color={"rgba(255,255,255,0.6)"} size={24}/>
              :
              <FiBell color={"rgba(255,255,255,0.6)"} size={24}/>
        }
    </div>
  )
}

export default NavIcon