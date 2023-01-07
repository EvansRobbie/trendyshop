import {createContext, useContext, useEffect, useState} from 'react'
// create context
const SiderbarContext = createContext()

const SiderbarProvider = ({children}) => {
  // ===========HEADER STATE========
  const [isActive, setIsActive] = useState(false)
    // set sidebar state
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () =>{
        setIsOpen(prevClick => !prevClick)
    }

    const handleClose = () =>{
        setIsOpen(false)
    }

    // ===== Header Event Listener ====
    useEffect (() =>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
      })
    })

  return <SiderbarContext.Provider value={{isOpen, handleClick, handleClose, isActive}}>
    {children}
  </SiderbarContext.Provider>
}
export const useSidebarContext = ()=>{
    return useContext(SiderbarContext)
}

export default SiderbarProvider