import React,{useState} from 'react'
import './Navbar.scss'
import {images} from '../constants/index'
import { HiMenuAlt4, HiX} from 'react-icons/hi'
import { motion } from 'framer-motion';

const Navbar = () => {

  const [toggle, setToggle] = useState(false)
  const navOptions = ['home', 'about','work', 'skills','contact'];

  return (
    // this is bem method of styling basic rule is use component name follow by __ and style name
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
          <img src={images.myLogo} alt="Logo" />
      </div>
      <ul className='app__navbar-links'>
        {navOptions.map((item)=>(
          <li className='app__flex p-text' key={`li-${item}`}>
          <div />
          <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>


      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={()=> setToggle(true)}/>
          {/* use of motion lib  */}
        
        {toggle && (
          <motion.div
          whileView={{x:[300,0]}}
          transition={{duration:0.85, ease:'easeOut'}}
          >
          <HiX onClick={()=> setToggle(false)} />
          <ul>
            {navOptions.map((item)=>(
            <li key={item} >
            {/* // we have to close the nav bar when we click on some item like contact  */}
            <a href={`#${item}`} onClick={()=> setToggle(false)}>{item}</a>
            </li>          
        ))}
        </ul>

          </motion.div>
        )}
      
      </div>
    </nav>
  )
}

export default Navbar