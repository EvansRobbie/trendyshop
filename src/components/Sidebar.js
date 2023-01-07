import React from 'react'
import { Link } from 'react-router-dom' 
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
// import cartitem component
import CartItems from './CartItems'
import { useSidebarContext } from '../contexts/SiderbarContext'
import { useCartContext } from '../contexts/CartContext'

const Sidebar = () => {
  const {isOpen, handleClose} = useSidebarContext()
  const {cart, clearCart, itemQuantity, total} = useCartContext()
  // console.log(useCartContext())
  const cartElement = cart.map((item) =>{
    const {id} = item
    return(
      <CartItems key ={id} item = {item}/>
      
    )
  })
  return (
    <div className={`${isOpen ? 'right-0':'-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:max-w-[35vw] xl:max-w-[30vw] transition-all
      duration-700 z-20 px-4 lg:px-[35px]`}>
        <div className='flex items-center justify-between py-6 border-b'>
          <div className=' uppercase text-sm font-semibold'>Shopping Bag ({itemQuantity})</div>
          <div onClick={handleClose} className=' flex cursor-pointer w-8 h-8 justify-center items-center'>
            <IoMdArrowForward className='text-2xl'/>
          </div>
        </div>
        <div className='flex flex-col gap-y-2 h-[320px] lg:h-[350px] overflow-y-auto overflow-x-hidden border-b'>
          {cartElement}
        </div>
        <div className=' flex flex-col gap-y-3 py-4 mt-4'>
          <div className='w-full  flex justify-between items-center '>
            {/* total */}
            <div className='uppercase font-semibold'>
              <span className='mr-2'>Total</span> $ {parseFloat(total).toFixed(2)}
            </div>
            {/* clear cart */}
            <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 rounded-full text-white w-12 h-12 flex justify-center items-center'>
              <FiTrash2/>
            </div>
          </div>
          <Link to={'/'} className='bg-gray-200 p-4 flex justify-center items-center text-primary w-full font-medium'>View Cart</Link>
          <Link to={'/'} className='bg-primary p-4 flex justify-center items-center text-white w-full font-medium'>Checkout</Link>
          
        </div>
    </div>
  )
}

export default Sidebar