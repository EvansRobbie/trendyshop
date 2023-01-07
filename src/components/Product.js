import React from 'react'
// import { useGlobalContext } from '../contexts/ProductContext'
import {Link} from 'react-router-dom'
import {BsPlus, BsEyeFill} from 'react-icons/bs'
import { useCartContext } from '../contexts/CartContext'

const Product = ({product}) => {
  // const {products} = useGlobalContext()
  const {id, image, title, category, price} = product
  const {addToCart} = useCartContext()
  // console.log(product)
  return (
    <div>
    <div className='border  border-[#e4e4e4] h-[300px] mb-4 relative rounded-[30px] shadow-xl overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center '>
        {/* image */}
        <div className='w-[200px] mx-auto flex justify-center items-center'>
          <img className= 'max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt={title}/>
        </div>
      </div>
      <div>
        {/* Buttons */}
        <div className='absolute top-6 -right-11 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100
          transition-all duration-300 group-hover:right-5'>
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center rounded-full text-white w-12 h-12 bg-red-500'>
              <BsPlus className=' text-3xl'/>
            </div>
          </button>
          <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl rounded-full'>
            <BsEyeFill/>
          </Link>
        </div>
      </div> 
      </div>
      {/* category, title, price */}
    <div>
      <div className='text-sm text-gray-500 mb-1 capitalize'>{category}</div>
      <Link to ={`/product/${id}`}>
        <h2 className=' font-semibold mb-1'>{title}</h2>
      </Link>
      <div className='font-semibold'>$ {price}</div>
    </div>
    </div>
  )
}

export default Product