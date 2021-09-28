import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <header className='header'>
        <h1>Task Manager</h1>
        <Button color='green' text='ADD' />
        </header>
    )
}


export default Header
