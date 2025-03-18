import React from 'react'
import UserAreaSelectBox from "./UserAreaSelectBox"
import LanguageSelectBox from './LanguageSelectBox';

const MainHeader = () => {
    return (
        <div className='bg-white flex justify-between items-center px-4 h-12 mb-4'>
            <div>Brand</div>
            <div className='flex justify-center items-center gap-5'>
                <div>
                    <LanguageSelectBox />
                </div>
                <div>
                    <UserAreaSelectBox />
                </div>

            </div>
        </div>
    )
}

export default MainHeader