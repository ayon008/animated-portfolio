'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { motion, stagger } from 'framer-motion'

const links = [
    { url: '/', name: 'Home' },
    { url: '/about', name: 'About' },
    { url: '/portfolio', name: 'Portfolio' },
    { url: '/contact', name: 'Contact' },
]

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgba(255,255,255)"
        }
    }

    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    }
    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgba(255,255,255)"
        }
    }

    const listVariant = {
        closed: {
            x: "100vw"
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }

    const listedVariant = {
        closed: {
            x: -10,
            opacity: 0
        },
        opened: {
            x: 0,
            opacity: 1
        }
    }


    return (
        <div className='h-full flex items-center justify-between px-2 sm:px-4 md:px-8 lg:px-12 xl:px-20'>
            <div className='hidden md:flex gap-4 text-black w-1/3 text-xl font-medium'>
                {links.map((link, i) => {
                    return (
                        <NavLink link={link} key={i}>{link.name}</NavLink>
                    )
                })}
            </div>
            {/* logo */}
            <div className='md:hidden lg:flex lg:w-1/3 w-fit justify-center'>
                <Link href={'/'} className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
                    <span className='text-white'>Shariar</span>
                    <span className='w-14 rounded flex items-center justify-center bg-white h-8 text-black ml-1'>.Ayon</span>
                </Link>
            </div>
            {/* Social */}
            <div className='hidden md:flex gap-4 w-1/3 justify-end'>
                <Link href={'/'}>
                    <Image src={'/github.png'} alt='github' width={24} height={24} />
                </Link>
                <Link href={'/'}>
                    <Image src={'/dribbble.png'} alt='github' width={24} height={24} />
                </Link>
                <Link href={'/'}>
                    <Image src={'/instagram.png'} alt='github' width={24} height={24} />
                </Link>
                <Link href={'/'}>
                    <Image src={'/facebook.png'} alt='github' width={24} height={24} />
                </Link>
                <Link href={'/'}>
                    <Image src={'/pinterest.png'} alt='github' width={24} height={24} />
                </Link>
                <Link href={'/'}>
                    <Image src={'/linkedin.png'} alt='github' width={24} height={24} />
                </Link>
            </div>
            {/* Responsive Menu */}
            <div className='md:hidden'>
                <button onClick={() => setOpen(!open)} className='w-10 h-8 flex flex-col justify-between z-50 relative'>
                    <motion.div animate={open ? 'opened' : 'closed'} variants={topVariants} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                    <motion.div animate={open ? 'opened' : 'closed'} variants={centerVariants} className='w-10 h-1 bg-black rounded'></motion.div>
                    <motion.div animate={open ? 'opened' : 'closed'} variants={bottomVariants} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                </button>
                {/* Menu items */}
                {
                    open && <motion.div variants={listVariant} initial={'closed'} animate={'opened'} className='absolute h-screen w-screen top-0 left-0 text-white bg-black flex items-center justify-center flex-col gap-8 text-4xl z-40'>
                        {
                            links.map((link, index) => (
                                <motion.div variants={listedVariant} key={index}>
                                    <Link href={link.url}>
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                }
            </div>
        </div>
    );
};

export default Navbar;