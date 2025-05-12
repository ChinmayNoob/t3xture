"use client";  

import Link from "next/link";
import { motion } from "motion/react";

const NavbarLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}  
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="z-50"
    >
      <Link 
        href="/" 
        className="font-bold !z-50 whitespace-nowrap flex-nowrap flex items-center gap-3 font-poppins text-2xl md:text-3xl transition duration-300 hover:scale-105"
      >


        <span className="font-poppins uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#8983F5] to-[#4F46E8]">
          T3XTURE
        </span>
      </Link>
    </motion.div>
  );
};

export default NavbarLogo;
