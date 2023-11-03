// import React from 'react';
import committee from '../../../assets/committee/committee.png'

const Committee = () => {
    return (
        <div className='pb-28 pt-10'>
            <div className='w-10/12 mx-auto h-full'>
                <div className='flex items-center justify-center h-full'>
                    <div className='text-center space-y-6'>
                        <div>
                            <h2 className='title-font text-5xl font-bold'>Executive Committee 2023</h2>
                        </div>

                        <div className='body-font font-light'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis totam numquam distinctio? Corporis labore <br /> animi unde. Sequi quia ullam dolores assumenda praesentium nisi, cumque culpa quis.</p>
                        </div>

                        <div className='grid grid-cols-4 gap-7 pt-7'>
                            <div className='relative rounded-2xl bg-[#000D37] py-4 px-2 mb-20'>
                                <div className="rounded-2xl overflow-hidden">
                                    <img src={committee} className='rounded-2xl' alt="" />
                                </div>

                                <div className="absolute -bottom-10 left-0 w-full">
                                    <div className="space-y-2 pt-28 p-5 bg-gradient-to-b from-transparent to-[#0478dd] rounded-2xl">
                                        <h3 className='title-font font-semibold'>Mahfuzur Rahman Ongkon</h3>

                                        <p className='text-[#1ED2DD] body-font text-sm font-light'>Joint Secretary of Sponsorship and Communication</p>
                                    </div>
                                </div>
                            </div>

                            <div className='relative rounded-2xl bg-[#000D37] py-4 px-2 mb-20'>
                                <div className="rounded-2xl overflow-hidden">
                                    <img src={committee} className='rounded-2xl' alt="" />
                                </div>

                                <div className="absolute -bottom-10 left-0 w-full">
                                    <div className="space-y-2 pt-28 p-5 bg-gradient-to-b from-transparent to-[#0478dd] rounded-2xl">
                                        <h3 className='title-font font-semibold'>Mahfuzur Rahman Ongkon</h3>

                                        <p className='text-[#1ED2DD] body-font text-sm font-light'>Joint Secretary of Sponsorship and Communication</p>
                                    </div>
                                </div>
                            </div>

                            <div className='relative rounded-2xl bg-[#000D37] py-4 px-2 mb-20'>
                                <div className="rounded-2xl overflow-hidden">
                                    <img src={committee} className='rounded-2xl' alt="" />
                                </div>

                                <div className="absolute -bottom-10 left-0 w-full">
                                    <div className="space-y-2 pt-28 p-5 bg-gradient-to-b from-transparent to-[#0478dd] rounded-2xl">
                                        <h3 className='title-font font-semibold'>Mahfuzur Rahman Ongkon</h3>

                                        <p className='text-[#1ED2DD] body-font text-sm font-light'>Joint Secretary of Sponsorship and Communication</p>
                                    </div>
                                </div>
                            </div>

                            <div className='relative rounded-2xl bg-[#000D37] py-4 px-2 mb-20'>
                                <div className="rounded-2xl overflow-hidden">
                                    <img src={committee} className='rounded-2xl' alt="" />
                                </div>

                                <div className="absolute -bottom-10 left-0 w-full">
                                    <div className="space-y-2 pt-28 p-5 bg-gradient-to-b from-transparent to-[#0478dd] rounded-2xl">
                                        <h3 className='title-font font-semibold'>Mahfuzur Rahman Ongkon</h3>

                                        <p className='text-[#1ED2DD] body-font text-sm font-light'>Joint Secretary of Sponsorship and Communication</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=''>
                            <button className='bg-gradient-to-r from-[#4C6CDC] to-[#00BBC7] text-white py-2 px-6 rounded-lg text-xl body-font'>All Member</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Committee;