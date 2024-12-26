import React from 'react'
import Navbar from './Home'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return <>
        <div>
            <div className='fixed w-full z-30'>
                <Navbar />
            </div>
            <div className='pt-16'>
                <Outlet />
            </div>
        </div>
    </>
}

export default Layout