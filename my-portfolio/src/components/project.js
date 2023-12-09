import React from 'react'

const Project = () => {
    return (
        <section id='project' className='bg-[#132432] pt-16'>
            <div name='project' className='w-full md:h-screen text-gray-300'>
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#E49393]'>
                            Projects
                        </p>
                        <p className='py-6'>// Check out some of my recent project</p>
                    </div>

                    {/* container for projects */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-[#2d4d79] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div">
                                {/* Hover effect for images */}
                                <div className="p-2 opacity-100">
                                    <span className="text-2xl font bold text-white tracking-wider">
                                        Name
                                    </span>
                                    <div className="pt-2 text-center">
                                        <span> Tech Used</span>
                                    </div>
                                    <div className="pt-2 text-center">
                                        <span>Desc</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;