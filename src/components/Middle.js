import React from 'react'
import './Middle.css'
import CloseIcon from '@mui/icons-material/Close';

const Middle = () => {
    return (
        <>
            <div className='image'>
                <img src='image.jpg' alt='screenshot' className='middle-image' />

                <div className='comment-box'>
                    <div className='cross-text'>
                        <span className='close-one'>
                            <CloseIcon />
                            Data_file.xls
                        </span>
                        <span className='close-two'>
                            <CloseIcon />
                            Report_1.pdf
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Middle