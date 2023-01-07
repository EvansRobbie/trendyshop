import { createContext, useState, useEffect, useContext } from "react"

// create context
const ProductContext = createContext()
const ProductProvider = ({children}) => {
    // product state
    const [products, setProducts] = useState([])
    //  fetch products
    const FetchProducts = () =>{
        fetch ('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then( data => setProducts(data))
        
    }
    useEffect (() =>{
        FetchProducts()
    }, [])

    
  return <ProductContext.Provider value={{products}}>
    {children}
  </ProductContext.Provider>
}
export const useGlobalContext = ()=>{
    return useContext(ProductContext)
}

export default ProductProvider