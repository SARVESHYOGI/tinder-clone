import React from 'react'
import { IconButton } from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';


function SwapButtons() {
    return (
        <div>
            <div>

            </div>
            <div className='flex justify-between w-[60%] mx-auto items-center bg-gray-100 mt-2 p-2 px-10 rounded-full'>
                <IconButton>
                    <ReplayIcon fontSize='large' className='header__icon text-red-600' />
                </IconButton>

                <IconButton>
                    <CloseIcon fontSize='large' className='header__icon text-yellow-600' />
                </IconButton>

                <IconButton>
                    <StarRateIcon fontSize='large' className='header__icon text-purple-600' />
                </IconButton>

                <IconButton>
                    <FavoriteIcon fontSize='large' className='header__icon  text-pink-400' />
                </IconButton>

                <IconButton>
                    <FlashOnIcon fontSize='large' className='header__icon text-green-500' />
                </IconButton>

            </div>
        </div>
    )
}

export default SwapButtons