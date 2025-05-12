"use client"

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { FaDiscord, FaWhatsapp } from 'react-icons/fa6'
import { RiMacbookLine } from 'react-icons/ri'
import { FaHeadphonesAlt } from 'react-icons/fa'
import Image from 'next/image'
import { GiRoundStar } from 'react-icons/gi'
import Sales from './sections/sales/page'
import AboutUs from './sections/about-us/page'

export default function Home() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    const fadeInDelayed = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const wordAnimation = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    }

    const [reviewCount, setReviewCount] = useState(2500)
    const targetReviewCount = 4424;

    useEffect(() => {
        let currentCount = reviewCount;
        const interval = setInterval(() => {
            if (currentCount < targetReviewCount) {
                currentCount += Math.ceil((targetReviewCount - currentCount) / 10);
                setReviewCount(currentCount);
            }
            else {
                clearInterval(interval);
            }
        }, 80);

        return () => clearInterval(interval);
    }, [reviewCount]);

    const bounceAnimation = {
        y: [0, -6, 0],
        transition: { duration: 0.4, repeat: Infinity, ease: "easeInOut" },
    };



    return (
        <main
            className='flex flex-col items-center justify-between relative min-h-screen bg-black overflow-hidden'
        >
            <section
                className="flex flex-col md:flex-row justify-start w-full max-w-5xl mx-auto items-center py-6 px-4 min-h-fit relative"
            >
                <motion.div
                    className='absolute inset-0 flex items-center justify-center z-0 translate-y-[190px]'
                    initial='hidden'
                    animate='visible'
                    variants={fadeInDelayed}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                >
                    <p className='font-poppins uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-b from-transparent to-[#4F46E8] text-[92px] sm:text-[110px] md:text-[300px] text-8xl leading-[0.9] whitespace-nowrap mb-20'>
                        T3XTURE
                    </p>
                </motion.div>

                <div className='flex flex-col text-center text-white lg:text-start mt-2 gap-2 lg:mt-16 lg:z-50'>
                    <motion.div
                        className='flex md:hidden mx-auto xl:mx-0 gap-10 p-2 items-center'
                        initial='hidden'
                        animate='visible'
                        variants={fadeInUp}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    >
                        <Link
                            href="/"
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaDiscord
                                className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]"
                            />
                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                        >
                            <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]" />
                        </Link>
                        <Link href="/projetos" target="_blank" rel="noopener noreferrer">
                            <RiMacbookLine className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]" />
                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaHeadphonesAlt className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]" />
                        </Link>
                    </motion.div>
                    <div
                        className="flex flex-col sm:flex-row sm:items-start sm:justify-start md:hidden mx-auto lg:mx-0 items-center justify-center text-center gap-2"
                    >
                        <div className="relative -mt-1 flex -space-x-3">
                            <Link href='#reviews'>
                                <Image
                                    width={40}
                                    height={40}
                                    src="/assets/avatars/avatar1.png"
                                    alt="Avatar 1"
                                    className="w-10 h-10 rounded-full border-2 hover:border-t3xture transition duration-200 border-[#101010]
                            "
                                />
                            </Link>
                            <Link href="#reviews">
                                <Image
                                    width={40}
                                    height={40}
                                    src="/assets/avatars/avatar2.png"
                                    alt="Avatar 2"
                                    className="w-10 h-10  transition duration-200 hover:border-t3xture rounded-full border-2 border-[#101010]"
                                />
                            </Link>

                            <Link href="#reviews">
                                <Image
                                    width={40}
                                    height={40}
                                    src="/assets/avatars/avatar3.png"
                                    alt="Avatar 3"
                                    className="w-10 h-10 transition duration-200 hover:border-t3xture rounded-full border-2 border-[#101010]"
                                />
                            </Link>

                            <Link href="#reviews">
                                <Image
                                    width={40}
                                    height={40}
                                    src="/assets/avatars/avatar4.png"
                                    alt="Avatar 4"
                                    className="w-10 h-10 transition duration-200 hover:border-t3xture rounded-full border-2 border-[#101010]"
                                />
                            </Link>
                        </div>
                        <motion.div
                            className="flex items-center mb-4 py-2 px-3 max-w-[160px] gap-1 border border-[#222222] bg-[#101010] rounded-xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <GiRoundStar className="text-t3xture" />
                            <GiRoundStar className="text-t3xture" />
                            <GiRoundStar className="text-t3xture" />
                            <GiRoundStar className="text-t3xture" />
                            <GiRoundStar className="text-t3xture" />

                            <motion.span
                                className="text-[#fff9] text-xs font-dmsans font-normal"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <motion.span animate={bounceAnimation}>
                                    ({reviewCount})
                                </motion.span>
                            </motion.span>
                        </motion.div>
                    </div>
                    <motion.h1
                        className="text-4xl mb-4 lg:mb-0 sm:text-6xl md:text-8xl text-white font-bold font-poppins leading-tight"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-white">Platforms</span> for{" "}
                        <AnimatePresence mode="wait">
                            <motion.span
                                className="text-[#4F46E5] inline-block"
                                variants={wordAnimation}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                Growth.
                            </motion.span>
                        </AnimatePresence>
                    </motion.h1>
                    <motion.div
                        className="hidden md:flex mx-auto xl:mx-0 gap-10 py-4 px-2 items-center"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    >
                        <Link
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaDiscord className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]" />
                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]" />
                        </Link>
                        <Link href="/projetos" target="_blank" rel="noopener noreferrer">
                            <RiMacbookLine className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]" />
                        </Link>
                        <Link
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaHeadphonesAlt className="w-6 h-6 md:w-8 md:h-8 transition duration-300 hover:scale-110 cursor-pointer hover:text-[#717BFE]" />
                        </Link>
                    </motion.div>
                </div>
                <motion.div
                    className="flex flex-col sm:text-center lg:text-start"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                >
                    <div className="hidden md:flex mx-auto lg:mx-0 items-start justify-start text-center gap-2">
                        <div className="relative -mt-1 flex -space-x-3">
                            <Link href="#avaliacoes">
                                <Image
                                    width={40}
                                    height={40}
                                    src="/assets/avatars/avatar1.png"
                                    alt="Avatar 1"
                                    className="w-10 h-10 transition duration-200 hover:border-t3xture rounded-full border-2 border-[#101010]"
                                />
                            </Link>

                            <Link href="#avaliacoes">
                                <Image
                                    width={40}
                                    height={40}
                                    src="/assets/avatars/avatar2.png"
                                    alt="Avatar 2"
                                    className="w-10 h-10  transition duration-200 hover:border-t3xture rounded-full border-2 border-[#101010]"
                                />
                            </Link>

                            <Link href="#avaliacoes">
                                <Image
                                    width={40}
                                    height={40}
                                    src="/assets/avatars/avatar3.png"
                                    alt="Avatar 3"
                                    className="w-10 h-10 transition duration-200 hover:border-t3xture rounded-full border-2 border-[#101010]"
                                />
                            </Link>

                            <Link href="#avaliacoes">
                                <Image
                                    width={40}
                                    height={40}
                                    src="/assets/avatars/avatar4.png"
                                    alt="Avatar 4"
                                    className="w-10 h-10 transition duration-200 hover:border-t3xture rounded-full border-2 border-[#101010]"
                                />
                            </Link>
                        </div>

                        <motion.div
                            className="flex items-center mb-4 py-2 px-3 max-w-[160px] border border-[#222222] gap-1 bg-[#101010] rounded-xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <GiRoundStar className="text-t3xture" />
                            <GiRoundStar className="text-t3xture" />
                            <GiRoundStar className="text-t3xture" />
                            <GiRoundStar className="text-t3xture" />
                            <GiRoundStar className="text-t3xture" />
                            <motion.span
                                className="text-[#fff9] text-xs font-dmsans font-normal"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <motion.span animate={bounceAnimation}>
                                    ({reviewCount})
                                </motion.span>
                            </motion.span>
                        </motion.div>
                    </div>

                    <p className="font-poppins font-normal text-center sm:text-start text-sm leading-tight w-full max-w-lg text-[#A3A3A3] mb-4">
                        We are experts in web design and development, creating
                        unique solutions that boost your business and delight your
                        customers.
                    </p>
                </motion.div>
            </section>
            <Sales />
            <AboutUs />
        </main>

    )

}
