"use client"

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { IoArrowForward, IoVideocam } from "react-icons/io5";

const ContactUs = () => {
    const ref = useRef(null);
    const inView = useInView(ref, {
        amount: 0.3,
        once: false
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };


    return (
        <section ref={ref} className="bg-black w-full h-full max-w-5xl py-8 px-4 sm:px-6 mx-auto justify-center z-50" id="contact-us">
            <motion.div
                className="flex flex-col mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.div
                    variants={itemVariants}
                    className="inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-full text-[11px] sm:text-sm font-medium font-dmsans mx-auto text-indigo-200 mb-4 sm:mb-6 sm:border-2 border-dashed border-indigo-500/30 hover:border-indigo-500/50 transition-colors duration-300"
                    whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.2 }
                    }}
                >
                    <span className="bg-indigo-600 text-white px-3 py-1.5 sm:px-3 sm:py-1 rounded-md text-[10px] sm:text-xs font-bold whitespace-nowrap w-fit mx-auto sm:mx-0">
                        Until 12/25
                    </span>
                    <span className="text-center sm:text-left text-sm mt-1 sm:mt-0 px-2">
                        Get 30% off your first purchase!
                    </span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-white text-3xl sm:text-5xl md:text-6xl font-poppins font-bold mb-4"
                >
                    Ready to Start? <br /><span className="text-indigo-600 text-3xl sm:text-6xl md:text-7xl">Contact Us!</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-[#A3A3A3] font-dmsans font-normal max-w-2xl mx-auto text-base sm:text-lg mb-6 sm:mb-8 px-2 sm:px-0"
                >
                    We are here to help you. Fill out the form below and we will contact you as soon as possible.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-0"
                >
                    <motion.div
                        className="w-full sm:w-auto"
                        whileHover={{
                            scale: 1.02,
                            transition: {
                                duration: 0.2,
                                ease: "easeOut"
                            }
                        }}
                    >
                        <Link
                            href="/plannings"
                            className="py-3 px-6 inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-indigo-600 text-white font-poppins font-normal text-sm rounded-xl"
                        >
                            <motion.div
                                className="flex items-center gap-2"
                                whileHover={{
                                    x: 2.6,
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeOut"
                                    }
                                }}
                            >
                                <IoArrowForward className="text-white text-lg" />
                                Explore T3xture
                            </motion.div>
                        </Link>
                    </motion.div>

                    <motion.div
                        className="w-full sm:w-auto"
                        whileHover={{
                            scale: 1.02,
                            transition: {
                                duration: 0.2,
                                ease: "easeOut"
                            }
                        }}
                    >
                        <Link
                            href=""
                            target="_blank"
                            className="py-3 px-6 inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-white text-black font-poppins font-normal text-sm rounded-xl"
                        >
                            <motion.div
                                className="flex items-center gap-2"
                                whileHover={{
                                    y: -1.8,
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeOut"
                                    }
                                }}
                            >
                                <IoVideocam className="text-lg" />
                                Schedule a Meeting
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactUs;