import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = () => {

    // const [userName, setuserName] = useState('')

    // if(!data) {
    //     setuserName('Ritam Sanyal')
    // }
    // else {
    //     setuserName(data.name)
    // }

    // console.log(data)

    const logout = () => {
        localStorage.setItem("loggedInUser", '');
        window.location.reload();
    }
    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>userName 👋🏽</span></h1>
            <button onClick={logout} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-md'>Logout</button>
        </div>
    )
}

export default Header