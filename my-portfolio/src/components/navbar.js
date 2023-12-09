import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../staticFiles/images/logo.png';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#132432] text-gray-300'>
            <div>
                <img src={Logo} alt='Logo Image' style={{ width: '40px' }} /> 
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <HashLink to='#home' smooth>
                        Home
                    </HashLink>
                </li>
                <li>
                    <HashLink to='#about' smooth>
                        About Me
                    </HashLink>
                </li>
                <li>
                    <HashLink to='#project' smooth>
                        Project
                    </HashLink>
                </li>
                <li>
                    <HashLink to='#contact' smooth>
                        Contact Me
                    </HashLink>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#132432] flex flex-col justify-center items-center'
                }
            >
                <li className='py-6 text-4xl'>
                    <HashLink onClick={handleClick} to='#home' smooth>
                        Home
                    </HashLink>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <HashLink onClick={handleClick} to='#about' smooth>
                        About Me
                    </HashLink>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <HashLink onClick={handleClick} to='#project' smooth>
                        Project
                    </HashLink>
                </li>
                <li className='py-6 text-4xl'>
                    {' '}
                    <HashLink onClick={handleClick} to='#contact' smooth>
                        Contact Me
                    </HashLink>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <HashLink
                            className='flex justify-between items-center w-full text-gray-300'
                            to='/'
                        >
                            LinkedIn <FaLinkedin size={30} />
                        </HashLink>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <HashLink
                            className='flex justify-between items-center w-full text-gray-300'
                            to='/'
                        >
                            Github <FaGithub size={30} />
                        </HashLink>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <HashLink
                            className='flex justify-between items-center w-full text-gray-300'
                            to='/'
                        >
                            Email <HiOutlineMail size={30} />
                        </HashLink>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <HashLink
                            className='flex justify-between items-center w-full text-gray-300'
                            to='/'
                        >
                            Resume<BsFillPersonLinesFill size={30}/>
                        </HashLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;