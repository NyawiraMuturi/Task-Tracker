import React from 'react'
import Button from './Button'

const Header = () => {
    const onClick = ()=> {
        alert('Hey, I am learning react')
    }

    return (
        <header className='header'>
        <h1>Task Manager</h1>
        <Button color='green' text='ADD' onClick={onClick} />
        </header>
    )
}


export default Header
