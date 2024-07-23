import React from 'react';
import logo from '../logo.jpeg'

const Header = () => {
  return (
    <div className='header'>
       <div className='card1 hcard1'><h1>Almighty</h1></div>
       <div className='card1 imgcard'><img src={logo} alt='Loading'></img></div>
       <div className='card1 hcard2'><h1>Technology</h1></div>
    </div>
  )
}

export default Header