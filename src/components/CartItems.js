 import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdAdd, IoMdClose, IoMdRemove} from 'react-icons/io'
import { useCartContext } from '../contexts/CartContext'

const CartItems = ({item}) => {
  const {id, image, price, quantity,title} = item
  const {removeFromCart, decreaseQuantity, increaseQuantity} = useCartContext()
  return (
    <div className=' flex gap-x-4 py-2 lg:px-6 border-b border-gray-500 w-full font-light text-gray-500 '>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <Link to= {`/product/${id}`}>
          <img className=' max-w-[80px]' src={image} alt={title}/>
        </Link>
        <div className='w-full flex flex-col'>
          {/* title and delete icon */}
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline '>
              {title}
            </Link>
            {/* remove icon */}
            <div className='text-xl cursor-pointer' onClick={ ()=>removeFromCart(id)}>
              <IoMdClose  className='text-gray-500 hover:text-red-500 transition '/>
              </div>
          </div>
          <div className=' flex gap-x-2 h-[36px] text-sm' >
            {/* quantity */}
            <div className='flex flex-1 max-w-[100px]  items-center h-full border font-medium text-primary'>
              {/* minus icon */}
              <div  onClick={() => decreaseQuantity(id)} className='flex-1 flex justify-center items-center cursor-pointer'>
              <IoMdRemove/>
              </div>
              {/* qtty */}
              <div className='h-full flex justify-center items-center  px-2 '>{quantity}</div>
              {/* plus icon */}
              <div onClick={() => increaseQuantity(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <IoMdAdd/>
              </div>
            </div>
            {/* price */}
            <div className='flex-1 flex justify-around items-center'>$ {price     }</div>
            {/* final price */}
            {/* make price to have 2 dp */}
            <div className='flex-1 flex  justify-end items-center text-primary font-medium'>{`$ ${parseFloat( price * quantity).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems