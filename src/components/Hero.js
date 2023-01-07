import React from 'react'
import { Link } from 'react-router-dom'
import woman from '../img/woman-img.png'

const Hero = () => {
  return (
    <section className='bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
        <div className='container mx-auto flex justify-around h-full'>
          {/*  text */}
          <div className='flex flex-col justify-center'>
            <div className='font-semibold flex items-center uppercase'>
              <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
            </div>
            <h1 className=' uppercase text-[70px] leading-[1.1] font-light mb-4'>Autumn sale trendy<br/>
              <span className='font-semibold'>Women's</span>
            </h1>
            <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover more</Link>
          </div>
          {/* image */}
          <div className='hidden lg:block'>
            <img src={woman} alt='shopping'/>
          </div>

        </div>
      </section>
  )
}

export default Hero