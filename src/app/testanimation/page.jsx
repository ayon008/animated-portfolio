'use client'
import React from 'react';
import { motion } from 'framer-motion'

const page = () => {
    const variants = {
        variant1: { x: 100, y: 300, opacity: 0.5 },
        variant2: { x: 100, y: -300, rotation: 90 }
    }
    return (
        <div className='h-full flex items-center justify-center'>
            <motion.div variants={variants} className='w-96 h-96 bg-red-500 rounded' initial={{ x: -100 }} animate={'variant2'}
                transition={{ delay: 2, duration: 4 }}
            >

            </motion.div>
        </div>
    );
};

export default page;