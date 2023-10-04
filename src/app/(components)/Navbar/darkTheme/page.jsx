import React from 'react'
import { useTheme } from 'next-themes'
const Darktheme = () => {
    const {resolvedTheme , setTheme} = useTheme()
  return (
    <div>
        <button onClick={()=>setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {resolvedTheme === 'dark' ? 'light' : 'dark'}
        </button>
    </div>
  )
}

export default Darktheme