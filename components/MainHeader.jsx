import React from 'react'
import { FaBars } from "react-icons/fa6";

const MainHeader = () => {
    return (
        <div className='bg-amber-100 flex justify-between items-center px-4 h-12 mb-4'>
            <div>Brand</div>
            <div>
                <FaBars className='cursor-pointer' />
            </div>
        </div>
    )
}

export default MainHeader