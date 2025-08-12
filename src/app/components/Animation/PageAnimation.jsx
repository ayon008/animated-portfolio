'use client'
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const PageAnimation = ({ children }) => {
    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
            <motion.div key={pathName}>
                {/* Black background animation */}
                <motion.div
                    className="w-screen h-screen fixed bg-black rounded-b-[100px] z-40"
                    animate={{ height: "0vh" }}
                    exit={{ height: "130vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.div
                    className="fixed m-auto inset-0 text-white text-6xl cursor-default z-50 w-fit h-fit"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {pathName.substring(1) || "Home"}
                </motion.div>

                <motion.div
                    className="h-screen w-screen fixed bottom-0 bg-black rounded-t-[100px] z-30"
                    initial={{ height: "130vh" }}
                    animate={{ height: "0vh" }}
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.5,
                    }}
                />
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageAnimation;