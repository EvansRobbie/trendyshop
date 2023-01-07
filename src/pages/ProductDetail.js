import React from 'react'
import { useCartContext } from '../contexts/CartContext'
import { useGlobalContext } from '../contexts/ProductContext'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'

const ProductDetail = () => {
  const {id} = useParams()
  // console.log(id)
  const {products} = useGlobalContext()
  const { addToCart } = useCartContext()

  // get a single product base on id

  const product = products.find((item) =>{
    return item.id === parseInt(id)
  })
  // console.log(product)
  // if product not found
  if  (!product){
    return <section className='h-screen flex justify-center items-center'>Loading..</section>
  }

  const {id:p_id,title, description, price, image} = product
  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
        <div className='container mx-auto'>
          {/* image and text wrapper */}
          <div className='flex flex-col lg:flex-row items-center'>
            
            {/* image */}
            <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
              <img className='max-w-[200px] drop-shadow-sm rounded-xl lg:max-w-sm' src={image} alt ={title}/>
            </div>
            {/* text */}
            <div className='flex-1 text-center lg:text-left  '>
              <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
              <div className='text-xl text-red-500 font-medium mb-6'>$ {price}</div>
              <p className='mb-8'>{description}</p>
              <button onClick={()=> addToCart(product, p_id)} className='bg-primary py-2 px-6 mb-20 text-white rounded-lg hover:scale-x-110'>Add to cart</button>
            </div>
          </div>
          {/* the side bar floating button toggler */}
              <Button/>
        </div>
    </section>
  )
}

export default ProductDetail