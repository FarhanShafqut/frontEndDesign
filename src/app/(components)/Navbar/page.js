'use client'
import Link from 'next/link'
import React , {useState , useEffect} from 'react'
// npm add react-icons
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
// import { IconName } from "react-icons/im";
import {ImStarEmpty,ImStarFull} from 'react-icons/im'
import Darktheme from './darkTheme/page'

export default function Navbar() {
  const [nav, Setnav] = useState(false)

  const [dark, Setdark] = useState(false)


const handlenav = () =>{
  Setnav(!nav)
}
const handledark = () =>{
  Setdark(!dark)
}
  return (
    // fixed left-0 top-0  
      <div>
    <div className={dark ? 'dark' : ''}>
        {/* <div onClick={handledark}   className='block  z-10  text-black'>
            {dark ? <ImStarFull size={20} />  :  <ImStarEmpty size={20}  />}
          </div> */}
       <Darktheme/>
    <div  className='bg-slate-800 w-full dark:bg-white  ease-in duration-300 ' >
        <div className='max-w-[1440px]  m-auto flex justify-between items-center p-4  :'>
          <Link href="./">
           <h1   className='font-semibold text-lg text-white ' >Navbar</h1>
          </Link>
        <ul  className='hidden sm:flex text-white' >
          <li Link href='./' className='p-4'> Home</li>
          <li Link href='./' className='p-4'> About</li>
          <li Link href='./' className='p-4'> Contact us</li>
          <li Link href='./' className='p-4'> Work </li>
        </ul>
          {/* Mobile Button  */}
          <div onClick={handlenav}   className='block sm:hidden z-10  text-white'>
            {nav ? <AiOutlineClose size={20} />  :  <AiOutlineMenu size={20}  />}
          </div>
          {/* Mobile menu  */}
          <div className={nav ? 'sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-white ease-in duration-300 ' : 'sm:hidden absolute top-0 left-[-100%] bottom-0 right-0 flex justify-center items-center w-full h-screen bg-black text-white ease-in duration-300 '}>
          <ul>
            <li Link href='./' className='p-4 text-4xl hover:text-gray-500' > Home</li>
            <li Link href='./' className='p-4 text-4xl hover:text-gray-500' > About</li>
            <li Link href='./' className='p-4 text-4xl hover:text-gray-500' > Contact us</li>
            <li Link href='./' className='p-4 text-4xl hover:text-gray-500' > Work </li>
          </ul>
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}
