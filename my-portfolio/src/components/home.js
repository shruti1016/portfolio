import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';

const Home = () => {
    return (
        <div name='home' id='home' className='w-full h-screen bg-[#132432]'>
            
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#E49393]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                    Shruti Ojha
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#BAD7E9]'>
                    I'm a Full Stack Developer.
                </h2>
                <p className='text-[#BAD7E9] py-4 max-w-[700px]'>
                    Full-Stack, HTML, CSS, JavaScript, Node.js, Python, Responsive Design, React, Collaboration, Problem-Solving, User Experience, Detail-Oriented, Project Ownership, Adaptability, Continuous Learning.
                </p>
                <div>
                    <HashLink to='#project' smooth>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#E49393] hover:border-[#F9DBBB]'>
                            View Projects
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3 ' />
                            </span>
                        </button>
                    </HashLink>
                </div>
            </div>
        </div>
    );
};

export default Home;