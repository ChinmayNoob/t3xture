"use client"

import { motion } from "motion/react"
import { FaHome } from "react-icons/fa";
import Link from "next/link"

export default function NotFound() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    const fadeInDelayed = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }


    return (
        <main className="flex flex-col items-center justify-center relative min-h-screen bg-black overflow-hidden">
            <section className="flex flex-col justify-center w-full max-w-6xl p-4 mx-auto items-center min-h-fit relative">
                <motion.div
                    className="absolute inset-0 z-0 flex items-center justify-center"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDelayed}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                >
                    <p className="font-poppins uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-b from-transparent to-[#4F46E8] text-[92px] sm:text-[110px] md:text-[300px] text-8xl leading-[0.9] whitespace-normal">
                        404
                    </p>
                </motion.div>

                <div className="flex flex-col justify-center text-center mx-auto mt-2 text-white gap-2 z-10">
                    <motion.h1
                        className="text-4xl mb-4 sm:text-8xl text-white font-bold font-poppins leading-tight"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                    >
                        Oops! Page Not Found
                    </motion.h1>
                    <motion.p className="font-poppins font-normal mx-auto text-center text-lg leading-tight w-full max-w-lg text-[#A3A3A3]"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    >
                        The page you are looking for does not exist. It might have been moved or deleted.
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                        className="mt-4"
                    >
                        <Link href="/" className="inline-flex px-8 py-3 bg-[#4F46E5] text-white rounded-lg font-medium hover:bg-[#4338CA]
                        transition-colors font-dmsans gap-2 items-center w-fit mx-auto">
                            <FaHome className="text-lg text-white" />
                            Back to Home
                        </Link>
                    </motion.div>

                </div>
            </section>

        </main>

    )
}
