import React from 'react'
import './TopBar.css';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

const TopBar = () => {
    return (
        <div className='TopBar'>
            <div className='TopBar-menu'>
                <span className='menu-one'>
                    Collapse Inbox

                </span>
                <span className='menu-two'>
                    Create New Task
                    <i class="fa-regular fa-pen-to-square"></i>
                </span>

                <span className='menu-three'>
                    <span className='menu-three-box'>
                        Search
                        <div className='menu-three-icons'>
                            <i class="fa-solid fa-magnifying-glass menu-glass"></i>
                            <i class="fa-solid fa-caret-down menu-down"></i>
                        </div>
                    </span>
                    <span className='cross-icon'>
                        <i class="fa-solid fa-xmark"></i>
                    </span>

                </span>




            </div>
            <div className='TopBar-workpage'>
                <div className='top-frame'>
                    <div className='top-frame-left'>
                        <div className='left-top'>
                            <span className='order'>Order 10234</span>
                            <span className='name'>Task Name</span>
                        </div>
                        <div className='left-bottom'>
                            <span className='desc'>Task description</span>
                            <span className='workflow'>Workflow Name</span>
                        </div>
                    </div>
                    <div className='top-frame-right'>
                        <div className='profile'>
                            <Avatar src='image2.jpg'/>
                        </div>
                        <div className='profile-text'>
                            <div className='profile-top'>
                                <span>Welcome, Mr. Das</span>
                                <span className='logout'>
                                    Logout 
                                    <PowerSettingsNewIcon fontSize='small'/>
                                </span>
                            </div>
                            <div className='profile-bottom'>
                                <span className='admin'>
                                    Admin Mode
                                    <GppMaybeIcon/>
                                </span>
                                <span className='settings'>
                                    Settings
                                    <SettingsIcon/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom-frame'>
                    <div className='bottom-frame-left'>
                        <div className='bottom-left-top'>
                            <span className='top-left'>
                                <span className='text-one'>Created By</span>
                                <span className='text-two'>Name</span>
                            </span>
                            <span className='top-right'>
                                <span className='text-three'>Due date</span>
                                <span className='text-four'>Date</span>
                            </span>
                        </div>
                        <div className='bottom-left-down'>
                        <span className='down-left'>
                                <span className='text-one'>Sent By</span>
                                <span className='text-two'>Name</span>
                            </span>
                            <span className='down-right'>
                                <span className='text-three'>Send to</span>
                                <span className='text-four'>Name</span>
                            </span>
                        </div>
                    </div>
                    <div className='bottom-frame-right'>
                        <span className='files'>
                            <p>Files</p>
                            <i class="fa-regular fa-file"></i>
                        </span>
                        <span className='forward'>
                            <p>Forward</p>
                            <i class="fa-solid fa-share"></i>
                        </span>
                        <span className='send'>
                            <p>Send Back</p>
                            <i class="fa-solid fa-share fa-flip-both"></i>
                        </span>
                        <span className='reject'>
                            <p>Reject</p>
                            <i class="fa-solid fa-ban"></i>
                        </span>
                        <span className='next'>
                            <p>Next Assessor</p>
                            <i class="fa-solid fa-circle-arrow-right"></i>
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar