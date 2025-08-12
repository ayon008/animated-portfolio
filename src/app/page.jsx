"use client"
import Image from "next/image";
import { motion } from 'framer-motion'
const Homepage = () => {
  return <motion.div
    className="h-full"
    animate={{ y: "0%" }}
    initial={{ y: "-200vh" }}
    transition={{ duration: 1 }}
  >
    <div className="h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col lg:flex-row w-full">
      <div className="h-1/2 lg:h-full lg:w-1/2 w-full relative">
        {/* Image container */}
        <Image src={'/hero.png'} alt="" fill className="object-contains"></Image>
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 w-full flex flex-col gap-8 items-center justify-center">
        {/* Text container */}
        <h1 className="sm:text-4xl text-3xl font-bold w-full text-left">Crafting Digital Experiences,Designing Tomorrow.</h1>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus neque odit tempore quos molestias laboriosam impedit ea debitis. Natus voluptatibus laborum cum explicabo sequi sint repudiandae error autem quasi.</p>
        {/* button */}
        <div className="flex gap-4 w-full">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black ">Contact me</button>
        </div>
      </div>
    </div>
  </motion.div>;
};

export default Homepage;
