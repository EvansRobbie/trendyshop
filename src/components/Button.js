import React from 'react'
import { useSidebarContext } from '../contexts/SiderbarContext'
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io'
import {RxCross2} from 'react-icons/rx'

const Button = () => {
    const {isOpen, handleClick} = useSidebarContext()
  return (
    
    <button onClick={handleClick}>
        <div className=' z-50 top-[70%] left-[80%] shadow-2xl sha my-2 fixed flex flex-col justify-center items-center text-white w-12 h-12 bg-red-500 rounded-full md:hidden '>
        <div className='transition-all duration-700 delay-100'>
        { isOpen ?<div><RxCross2 className='text-xl'/></div>:   <div className='m-0'>
            <IoIosArrowUp className=' text-xl  '/>
            <IoIosArrowDown className=' text-xl  '/>
            </div>}
            </div>
            
            
        </div>
 </button>
       
    
  )
}

export default Button