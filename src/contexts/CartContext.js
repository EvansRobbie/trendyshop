import {createContext, useContext, useState, useEffect} from 'react'
// create context
const CartContext = createContext()
const CartProvider = ({children}) => {
    const [cart , setCart] =  useState(JSON.parse(localStorage.getItem('cartitem'))|| [] )
    // Item quantity state  
    const [itemQuantity, setItemQuantity] = useState(0)
    //  set total state
    const [total, setTotal] = useState(0)

    const addToCart = (product , id) =>{
        // const{title} = product
        // console.log(`item ${title}added to cart`)
        const newItem = {...product, quantity:1}
        // console.log(newItem)
        // check if item already in cart
        const cartItem = cart.find((item)=>{
            return item.id === id
        })
        // if cart item already exists in the cart
        if (cartItem){
            const newCart =[...cart].map((item)=>{
                if(item.id === id){
                    return {...item, quantity:cartItem.quantity + 1}
                }else{
                    return item
                }
            })
            setCart(newCart)
            // localStorage.setItem('cartitem', JSON.stringify(newCart))
        }else{
            const newCart = [...cart, newItem]
            setCart(newCart)
            // localStorage.setItem('cartitem', JSON.stringify(newCart))
        }
        // localStorage.setItem('cartitem', JSON.stringify(newItem))
    }

    const removeFromCart = (id)=>{
        const newCart =cart.filter((item)=>{
            return item.id !== id
        })
        setCart(newCart)
        // localStorage.setItem('cartitem', JSON.stringify(newCart))
    }
    // console.log(cart)
    const clearCart =() =>{
        setCart([])
    }
    // increase quantity
    const increaseQuantity = (id) =>{
        // console.log('quantity increase')
        const cartItem = cart.find((item) =>{
            return item.id === id
        })
        // console.log(newQuantity)
        addToCart(cartItem, id)
    }
    const decreaseQuantity = (id) =>{
        const cartItem = cart.find((item) => item.id === id)
        if (cartItem){
            const newCart = cart.map((item) =>{
                if (item.id === id){
                    return {...item, quantity: cartItem.quantity -1}

                }else{
                    return item
                }
            })
            setCart(newCart)
        }
        if(cartItem.quantity < 2){
            removeFromCart(id)
        }
        
        
    }
    // ===update item quantity ===
    useEffect (() =>{
        if (cart){
              const quantity = cart.reduce((accumulator, currentItem) =>{
                return accumulator + currentItem.quantity
            }, 0)
            setItemQuantity(quantity)
        }
        
    }, [cart])
// save o local storage
    useEffect (()=>{
        localStorage.setItem('cartitem', JSON.stringify(cart))
    }, [cart])
// ===== Total cart items price ========
    useEffect(()=>{
        const total = cart.reduce((accumulator, currentItem) =>{
            return accumulator + currentItem.price * currentItem.quantity
        }, 0)
        setTotal(total)
    }, [cart])

  return (
    <CartContext.Provider value={{
            addToCart, 
            cart,
            removeFromCart,
            clearCart, 
            increaseQuantity,
            decreaseQuantity,
            itemQuantity,
            total
            
        }}>
        {children}
    </CartContext.Provider>
  )
}
export const useCartContext = () =>{
    return useContext(CartContext)
}
export default CartProvider