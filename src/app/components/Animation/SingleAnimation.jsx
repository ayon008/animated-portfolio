"use client"
import React from 'react';
import { motion } from 'framer-motion'
const SingleAnimation = ({ children }) => {
    return (
        <motion.div
            className='h-full'
            initial={{ y: "-200vh", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default SingleAnimation;