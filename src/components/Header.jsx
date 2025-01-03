import React from 'react'
import Navbar from './Navbar'
import { motion } from 'motion/react'


const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' 
    style={{backgroundImage: "url('./header_img.png')"}} id='Header'>
        <Navbar />
        <motion.div 
        initial={{ opacity:0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='container mx-auto text-white text-center py-4 px-6 md:px-20 lg:px-32'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
                Explore homes that fit your dreams
            </h2>
            <div className='space-x-6 mt-16'>
                {/* <a href='#' className='border border-white px-8 py-3 rounded'>Get Started</a> */}
                <a href='#Projects' className='border border-white px-8 py-3 rounded'>Projects</a>
                <a href='#Contact' className='border bg-blue-500 hover:bg-blue-600 border-white px-8 py-3 rounded'>Contact Us</a>
            </div>
        </motion.div>
    </div>
  )
}

export default Header