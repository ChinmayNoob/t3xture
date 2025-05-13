'use client'

import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { CgArrowsExpandUpRight, CgWebsite } from 'react-icons/cg';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { GoProject } from 'react-icons/go';
import { TbBrand4Chan, TbBrandAzure } from 'react-icons/tb';
import { useInView } from 'react-intersection-observer'

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("ecommerce");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    })

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.3, ease: 'easeOut' } }
    };

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2, ease: 'easeInOut' } },
        tap: { scale: 0.95 },
    };

    const iconVariants = {
        hover: { rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }
    };

    const projectVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.4, ease: 'easeOut' } }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, ease: 'easeOut', duration: 0.4 } }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.6, ease: 'easeOut', when: 'beforeChildren', staggerChildren: 0.2 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } }
    }

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } }
    }

    const projects = {
        branding: [
            "/assets/projects/tonemaki.png",
            "/assets/projects/awp.png",
            "/assets/projects/greenspace.png",
            "/assets/projects/moore.png",


        ],
        ecommerce: [
            "/assets/projects/brewdistrict.png",
            "/assets/projects/sol.png",
            "/assets/projects/postfamiliar.png",
            "/assets/projects/mschf.png",
        ],
        finance: [
            "/assets/projects/xapo.png",
            "/assets/projects/composer.png",
            "/assets/projects/kiln.png",
            "/assets/projects/flayks.png",
        ],
        startups: [
            "/assets/projects/euveka.png",
            "/assets/projects/raycast.png",
            "/assets/projects/method.png",
            "/assets/projects/mainframe.png",

        ]
    };
    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="exit"
            variants={sectionVariants}
            className="bg-black w-full h-full flex flex-col py-16"
        >
            <div className='flex flex-col text-start mx-auto w-full max-w-7xl gap-8'>
                <div className='flex flex-col gap-3 px-6'>
                    <motion.div className='flex flex-col sm:flex-row justify-center sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0 mb-6'
                        variants={itemVariants}
                    >
                        <span className="inline-flex items-center justify-center bg-transparent bg-opacity-20 text-[#ccc] px-3 py-2 sm:py-1 rounded-full text-xs sm:text-sm font-medium font-dmsans w-full sm:w-auto">
                            <GoProject className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                            <span className="text-sm sm:text-md text-[#ccc] mr-1">530+</span> projects delivered
                        </span>
                        <span className="inline-flex items-center justify-center bg-transparent bg-opacity-20 text-[#ccc] px-3 py-2 sm:py-1 rounded-full text-xs sm:text-sm font-medium font-dmsans w-full sm:w-auto">
                            <AiOutlineCheckCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                            <span className="text-sm sm:text-md text-[#ccc] mr-1">98%</span> approval rate
                        </span>
                    </motion.div>

                    <h2 className='text-white text-3xl md:text-7xl max-w-5xl font-bold text-center font-poppins mx-auto'>
                        Excellence in <span className='text-indigo-700'>Projects</span> and Quality in <span className='text-indigo-700'>Solutions</span>
                    </h2>
                </div>

                <div className="flex justify-center px-6">
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-center bg-[#0A0A0A] rounded-xl overflow-hidden">
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => setSelectedCategory("branding")}
                            className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "branding" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
                        >
                            <motion.span variants={iconVariants}>
                                <TbBrand4Chan className="text-xl" />
                            </motion.span>
                            Brandings
                        </motion.button>
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => setSelectedCategory("ecommerce")}
                            className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "ecommerce" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
                        >
                            <motion.span variants={iconVariants}>
                                <CgWebsite className="text-xl" />
                            </motion.span>
                            Ecommerce
                        </motion.button>
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => setSelectedCategory("finance")}
                            className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "finance" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
                        >
                            <motion.span variants={iconVariants}>
                                <FaMoneyBillTrendUp className="text-xl" />
                            </motion.span>
                            Finance
                        </motion.button>
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => setSelectedCategory("startups")}
                            className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "startups" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
                        >
                            <motion.span variants={iconVariants}>
                                <TbBrandAzure className="text-xl" />
                            </motion.span>
                            Startups
                        </motion.button>
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-12 gap-6 px-6"
                    >
                        {projects[selectedCategory as keyof typeof projects].map((image: string, index: number) => (
                            <motion.div
                                key={index}
                                variants={projectVariants}
                                className={`relative rounded-lg overflow-hidden cursor-pointer ${index <= 1 ? (
                                    index === 0 ? 'md:col-span-7 h-[300px]' : 'md:col-span-5 h-[300px]'
                                ) :
                                    index === 2 ? 'md:col-span-4 h-[300px]' : 'md:col-span-8 h-[300px]'
                                    }`}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setSelectedImage(image)}
                            >
                                <Image
                                    src={image}
                                    alt={`Project ${index + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500"
                                    priority={index === 0}
                                    quality={90}
                                />
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center"
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={overlayVariants}
                                        >
                                            <motion.button
                                                className="bg-indigo-600/80 p-3 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-all duration-300 hover:scale-110"
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <CgArrowsExpandUpRight className="w-6 h-6 text-white" />
                                            </motion.button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
                        >
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                                className="relative max-w-4xl w-full max-h-[80vh] aspect-auto bg-black/40 rounded-xl overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={selectedImage}
                                    alt="Projeto em tamanho completo"
                                    className="object-contain w-full h-full"
                                    width={1280}
                                    height={720}
                                />
                                <motion.button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-6 right-6 text-white bg-black/60 hover:bg-black/80 rounded-full p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-white/20"
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>


            </div>

        </motion.section>

    )
}

