import React from 'react'
import { useGlobalContext } from '../contexts/ProductContext'
import Product from '../components/Product'
import Hero from '../components/Hero'
import Button from '../components/Button'
const Home = () => {
    const {products} = useGlobalContext()
    

    // const productElement = products.map((product) =>{
    //     const {id,title, price,image} = product
    //     return(
    //         <div key ={id} >
    //             <img src= {image} alt = {title}/>
    //             <h4>{title}</h4>
    //             <p>{price}</p>
    //         </div>
    //     )
    // })
    const filterProducts = products.filter((product) =>{
        const {category} = product
        return category === "men's clothing" || category === "women's clothing"
    })
    // console.log(FilterProducts)
  return (
    <div>
      <Hero/>
       <section className='py-16'>
        <div className='container mx-auto'>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filterProducts.map((product) =>{
                const {id} = product
                return(
                    <Product key = {id} product = {product}/>
                )
            })}
            </div>
            {/* Side bar floatin button toggler */}
            <Button/>
            {/* <button className=' '>Click</button> */}
        </div>

       </section>
    </div>
  )
}

export default Home