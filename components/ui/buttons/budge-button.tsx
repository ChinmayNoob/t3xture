"use client";

import { motion } from 'motion/react'
import Link from "next/link";
import { PiStarFourFill } from "react-icons/pi";

const MakeBudge = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="z-50"
        >
            <Link
                href="/plannings"
                className="py-2 px-4 md:py-2.5 md:px-5 hidden sm:inline-flex bg-t3xture text-white rounded-xl text-sm font-poppins font-medium items-center gap-2 transition duration-300 hover:scale-105 hover:bg-white hover:text-black"
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    <PiStarFourFill />
                </motion.div>
                <span className="whitespace-nowrap">Explore T3xture</span>
            </Link>
        </motion.div>
    );
};

export default MakeBudge;
