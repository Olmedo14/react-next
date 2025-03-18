import React from 'react'
import Link from 'next/link'
import MainHeader from './MainHeader'
import { AiOutlineHome, AiOutlineProduct } from "react-icons/ai"
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa"
import { SiHelpscout, SiSinglestore } from "react-icons/si"
import { FiPhoneCall } from "react-icons/fi"


const MainLayout = ({ children }) => {
  return (
    <div className='bg-gray-100 w-screen min-h-screen'>
      <MainHeader />
      <div className='flex justify-start items-start'>
        <aside className='bg-white rounded-lg w-60 p-4'>
          <ul>
            <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
              <AiOutlineHome className='mr-2' />
              <Link href="/">Home</Link>
            </li>
            <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
              <AiOutlineProduct className='mr-2' />
              <h3 className='flex-2'>Proyects</h3>
              <FaAngleRight />
            </li>
            <li className='flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
              <div className='flex flex-row justify-start items-center w-full'>
                <FaCheck className='mr-2' />
                <h3 className='flex-2'>Singular</h3>
                <FaAngleRight />
              </div>
              <ul className='ml-8 mt-4'>
                <li className='flex justify-center items-center gap-3'>
                  <SiSinglestore />
                  <Link href="/singular/selectbox">Select Box</Link>
                </li>
              </ul>
            </li>
            <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
              <FaCheckDouble className='mr-2' />
              <h3 className='flex-2'>Complex</h3>
              <FaAngleRight />
            </li>
            <li className='flex justify-start items-center hover:bg-green-200 hover:text-green-800 rounded-xl p-2'>
              <SiHelpscout className='mr-2' />
              <Link href="/about-us">About us</Link>
            </li>
            <li className='flex justify-start items-center hover:bg-orange-200 hover:text-orange-800 rounded-xl p-2'>
              <FiPhoneCall className='mr-2' />
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout