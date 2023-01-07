import React from 'react'
import { useSidebarContext } from '../contexts/SiderbarContext'
import {BsBag} from 'react-icons/bs'
import { useCartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.svg'

const Header = () => {
  const { handleClick, isActive} = useSidebarContext()
  const {itemQuantity} = useCartContext()
 
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md': 'bg-none py-6'} fixed w-full z-20`}>
      <div className=' container mx-auto  flex justify-between items-center'>
      <Link to ={'/'}>
        <img className = 'w-[40px]' src= {Logo} alt='Logo'/>
      </Link>
      {/* cart */}
      <div onClick ={handleClick} className='cursor-pointer flex relative max-w-[50px]'>
        <BsBag className=' text-xl md:text-2xl'/>
        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemQuantity}</div>
        </div>
        </div>
    </header>
  )
}

export default Header