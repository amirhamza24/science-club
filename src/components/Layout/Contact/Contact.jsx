// import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="w-10/12 mx-auto pb-20">
            <div className="contact-img w-full h-80 body-font">
                <div className='w-9/12 mx-auto h-full'>
                    <div className='flex flex-col justify-center items-center h-full space-y-16'>
                        <div>
                            <h2 className='text-4xl font-bold title-font'>Need Any help?</h2>
                        </div>

                        <div className='flex gap-10'>
                            <input type="email" name="email" placeholder='Email'  className="bg-transparent py-2 focus:outline-none border-b text-white placeholder-white" />

                            <input type="text" name="text" placeholder='Details'  className="bg-transparent py-2 focus:outline-none border-b text-white placeholder-white w-96" />

                            <button className='bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7] text-white py-2 px-6 rounded-lg'>Sent</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;