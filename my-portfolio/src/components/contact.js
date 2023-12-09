import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='bg-[#408E91] pt-16'>
            <div name='contact' id='contact' className='w-full h-screen bg-[#408E91] flex justify-center items-center p-4'>
                <form className='flex flex-col max-w-[600px] w-full'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#E49393] text-gray-300'>Contact Me</p>
                        <p className='text-gray-300 py-4'>// Submit the form below </p>
                    </div>
                    <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                    <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                    <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                    <button className='text-white border-2 hover:bg-[#E49393] hover:border-[#E49393] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>

                </form>
            </div>
        </section>
    )
}

export default Contact