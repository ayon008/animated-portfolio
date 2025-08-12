"use client"
import React from 'react';
import { motion } from 'framer-motion'

const Page = () => {
    const text = 'Say Hello'
    return (
        <motion.div
            className="h-full"
            animate={{ y: "0%" }}
            initial={{ y: "-200vh" }}
            transition={{ duration: 1 }}
        >
            <div className='flex lg:flex-row flex-col h-full p-2 sm:p-4 md:p-8 lg:p-12 xl:p-20'>
                {/* Text Container */}
                <div className='h-1/2 lg:h-full w-full lg:w-1/2 flex items-center justify-center text-4xl'>
                    <div>
                        {
                            text.split('').map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 0 }}
                                    transition={{ delay: index * 0.1, repeat: Infinity, duration: 3 }}
                                >
                                    {char}
                                </motion.span>
                            ))
                        }
                        😊
                    </div>
                </div>
                {/* Form */}
                <div className='h-1/2 lg:h-full w-full lg:w-1/2'>
                    <form
                        onSubmit={sendEmail}
                        ref={form}
                        className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-16"
                    >
                        <span>Dear Shariar Ayon,</span>
                        <textarea
                            rows={6}
                            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
                            name="user_message"
                        />
                        <span>My mail address is:</span>
                        <input
                            name="user_email"
                            type="text"
                            className="bg-transparent border-b-2 border-b-black outline-none"
                        />
                        <span>Regards</span>
                        <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
                            Send
                        </button>
                        {success && (
                            <span className="text-green-600 font-semibold">
                                Your message has been sent successfully!
                            </span>
                        )}
                        {error && (
                            <span className="text-red-600 font-semibold">
                                Something went wrong!
                            </span>
                        )}
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Page;