import React from 'react'

const Footer = () => {
  let today = new Date()
  return (
    <footer className='bg-primary p-6'>
      <div className='container mx-auto '>
        <p className='text-white text-center'>Copyright &copy; Ecommerce Shop {today.getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer