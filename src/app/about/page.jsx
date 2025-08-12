"use client"
import React from 'react';
import { motion } from 'framer-motion'

const page = () => {
    return (
        <motion.div
            className="h-full"
            animate={{ y: "0%" }}
            initial={{ y: "-200vh" }}
            transition={{ duration: 1 }}
        >
            <div className='h-full flex items-center justify-between'>
                {/* Text Container */}
                <div className='pl-4 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-48 flex flex-col gap-12 overflow-y-auto'>
                    <div className='flex flex-col gap-6 justify-center'>
                        <h1 className='text-2xl font-bold'>Biography</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat blanditiis voluptatibus quisquam nam eos aut vero mollitia nesciunt possimus nemo!</p>
                        <span className='italic'>Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className='flex flex-col gap-6 justify-center'>
                        <h1 className='text-2xl font-bold'>Skills</h1>
                        <div className='flex gap-2 flex-wrap'>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>TypeScript</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>React Js</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Node Js</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>MongoDB</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Next Js</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Tailwind Css</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Wordpress</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>REST API</div>
                        </div>
                    </div>
                    <div>Experience</div>
                </div>
                {/* SVG Container */}
                <div>

                </div>
            </div>
        </motion.div>
    );
};

export default page;