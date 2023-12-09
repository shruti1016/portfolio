import React from 'react';

const About = () => {
    return (
        <div name='about' id='about' className='w-full h-screen bg-[#408E91] text-[#D8D8D8]'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#E49393]'>
                            About Me
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Shruti Ojha, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I'm a web development enthusiast with a passion for crafting digital experiences. I've got a solid foundation in HTML, CSS, and JavaScript, and I'm always hungry to learn and stay up-to-date with the latest trends in the web development world. I believe in writing clean, efficient code and creating user-friendly interfaces.
                            In addition to my technical skills, I bring a creative mindset to problem-solving and enjoy turning design concepts into functional, responsive websites. I'm a team player, open to collaboration, and excited about the opportunity to contribute to innovative projects. Let's build something awesome together!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;