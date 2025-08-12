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

        </motion.div>
    );
};

export default page;