import { useState } from 'react';

import NavBars from './NavBars'

import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

import './Header.css'

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const handleClick = () => {
    if(!navActive) {
      setNavActive(true)
    }else {
      setNavActive(false)
    }
  }

  return (
    <>
    <header>
        <div>
            <span className="text-header">Portfolio</span>
        </div>
        <div className='icons' onClick={handleClick}>
          <div className={navActive ? `hidden` : ''}>
            <FiMenu className='icon-menu' />
          </div>
          <div className={navActive ? '' : 'hidden' }>
            <IoCloseOutline className='icon-close' />
          </div>
        </div>
    </header>
    <div className={navActive ? 'nav-bars' : 'hidden' }>
      <NavBars />
    </div>
    </>
  )
}

export default Header