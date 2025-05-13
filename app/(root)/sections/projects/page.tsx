"use client"

import { PiHandSwipeRightBold } from "react-icons/pi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDesignServices, MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { useInView } from "react-intersection-observer";
import { TbMessage2Star } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("ecommerce");
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
        rootMargin: '-10px 0px',
        delay: 100
    });

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 15
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.95
        }
    };

    const iconVariants = {
        hover: {
            rotate: [0, -10, 10, -10, 0],
            transition: {
                duration: 0.5
            }
        }
    };

    const projectVariants = {
        hidden: {
            opacity: 0,
            y: 15
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                ease: "easeOut",
                duration: 0.4
            }
        }
    };

    const overlayVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2
            }
        }
    };

    const sectionVariants = {
        hidden: {
            opacity: 0,
            y: 15
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            y: -15,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

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
        ]
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="exit"
            variants={sectionVariants}
            id="projects"
            className="bg-black w-full h-full flex flex-col py-16"
        >
            <div className="flex flex-col text-start mx-auto w-full max-w-6xl gap-8">
                <div className="flex flex-col gap-3 px-6">
                    <motion.div
                        className="flex flex-col sm:flex-row justify-center sm:justify-start sm:space-x-4 space-y-4 sm:space-y-0 mb-6"
                        variants={itemVariants}
                    >
                        <span className="inline-flex items-center justify-center sm:justify-start bg-transparent bg-opacity-20 text-[#ccc] px-3 py-2 sm:py-1 rounded-full text-xs sm:text-sm font-medium font-dmsans w-full sm:w-auto">
                            <TbMessage2Star className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                            <span className="text-sm sm:text-md text-[#ccc] mr-1">127+</span> projects delivered
                        </span>
                        <span className="inline-flex items-center justify-center sm:justify-start bg-transparent bg-opacity-20 text-[#ccc] px-3 py-2 sm:py-1 rounded-full text-xs sm:text-sm font-medium font-dmsans w-full sm:w-auto">
                            <MdOutlineSwitchAccessShortcutAdd className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                            <span className="text-sm sm:text-md text-[#ccc] mr-1">902.10k</span> views generated
                        </span>
                    </motion.div>

                    <h2 className="text-white text-3xl md:text-5xl font-bold font-poppins text-center md:text-left">
                        Real <span className="text-indigo-600">Impact</span> with <span className="text-indigo-600">Visible Results.</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between px-6 gap-6 md:gap-0">
                    <div className="flex flex-wrap md:flex-nowrap items-center justify-center w-full md:w-auto bg-[#0A0A0A] rounded-xl overflow-hidden">
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            onClick={() => setSelectedCategory("branding")}
                            className={`text-[#ccc] w-full md:w-auto ${selectedCategory === "branding" ? "bg-indigo-600 text-white" : "hover:bg-indigo-600 hover:text-white"} duration-300 transition-all font-poppins px-6 py-3 flex items-center justify-center md:justify-start gap-2`}
                        >
                            <motion.span variants={iconVariants}>
                                <HiOutlineViewGrid className="text-xl" />
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
                                <MdOutlineDesignServices className="text-xl" />
                            </motion.span>
                            Finance
                        </motion.button>
                    </div>

                    <Link
                        href="/projects"
                        className="text-indigo-600 font-medium hover:text-white group transition-colors font-poppins flex items-center gap-2"
                    >
                        See all
                        <motion.span
                            className="text-lg"
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <PiHandSwipeRightBold />
                        </motion.span>
                    </Link>
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
                                    alt={`Projeto ${index + 1}`}
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
                                                className="bg-indigo-700 p-3 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-all duration-300 hover:scale-110"
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

                {/* Modal */}
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
    );
};

export default Projects;
