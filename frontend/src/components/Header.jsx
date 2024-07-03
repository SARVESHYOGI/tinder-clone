import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (

        <div className='flex justify-between w-[60%] mx-auto items-center bg-gray-100 mt-2 p-2 px-10 rounded-full'>

            <div>
                <IconButton>
                    <PersonIcon fontSize='large' className='header__icon' />
                </IconButton >
            </div>
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/018/910/833/original/tinder-app-logo-tinder-app-icon-free-free-vector.jpg" alt="" srcSet="" className='h-16' />
            </div>
            <div>
                <IconButton>
                    <ForumIcon fontSize='large' className='header__icon' />
                </IconButton >
            </div>
        </div>
    )
}

export default Header