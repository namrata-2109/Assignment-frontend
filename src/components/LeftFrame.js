import React from 'react'
import TaskData from './TaskData'
import './LeftFrame.css';

const LeftFrame = () => {
    return (
        <>
            <div className='LeftFrame'>
                {TaskData.map((value) => {
                    return (
                        <div className='block' style={value.cssss}>
                            <div className='top'>
                                <p>{value.title}</p>
                                <p>{value.time} </p>
                            </div>
                            <span className='middle'>
                                <h6>{value.name}</h6>
                                <span><i class="fa-regular fa-star"></i> </span>
                            </span>
                            <span className='end'>
                                <p>{value.desc} </p>
                            </span>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

export default LeftFrame