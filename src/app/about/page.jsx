"use client"
import React, { useRef } from 'react';
import { motion, useInView, useScroll } from 'framer-motion'
import Brain from '../components/Brain';
import Image from 'next/image';
import profilePic from '@/../public/IMG_0106_result_result_result2.jpg';
const Page = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        container: containerRef
    })
    const skillRef = useRef(null);
    const experienceRef = useRef(null);
    const isSkillsVisible = useInView(skillRef, { once: true });
    const isExperienceVisible = useInView(experienceRef, { once: true });
    return (
        <motion.div
            className="h-full"
            animate={{ y: "0%" }}
            initial={{ y: "-200vh" }}
            transition={{ duration: 1 }}
        >
            <div className='h-full'>
                <div ref={containerRef} className='h-full lg:flex justify-center overflow-y-scroll'>
                    {/* Text Container */}
                    <div className='p-2 sm:p-4 md:p-8 lg:p-12 xl:p-20 flex flex-col gap-12 lg:w-2/3 lg:pr-0 xl:w-1/2 h-full'>
                        <div className='flex flex-col gap-6 justify-center min-h-[calc(100vh-6rem)]'>
                            <div className='relative'>
                                <Image src={profilePic} className='w-56 h-56 rounded-full' width={224} height={224} alt='profile-pic' />
                            </div>
                            <h1 className='text-2xl font-bold'>Biography</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat blanditiis voluptatibus quisquam nam eos aut vero mollitia nesciunt possimus nemo!</p>
                            <span className='italic'>Lorem ipsum dolor sit amet.</span>
                            <motion.svg
                                initial={{ opacity: 0.2, y: 0 }}
                                animate={{ opacity: 1, y: "10px" }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width={50}
                                height={50}
                            >
                                <path
                                    d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                    stroke="#000000"
                                    strokeWidth="1"
                                ></path>
                                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                                <path
                                    d="M15 11L12 14L9 11"
                                    stroke="#000000"
                                    strokeWidth="1"
                                ></path>
                            </motion.svg>
                        </div>
                        <div className='flex flex-col gap-6 justify-center' ref={skillRef}>
                            <motion.h1 initial={{ x: '-300px' }} animate={isSkillsVisible ? { x: 0 } : {}}
                                transition={{ delay: 0.5 }} className='text-2xl font-bold'>Skills</motion.h1>
                            <motion.div
                                initial={{ x: '-500px' }} animate={isSkillsVisible ? { x: 0 } : {}}
                                className='flex gap-2 flex-wrap'>
                                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
                                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>TypeScript</div>
                                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>React Js</div>
                                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Node Js</div>
                                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>MongoDB</div>
                                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Next Js</div>
                                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Tailwind Css</div>
                                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Wordpress</div>
                                <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>REST API</div>
                            </motion.div>
                            <motion.svg
                                initial={{ opacity: 0.2, y: 0 }}
                                animate={{ opacity: 1, y: "10px" }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                width={50}
                                height={50}
                            >
                                <path
                                    d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                    stroke="#000000"
                                    strokeWidth="1"
                                ></path>
                                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                                <path
                                    d="M15 11L12 14L9 11"
                                    stroke="#000000"
                                    strokeWidth="1"
                                ></path>
                            </motion.svg>
                        </div>
                        <div className='flex flex-col gap-6 justify-center' ref={experienceRef}>
                            <motion.h1 initial={{ x: '-300px' }} animate={isExperienceVisible ? { x: 0 } : {}}
                                transition={{ delay: 0.5 }} className='text-2xl font-bold'>Experience</motion.h1>
                            {/* Experience */}
                            <motion.div
                                initial={{ x: '-500px' }} animate={isExperienceVisible ? { x: 0 } : {}}
                                className=''>
                                <div className='flex justify-between h-64'>
                                    {/* left */}
                                    <div className='w-1/3'>
                                        {/* Job tittle */}
                                        <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior JavaScript Developer</div>
                                        <div className='text-sm p-3 italic'>
                                            My Current Employment. Way better than the position before.
                                        </div>
                                        <div>
                                            <div className='text-red-400 text-sm font-semibold p-3'>2022 - Present</div>
                                            <div className='bg-white p-1 rounded text-sm font-semibold w-fit'>Apple</div>
                                        </div>
                                    </div>
                                    {/* center */}
                                    <div className='w-1/6 h-full flex items-center justify-center'>
                                        {/* circle */}
                                        <div className='w-1 h-full bg-gray-600 rounded relative'>
                                            <div className='w-5 h-5 ring-4 rounded-full ring-red-400 absolute bg-white -left-2'></div>
                                        </div>
                                    </div>
                                    {/*right*/}
                                    <div className='w-1/3'>

                                    </div>
                                </div>
                                <div className='flex justify-between h-64'>
                                    {/* left */}
                                    <div className='w-1/3'>
                                        {/* Job tittle */}

                                    </div>
                                    {/* center */}
                                    <div className='w-1/6 h-full flex items-center justify-center'>
                                        {/* circle */}
                                        <div className='w-1 h-full bg-gray-600 rounded relative'>
                                            <div className='w-5 h-5 ring-4 rounded-full ring-red-400 absolute bg-white -left-2'></div>
                                        </div>
                                    </div>
                                    {/*right*/}
                                    <div className='w-1/3'>
                                        {/* Job tittle */}
                                        <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior JavaScript Developer</div>
                                        <div className='text-sm p-3 italic'>
                                            My Current Employment. Way better than the position before.
                                        </div>
                                        <div>
                                            <div className='text-red-400 text-sm font-semibold p-3'>2022 - Present</div>
                                            <div className='bg-white p-1 rounded text-sm font-semibold w-fit'>Apple</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between h-64'>
                                    {/* left */}
                                    <div className='w-1/3'>
                                        {/* Job tittle */}
                                        <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Senior JavaScript Developer</div>
                                        <div className='text-sm p-3 italic'>
                                            My Current Employment. Way better than the position before.
                                        </div>
                                        <div>
                                            <div className='text-red-400 text-sm font-semibold p-3'>2022 - Present</div>
                                            <div className='bg-white p-1 rounded text-sm font-semibold w-fit'>Apple</div>
                                        </div>
                                    </div>
                                    {/* center */}
                                    <div className='w-1/6 h-full flex items-center justify-center'>
                                        {/* circle */}
                                        <div className='w-1 h-full bg-gray-600 rounded relative'>
                                            <div className='w-5 h-5 ring-4 rounded-full ring-red-400 absolute bg-white -left-2'></div>
                                        </div>
                                    </div>
                                    {/*right*/}
                                    <div className='w-1/3'>

                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    {/* SVG Container */}
                    <div className='lg:block hidden h-full w-1/3 xl:w-1/2 pt-2 sm:pt-4 md:pt-8 lg:pt-12 xl:pt-20 sticky top-0 z-30'>
                        <Brain scrollYProgress={scrollYProgress} />
                    </div>
                </div>
            </div>
        </motion.div >
    );
};

export default Page;