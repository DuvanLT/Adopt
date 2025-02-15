import { useState } from 'react'
export function useToggleMenu() {
    const [isOpen,setOpenMenu] = useState(false)
    const toggleMenu = () => setOpenMenu(!isOpen)
    return {isOpen, toggleMenu}
}